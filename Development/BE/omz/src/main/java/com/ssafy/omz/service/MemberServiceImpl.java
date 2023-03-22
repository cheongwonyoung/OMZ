package com.ssafy.omz.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafy.omz.dto.resp.BoardResponseDto;
import com.ssafy.omz.dto.resp.KakaoUserInfoDto;
import com.ssafy.omz.dto.resp.MemberResponseDto;
import com.ssafy.omz.dto.resp.TokenDto;
import com.ssafy.omz.entity.Member;
import com.ssafy.omz.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.stream.Collectors;


@RequiredArgsConstructor
@Service("MemberService")
public class MemberServiceImpl implements MemberService{
    private final MemberRepository memberRepository;

    private final JwtService jwtService;
    @Override
    public TokenDto kakaoLogin(String token) throws JsonProcessingException{
        // 토큰으로 카카오 api 호출
        KakaoUserInfoDto kakaoUserInfo = getKakaoUserInfo(token);

        // 카카오 아이디로 회원가입 처리 (이미 존재하면 기존 access token 가져오기) 후 발급받은 access token
        TokenDto arToken = registerKakaoUserIfNeed(kakaoUserInfo);

        return arToken;
    }

    @Override
    public boolean refreshCheck(String token) {
        Member member = memberRepository.findByToken(token).orElse(null);

        // refresh token이 존재 X
        if(member == null){
            return false;
        }

        return true;

    }

    @Override
    public String memberEmail(String token) {
        Member member = memberRepository.findByToken(token).orElse(null);
        return member.getEmail();
    }

    // 카카오 id로 회원가입 처리 ( 없으면 해당 유저정보 반환 )

    private TokenDto registerKakaoUserIfNeed(KakaoUserInfoDto kakaoUserInfo) {
        // 이미 회원인지 확인
        String email = kakaoUserInfo.getEmail();
        Member member = memberRepository.findByEmail(email).orElse(null);
        // 리프레시 토큰 생성
        String rtoken;

        if (member == null) {
            // 회원가입
            rtoken = jwtService.createRefreshToken("userEmail", email); // refresh token 생성
            // member정보 기입해서 db에 넣기 (refresh token, email)
            member = new Member();
            member.setEmail(email);
            member.setToken(rtoken);
            memberRepository.save(member);
        }
        else{
            // refresh token
            rtoken = member.getToken();
        }

        // 엑세스 토큰 생성
        String atoken = jwtService.createAccessToken("userEmail", email); // access token 생성

        return new TokenDto(atoken, rtoken);

    }
    // 토큰으로 카카오 API 호출
    private KakaoUserInfoDto getKakaoUserInfo(String token) throws JsonProcessingException  {

        // HTTP Header 생성
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "Bearer " + token);
        headers.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");

        // HTTP 요청 보내기
        HttpEntity<MultiValueMap<String, String>> kakaoUserInfoRequest = new HttpEntity<>(headers);
        RestTemplate rt = new RestTemplate();
        ResponseEntity<String> response = rt.exchange(
                "https://kapi.kakao.com/v2/user/me",
                HttpMethod.POST,
                kakaoUserInfoRequest,
                String.class
        );

        // 카카오에서 반환해준 유저 정보
        // responseBody에 있는 정보를 꺼냄
        String responseBody = response.getBody();
        ObjectMapper objectMapper = new ObjectMapper();
        JsonNode jsonNode = objectMapper.readTree(responseBody);

        Long id = jsonNode.get("id").asLong();
        String email = jsonNode.get("kakao_account").get("email").asText();
        String nickname = jsonNode.get("properties")
                .get("nickname").asText();
//        Long id = (long) 1.0;
//        String email = "test";
//        String nickname = "test1";
        return new KakaoUserInfoDto(id, nickname, email);

    }
    @Override
    public List<MemberResponseDto.LittleInfo> getMemberList(String word) {
        return memberRepository.findByNickname(word).stream()
                .map(MemberResponseDto.LittleInfo::fromEntity)
                .collect(Collectors.toList());
    }
}

package com.ssafy.omz.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafy.omz.dto.req.FaceRequestDto;
import com.ssafy.omz.dto.req.MemberRequestDto;
import com.ssafy.omz.dto.resp.BoardResponseDto;
import com.ssafy.omz.dto.resp.KakaoUserInfoDto;
import com.ssafy.omz.dto.resp.MemberResponseDto;
import com.ssafy.omz.dto.resp.TokenDto;
import com.ssafy.omz.entity.*;
import com.ssafy.omz.repository.*;
import io.jsonwebtoken.Jwts;
import lombok.RequiredArgsConstructor;
import com.google.cloud.storage.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.MultiValueMap;
import org.springframework.util.StringUtils;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import javax.persistence.RollbackException;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.*;
import java.util.UUID;
import java.util.*;
import java.util.List;
import java.util.stream.Collectors;
import java.util.Map.Entry;

@RequiredArgsConstructor
@Service("MemberService")
public class MemberServiceImpl implements MemberService{
    private final MemberRepository memberRepository;

    private final JwtService jwtService;

    private final Storage storage;
    private final FaceRepository faceRepository;
    private final MiniRoomRepository miniRoomRepository;
    private final ItemRepository itemRepository;
    private static final String SECRET_KEY  = "CREATEDBYWY";
    private final ItemTypeRepository itemTypeRepository;
    private final GuestBookRepository guestBookRepository;

//    @Value("${spring.cloud.gcp.storage.bucket}") // application.yml에 써둔 bucket 이름
//    private String bucketName;

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


    // 회원 정보 수정
    @Override
    public void updateMemberInfo(String token, MultipartFile file, MemberRequestDto.MemberInfo memberInfo, FaceRequestDto.Write faceInfo, FaceRequestDto.Write prefeFaceInfo) throws UnsupportedEncodingException {
        String bucketName = "omz-bucket";
        String saveFileName = UUID.randomUUID() + StringUtils.cleanPath(file.getOriginalFilename());
        try(InputStream inputStream = file.getInputStream()) {
            Image processedImage = ImageIO.read(inputStream);

            BufferedImage scaledBI = new BufferedImage(200, 200, BufferedImage.TYPE_INT_RGB);
            Graphics2D g = scaledBI.createGraphics();
            g.drawImage(processedImage, 0, 0, 200, 200, null);
            g.dispose();

            ByteArrayOutputStream os = new ByteArrayOutputStream();
            ImageIO.write(scaledBI, "jpg", os);

            InputStream processedInputStream = new ByteArrayInputStream(os.toByteArray());

            storage.create(BlobInfo.newBuilder(bucketName, saveFileName).build(), processedInputStream);
        } catch (IOException e) {
            e.printStackTrace();
        }

        String email = (String) Jwts.parser().
                setSigningKey(SECRET_KEY.
                        getBytes("UTF-8"))
                .parseClaimsJws(token)
                .getBody()
                .get("userEmail");
        Member member = memberRepository.findByEmail(email).orElse(null);

        FaceRequestDto.Write face = faceInfo;
        FaceRequestDto.Write preferFace = prefeFaceInfo;

        // 가장 닮은 관상 찾기
        // HashMap 준비
        Map<String, Double> map = new HashMap<>();
        map.put("강아지", face.getDog());
        map.put("고양이", face.getCat());
        map.put("곰", face.getBear());
        map.put("토끼", face.getRabbit());
        map.put("공룡", face.getDino());
        map.put("여우", face.getFox());

        // Max
        Entry<String, Double> maxEntry = null;

        // Iterator
        Set<Entry<String, Double>> entrySet = map.entrySet();
        for (Entry<String, Double> entry : entrySet) {
            if (maxEntry == null || entry.getValue() > maxEntry.getValue()) {
                maxEntry = entry;
            }
        }
        String myFace = maxEntry.getKey();

        // 미니룸 저장
        miniRoomRepository.save(MiniRoom.builder().member(member).stateMessage("").build());

        // 아이템 정보 저장
        itemRepository.save(Item.builder().member(member).itemType(itemTypeRepository.findByItemTypeName("avatar")).state(0).name("hat").build());
        itemRepository.save(Item.builder().member(member).itemType(itemTypeRepository.findByItemTypeName("avatar")).state(0).name("glasses").build());
        itemRepository.save(Item.builder().member(member).itemType(itemTypeRepository.findByItemTypeName("avatar")).state(0).name("wing").build());

        // 아이템 정보 저장
        itemRepository.save(Item.builder().member(member).itemType(itemTypeRepository.findByItemTypeName("miniRoom")).state(0).name("bed").build());
        itemRepository.save(Item.builder().member(member).itemType(itemTypeRepository.findByItemTypeName("miniRoom")).state(0).name("table").build());
        itemRepository.save(Item.builder().member(member).itemType(itemTypeRepository.findByItemTypeName("miniRoom")).state(0).name("lamp").build());
        itemRepository.save(Item.builder().member(member).itemType(itemTypeRepository.findByItemTypeName("miniRoom")).state(0).name("drawer").build());
        itemRepository.save(Item.builder().member(member).itemType(itemTypeRepository.findByItemTypeName("miniRoom")).state(0).name("clock").build());

        memberRepository.save(
                memberRepository.findByEmail(email).get().updateMemberInfo(
                        memberInfo.getMbti(),
                        memberInfo.getNickname(),
                        saveFileName,
                        // 내 관상 저장
                        faceRepository.save(Face.builder()
                                .dogProbability(face.getDog())
                                .catProbability(face.getCat())
                                .bearProbability(face.getBear())
                                .rabbitProbability(face.getRabbit())
                                .dinoProbability(face.getDino())
                                .foxProbability(face.getFox())
                                .build()),
                        // 선호하는 관상 저장
                        faceRepository.save(Face.builder()
                                .dogProbability(preferFace.getDog())
                                .catProbability(preferFace.getCat())
                                .bearProbability(preferFace.getBear())
                                .rabbitProbability(preferFace.getRabbit())
                                .dinoProbability(preferFace.getDino())
                                .foxProbability(preferFace.getFox())
                                .build()),
                        myFace

                )

        );


    }

    // 회원정보 조회 (회원가입용)
    @Override
    public MemberResponseDto.MemberInfo getJoinMemberInfo(String token) throws UnsupportedEncodingException {
        String email = (String) Jwts.parser().
                setSigningKey(SECRET_KEY.
                        getBytes("UTF-8"))
                .parseClaimsJws(token)
                .getBody()
                .get("userEmail");
        Member member = memberRepository.findByEmail(email).orElse(null);
        if(member.getFaceName()==null){
            return null;
        }

        return MemberResponseDto.MemberInfo.fromEntity(member);
    }

    // 회원정보 조회
    @Override
    public MemberResponseDto.MemberInfo getMemberInfo(String token) throws UnsupportedEncodingException {
        String email = (String) Jwts.parser().
                setSigningKey(SECRET_KEY.
                        getBytes("UTF-8"))
                .parseClaimsJws(token)
                .getBody()
                .get("userEmail");
        Member member = memberRepository.findByEmail(email).orElse(null);

        return MemberResponseDto.MemberInfo.fromEntity(member);
    }

    // 회원정보 조회 (채팅)
    @Override
    public MemberResponseDto.LittleInfo getLittleInfo(String token) throws UnsupportedEncodingException {
        String email = (String) Jwts.parser().
                setSigningKey(SECRET_KEY.
                        getBytes("UTF-8"))
                .parseClaimsJws(token)
                .getBody()
                .get("userEmail");
        Member member = memberRepository.findByEmail(email).orElse(null);
        return MemberResponseDto.LittleInfo.fromEntity(member);
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
}


package com.ssafy.omz.api;

import antlr.Token;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.ssafy.omz.dto.TokenDto;
import com.ssafy.omz.service.JwtService;
import com.ssafy.omz.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/member")
@RequiredArgsConstructor
public class MemberController {
    private final MemberService memberService;
    private final JwtService jwtService;

    // 카카오 로그인
    @PostMapping("/login")
    public ResponseEntity<TokenDto> kakaoLogin(@RequestHeader(value = "access_token") String token) throws JsonProcessingException {

        TokenDto tokenDto = null;
        try {
            // 카카오 유효성 확인 후 acceess token, refresh token 발급
            tokenDto = memberService.kakaoLogin(token);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return new ResponseEntity<TokenDto>(tokenDto, HttpStatus.ACCEPTED);

    }

    // access token 재발급
    @PostMapping("/refresh")
    public ResponseEntity<TokenDto> refreshToken(@RequestHeader(value = "refresh_token") String token) throws Exception {

        TokenDto tokenDto = null;
        try {
            // DB에 refresh token이 존재하고, refresh token이 만료되지 않았으면 access token 재발급
            if(memberService.refreshCheck(token) && jwtService.checkToken(token)){
                String newToken = jwtService.createAccessToken("userEmail", memberService.memberEmail(token));
                tokenDto.setAccessToken(newToken);
                tokenDto.setRefreshToken(token);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return new ResponseEntity<TokenDto>(tokenDto, HttpStatus.ACCEPTED);
    }

    // test
    @PostMapping("/test")
    public String test(@RequestHeader(value = "access_token") String token) throws JsonProcessingException {

        return "test";

    }
}

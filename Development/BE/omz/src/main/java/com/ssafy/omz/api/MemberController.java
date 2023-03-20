package com.ssafy.omz.api;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.ssafy.omz.dto.res.TokenDto;
import com.ssafy.omz.service.JwtService;
import com.ssafy.omz.service.MemberService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
@Api("memberController API v1")
@RestController
@RequestMapping("/api/member")
@RequiredArgsConstructor
public class MemberController {
    private final MemberService memberService;
    private final JwtService jwtService;

    public static final Logger logger = LoggerFactory.getLogger(MemberController.class);

    @ApiOperation(value = "카카오 로그인", notes = "kakao token을 받아 유효성 검사 후 access, refresh token 발급")
    @ApiImplicitParam(
            name = "login"
            , value = "카카오 로그인 정보"
            , defaultValue = "None")
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
        logger.info("refresh_token : {}", token);
        try {
            // DB에 refresh token이 존재하고, refresh token이 만료되지 않았으면 access token 재발급
            logger.debug("여기옴 ????????");
            if(memberService.refreshCheck(token) && jwtService.checkToken(token)){
                logger.debug("여긴 안옴 ??????????");
                String newToken = jwtService.createAccessToken("userEmail", memberService.memberEmail(token));
                logger.info("new_tokesadan : {}", memberService.memberEmail(token));
                logger.info("new_token : {}", newToken);
//                tokenDto.setAccessToken(newToken);
//                tokenDto.setRefreshToken(token);
                tokenDto = new TokenDto(newToken,null);
            }
        } catch (Exception e) {
            logger.debug("여긴 ??????????");
            e.printStackTrace();
        }
//        return new ResponseEntity<TokenDto>(tokenDto, HttpStatus.ACCEPTED);
        return new ResponseEntity<TokenDto>(tokenDto, HttpStatus.ACCEPTED);

    }

    // test
    @PostMapping("/test")
    public String test(@RequestHeader(value = "access_token") String access_token) throws JsonProcessingException {

        return access_token;

    }
}

package com.ssafy.omz.api;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafy.omz.dto.req.BoardRequestDto;
import com.ssafy.omz.dto.req.FaceRequestDto;
import com.ssafy.omz.dto.req.MemberRequestDto;
import com.ssafy.omz.dto.resp.MemberResponseDto;
import com.ssafy.omz.dto.resp.TokenDto;
import com.ssafy.omz.service.JwtService;
import com.ssafy.omz.service.MemberService;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.multipart.MultipartFile;

@Api("memberController API v1")
@RestController
@RequestMapping("/member")
@RequiredArgsConstructor
public class MemberController {
    private final MemberService memberService;
    private final JwtService jwtService;
    public static final Logger logger = LoggerFactory.getLogger(MemberController.class);
    private static final String SECRET_KEY  = "CREATEDBYWY";
    @ApiOperation(value = "카카오 로그인", notes = "kakao token을 받아 유효성 검사 후 access, refresh token 발급")
    @ApiImplicitParam(
            name = "access_token"
            , required = true
            , value = "카카오 토큰"
            , defaultValue = "None")
    @PostMapping("/login")
    public ResponseEntity<?> kakaoLogin(@RequestHeader(value = "access_token") String token) throws JsonProcessingException {

        // access, refresh token을 담을 response dto
        TokenDto tokenDto = null;
        try {
            // 카카오 유효성 확인 후 acceess token, refresh token 발급
            tokenDto = memberService.kakaoLogin(token);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<TokenDto>(tokenDto, HttpStatus.OK);

    }

    @ApiOperation(value = "access token 재발급", notes = "refresh token을 받아 access token 발급")
    @ApiImplicitParam(
            name = "refresh_token"
            , required = true
            , value = "access token 재발급 용도"
            , defaultValue = "None")
    @PostMapping("/refresh")
    public ResponseEntity<?> refreshToken(@RequestHeader(value = "refresh_token") String token) throws Exception {
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
                tokenDto = new TokenDto(newToken,null);
            }
        } catch (Exception e) {
            logger.debug("여긴 ??????????");
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return new ResponseEntity<TokenDto>(tokenDto, HttpStatus.OK);

    }
//, consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE}

    @ApiOperation(value = "유저 정보", notes = "유저 아이디를 받아 유저 정보 반환")
    //MediaType.APPLICATION_JSON_VALUE
    @GetMapping(value = "/info")
    public ResponseEntity<?> memberInfo(@RequestHeader(value = "access_token") String token) throws Exception {
        try {
            MemberResponseDto.MemberInfo result = memberService.getJoinMemberInfo(token);
            if(result==null){
                return new ResponseEntity<>(false, HttpStatus.OK);
            }
            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @ApiOperation(value = "유저 회원가입", notes = "유저 정보를 받아 유저 정보 저장")
    //MediaType.APPLICATION_JSON_VALUE
    @PostMapping(value = "/update",consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResponseEntity<?> updateMemberInfo(@RequestHeader(value = "access_token") String token, @RequestParam(value="file") MultipartFile file, @RequestParam String member, @RequestParam String face, @RequestParam String preferFace) throws Exception {
        try {
            ObjectMapper mapper = new ObjectMapper();
            MemberRequestDto.MemberInfo memberInfo = mapper.readValue(member, MemberRequestDto.MemberInfo.class);
            FaceRequestDto.Write faceInfo = mapper.readValue(face, FaceRequestDto.Write.class);
            FaceRequestDto.Write prefeFacerInfo = mapper.readValue(preferFace, FaceRequestDto.Write.class);

            MemberResponseDto.MemberInfo result = memberService.updateMemberInfo(token, file, memberInfo,faceInfo,prefeFacerInfo);
            return new ResponseEntity<>(result, HttpStatus.ACCEPTED);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @ApiOperation(value = "사진 변경", notes = "프로필 사진정보 변경")
    @PatchMapping(value = "/image")
    public ResponseEntity<?> changeImage(@RequestHeader(value = "access_token") String token, @RequestParam(value="file") MultipartFile file) throws Exception {
        try {
            MemberResponseDto.MemberInfo result = memberService.changeImage(token, file);
            return new ResponseEntity<>(result,HttpStatus.ACCEPTED);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @ApiOperation(value = "유저 회원가입", notes = "유저 정보를 받아 유저 정보 저장")
    @GetMapping(value = "/test")
    public ResponseEntity<?> test(@RequestParam String test) throws Exception {
        String token = jwtService.createAccessToken("userEmail", test);
        try {

            return new ResponseEntity<>(token, HttpStatus.ACCEPTED);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }



}

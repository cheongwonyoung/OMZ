package com.ssafy.omz.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.ssafy.omz.dto.resp.MemberResponseDto;
import com.ssafy.omz.dto.resp.TokenDto;
import com.ssafy.omz.dto.req.FaceRequestDto;
import com.ssafy.omz.dto.req.MemberRequestDto;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface MemberService{
    // 카카오 유저 정보 확인 후 token 발급
    TokenDto kakaoLogin(String token) throws JsonProcessingException;

    // DB에서 refresh token 확인
    boolean refreshCheck(String token);

    // refresh code에 해당하는 유저 email 반환
    String memberEmail(String token);

//    void updateMemberInfo(Long memberId, MemberRequestDto.Write member);
}

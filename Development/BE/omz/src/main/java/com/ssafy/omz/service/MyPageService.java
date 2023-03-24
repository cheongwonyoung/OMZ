package com.ssafy.omz.service;

import com.ssafy.omz.dto.resp.MemberResponseDto;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public interface MyPageService {
    Map<String, Object> getMyPageMain(Long memberId);

    MemberResponseDto.MyPageModifyInfo getMyPageModify(Long memberId);

    Map<String, Object> getMyPageCustom(Long memberId);
}

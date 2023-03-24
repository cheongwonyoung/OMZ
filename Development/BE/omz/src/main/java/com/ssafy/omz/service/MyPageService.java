package com.ssafy.omz.service;

import com.ssafy.omz.dto.req.FaceRequestDto;
import com.ssafy.omz.dto.req.ItemRequestDto;
import com.ssafy.omz.dto.resp.MemberResponseDto;
import org.springframework.stereotype.Service;

import javax.transaction.TransactionalException;
import java.util.List;
import java.util.Map;

@Service
public interface MyPageService {
    Map<String, Object> getMyPageMain(Long memberId);

    MemberResponseDto.MyPageModifyInfo getMyPageModify(Long memberId);

    Map<String, Object> getMyPageCustom(Long memberId);

    void updateNickname(Long memberId, String nickname) throws TransactionalException;

    void updateMbti(Long memberId, String mbti) throws TransactionalException;

    void updatePreferFace(Long memberId, FaceRequestDto.Write faceInfo) throws TransactionalException;

    void updateAvatarCustom(Long memberId, List<ItemRequestDto.Write> itemInfo) throws TransactionalException;
}

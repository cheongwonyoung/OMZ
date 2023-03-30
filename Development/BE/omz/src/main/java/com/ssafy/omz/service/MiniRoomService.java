package com.ssafy.omz.service;


import com.ssafy.omz.dto.req.ItemRequestDto;
import com.ssafy.omz.dto.req.MiniRoomRequestDto;
import com.ssafy.omz.dto.resp.ItemResponseDto;
import com.ssafy.omz.dto.resp.MiniRoomResponseDto;

import javax.transaction.RollbackException;
import javax.transaction.TransactionalException;
import java.util.List;
import java.util.Map;

public interface MiniRoomService {

    // 미니룸 아이템 불러오기
    List<ItemResponseDto.Info> getMiniRoom(long memberId);

    // 미니룸 커스텀
    void updateMiniRoomCustom(long memberId, List<ItemRequestDto.Write> itemInfo) throws TransactionalException;

    // 상태메세지 조회
    MiniRoomResponseDto getStateMessage(long memberId);

    // 상태메세지 작성
    void updateStateMessage(long memberId, String stateMessage) throws RollbackException;

    // 상태메세지 삭제
    void deleteStateMessage(long memberId) throws RollbackException;

}

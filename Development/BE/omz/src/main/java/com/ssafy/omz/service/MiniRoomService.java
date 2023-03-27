package com.ssafy.omz.service;


import com.ssafy.omz.dto.req.MiniRoomRequestDto;
import com.ssafy.omz.dto.resp.MiniRoomResponseDto;

import javax.transaction.RollbackException;
import java.util.List;
import java.util.Map;

public interface MiniRoomService {


    // 상태메세지 조회
    MiniRoomResponseDto getStateMessage(long miniRoomId);

    // 상태메세지 작성
    void updateStateMessage(long miniRoomId, String stateMessage) throws RollbackException;

    // 상태메세지 삭제
    void deleteStateMessage(long miniRoomId) throws RollbackException;

}

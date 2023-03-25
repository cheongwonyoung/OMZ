package com.ssafy.omz.dto.resp;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class ChatRoomResponseDto {

    //  채팅 상대방 정보
    private long otherMemberId;

    private String nickName;

    private String file;

    private int friendState;

    //  채팅 메세지 내역
    private List<ChatPagingResponseDto> chatList;
}

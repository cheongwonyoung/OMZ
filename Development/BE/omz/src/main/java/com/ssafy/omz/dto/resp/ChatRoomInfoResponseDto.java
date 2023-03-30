package com.ssafy.omz.dto.resp;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ChatRoomInfoResponseDto {

    //  채팅방 번호
    private long roomId;

    //  채팅 상대방 정보
    private ChatOtherInfoResponseDto chatOtherInfo;

    //  가장 최근 채팅 메세지
    private String recentMessage;

    //  가장 최근 채팅 메세지 생성 일자
    private String recentMessageCreatedTime;

    //  채팅 메세지 읽음 여부 (최근 채팅 메세지가 상대방이 보낸 메세지일 때 아직 읽지 않았으면 false)
    private boolean isChecked;

}

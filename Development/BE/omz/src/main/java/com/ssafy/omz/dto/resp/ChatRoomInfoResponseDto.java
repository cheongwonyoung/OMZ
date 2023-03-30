package com.ssafy.omz.dto.resp;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ChatRoomInfoResponseDto implements Comparable<ChatRoomInfoResponseDto>{

    //  채팅방 번호
    private long roomId;

    //  채팅 상대방 정보
    private ChatOtherInfoResponseDto chatOtherInfo;

    //  가장 최근 채팅 메세지
    private String recentMessage;

    //  가장 최근 채팅 메세지 생성 일자
    private String recentMessageCreatedTime;

    @Override
    public int compareTo(ChatRoomInfoResponseDto otherChatRoomInfo) {
        return otherChatRoomInfo.recentMessageCreatedTime.compareTo(this.getRecentMessageCreatedTime());
    }
}

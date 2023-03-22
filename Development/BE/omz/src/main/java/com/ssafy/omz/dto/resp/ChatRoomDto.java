package com.ssafy.omz.dto.resp;

import com.ssafy.omz.entity.ChatRoom;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class ChatRoomDto {

    //  채팅방 번호
    private long roomId;

//    //  채팅 상대 memberId
//    private long memberId;

    //  채팅 상대 닉네임
    private String nickName;

    //  채팅 상대 아바타 이미지
    private String file;

    //  가장 최근 채팅 메세지
    private String recentMessage;

    //  가장 최근 채팅 메세지 생성 일자
    private LocalDateTime recentMessageCreatedTime;

    //  채팅 메세지 읽음 여부
    private boolean isChecked;

    //  채팅 상대와의 친구 여부
    private boolean isFriend;


}

package com.ssafy.omz.dto.req;

import com.ssafy.omz.entity.Chat;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ChatMessage {

    public enum MessageType {
        ENTER, TALK, QUIT
    }

    private Long roomId;

    private Long memberId; // 보낸 사람 memberId

    private String nickName;

    private MessageType type;

    private String message;

    private String createdTime;

    public static ChatMessage of (Chat chat){
        return ChatMessage.builder()
                .type(MessageType.TALK)
                .roomId(chat.getChatRoom().getChatRoomId())
                .memberId(chat.getFromMember().getMemberId())
                .nickName(chat.getFromMember().getNickname())
                .message(chat.getMessage())
                .createdTime(chat.getCreatedTime())
                .build();
    }

}

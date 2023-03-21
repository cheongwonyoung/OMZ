package com.ssafy.omz.dto.req;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateTimeDeserializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateTimeSerializer;
import com.ssafy.omz.entity.Chat;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class ChatMessage {

    public enum MessageType {
        ENTER, TALK, QUIT
    }

    private long roomId;

    private long memberId; // 보낸 사람 memberId

    private String nickName;

    private MessageType type;

    private String message;

    @JsonDeserialize(using = LocalDateTimeDeserializer.class)
    @JsonSerialize(using = LocalDateTimeSerializer.class)
    private LocalDateTime createdTime;

    public static ChatMessage of (Chat chat){
        return ChatMessage.builder()
                .type(MessageType.TALK)
                .roomId(chat.getChatRoom().getChatRoomId())
                .memberId(chat.getFromMember().getMemberId())
                .message(chat.getMessage())
                .createdTime(chat.getCreatedTime())
                .build();
    }

}

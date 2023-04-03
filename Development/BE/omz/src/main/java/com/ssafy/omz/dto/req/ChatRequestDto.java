package com.ssafy.omz.dto.req;

import com.ssafy.omz.entity.Chat;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

public class ChatRequestDto {

    @Data
    @Builder
    public static class ChatMembersInfo {
        private long memberId;

        private ChatOtherInfo chatOtherInfo;
    }

    @Data
    @Builder
    public static class ChatOtherInfo {
        private long memberId;

        private String nickName;

        private String file;

        //  채팅 상대와의 친구 여부
        //  0 : 친구 추가 버튼 O
        //  1 : 친구 추가 버튼 X
        private int friendState;
    }

    @Data
    @Builder
    public static class ChatPaging {
        private String message;

        private Long memberId;

        private String nickname;

        private String cursor;
    }

    @Data
    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    public static class ChatMessage {

        public enum MessageType {
            ENTER, TALK, QUIT
        }

        private Long roomId;

        private Long memberId; // 보낸 사람 memberId

        private String nickName;

        private com.ssafy.omz.dto.req.ChatMessage.MessageType type;

        private String message;

        private String createdTime;

        public static ChatRequestDto.ChatMessage of (com.ssafy.omz.entity.Chat chat){
            return ChatRequestDto.ChatMessage.builder()
                    .type(com.ssafy.omz.dto.req.ChatMessage.MessageType.TALK)
                    .roomId(chat.getChatRoom().getChatRoomId())
                    .memberId(chat.getFromMember().getMemberId())
                    .nickName(chat.getFromMember().getNickname())
                    .message(chat.getMessage())
                    .createdTime(chat.getCreatedTime())
                    .build();
        }

    }
}

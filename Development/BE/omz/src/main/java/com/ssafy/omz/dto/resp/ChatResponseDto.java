package com.ssafy.omz.dto.resp;

import com.ssafy.omz.dto.req.ChatMessage;
import com.ssafy.omz.dto.req.ChatRequestDto;
import com.ssafy.omz.entity.Chat;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

public class ChatResponseDto {

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

        public static ChatResponseDto.ChatOtherInfo of(ChatRequestDto.ChatOtherInfo chatOtherInfo){
            return ChatOtherInfo.builder()
                    .memberId(chatOtherInfo.getMemberId())
                    .nickName(chatOtherInfo.getNickName())
                    .file(chatOtherInfo.getFile())
                    .friendState(chatOtherInfo.getFriendState())
                    .build();
        }
    }

    @Data
    @Builder
    public static class ChatPaging {
        private Long chatRoomId;

        private String message;

        private Long memberId;

        private String nickname;

        private String createdTime;

        public static ChatResponseDto.ChatPaging of(com.ssafy.omz.entity.Chat chat){
            return ChatPaging.builder()
                    .memberId(chat.getFromMember().getMemberId())
                    .nickname(chat.getFromMember().getNickname())
                    .chatRoomId(chat.getChatRoom().getChatRoomId())
                    .createdTime(chat.getCreatedTime())
                    .message(chat.getMessage())
                    .build();
        }

        public static ChatResponseDto.ChatPaging byChatMessageDto(com.ssafy.omz.dto.req.ChatMessage chatMessage){
            return ChatPaging.builder()
                    .memberId(chatMessage.getMemberId())
                    .nickname(chatMessage.getNickName())
                    .createdTime(chatMessage.getCreatedTime())
                    .chatRoomId(Long.valueOf(chatMessage.getRoomId()))
                    .message(chatMessage.getMessage())
                    .build();
        }
    }


    @Data
    @Builder
    public static class ChatRoomChatData {

        //  채팅 상대방 정보
        private ChatOtherInfo chatOtherInfo;

        //  채팅 메세지 내역
        private List<ChatPaging> chatList;
    }

    @Data
    @Builder
    public static class ChatRoomInfo implements Comparable<ChatRoomInfo>{

        //  채팅방 번호
        private long roomId;

        //  채팅 상대방 정보
        private ChatOtherInfo chatOtherInfo;

        //  가장 최근 채팅 메세지
        private String recentMessage;

        //  가장 최근 채팅 메세지 생성 일자
        private String recentMessageCreatedTime;

        @Override
        public int compareTo(ChatRoomInfo otherChatRoomInfo) {
            return otherChatRoomInfo.recentMessageCreatedTime.compareTo(this.getRecentMessageCreatedTime());
        }
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

        public static ChatResponseDto.ChatMessage of (com.ssafy.omz.entity.Chat chat){
            return ChatResponseDto.ChatMessage.builder()
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

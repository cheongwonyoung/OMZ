package com.ssafy.omz.entity;

import com.ssafy.omz.dto.req.ChatMessage;
import com.sun.istack.NotNull;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;

@Entity
@Getter
@EqualsAndHashCode
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
public class Chat implements Serializable {

    private static final long serialVersionUID = 5090380600159441769L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long chatId;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "chat_room_id")
    private ChatRoom chatRoom;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "from_member_id")
    private Member fromMember;

    private String message;

    private String createdTime;

//    @ColumnDefault("false")
//    private boolean isChecked;

//    .type(ChatMessage.MessageType.TALK)
//                .roomId(chat.getChatRoom().getChatRoomId())
//            .memberId(chat.getFromMember().getMemberId())
//            .message(chat.getMessage())
//            .createdTime(chat.getCreatedTime())


    public static Chat of (ChatMessage chatMessage, ChatRoom chatRoom, Member member){
        return Chat.builder()
                .message(chatMessage.getMessage())
                .createdTime(chatMessage.getCreatedTime())
                .chatRoom(chatRoom)
                .fromMember(member)
//                .isChecked(chatMessage.isChecked())
                .build();
    }
}

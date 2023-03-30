package com.ssafy.omz.entity;

import com.sun.istack.NotNull;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class GuestBook {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long guestBookId;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "mini_room_id")
    private MiniRoom miniRoom;

    @Column(length = 140)
    private String content;

    @CreationTimestamp
    private LocalDateTime registeredTime;

    @Builder
    private GuestBook(MiniRoom miniRoom, Member member, String content, LocalDateTime registeredTime){
        this.miniRoom = miniRoom;
        this.member = member;
        this.content = content;
        this.registeredTime = registeredTime;
    }

}

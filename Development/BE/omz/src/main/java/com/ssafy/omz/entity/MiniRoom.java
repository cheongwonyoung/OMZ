package com.ssafy.omz.entity;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class MiniRoom {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long miniRoomId;

    @NotNull
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @Column(length = 140)
    private String stateMessage;

    @ColumnDefault("0")
    private int likes;

    @OneToMany(mappedBy = "miniRoom")
    private List<GuestBook> guestBooks = new ArrayList<>();

    @Builder
    private MiniRoom(Member member, String stateMessage){
        this.member = member;
        this.stateMessage = stateMessage;
    }
}

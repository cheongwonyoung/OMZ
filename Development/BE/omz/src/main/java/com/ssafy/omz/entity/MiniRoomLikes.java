package com.ssafy.omz.entity;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class MiniRoomLikes {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long miniRoomLikesId;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "mini_room_id")
    private MiniRoom miniRoom;


    public MiniRoomLikes(MiniRoom miniRoom, Member member){
        this.miniRoom = miniRoom;
        this.member = member;
    }
}

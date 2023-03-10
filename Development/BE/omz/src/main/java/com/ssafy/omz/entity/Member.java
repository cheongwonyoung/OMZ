package com.ssafy.omz.entity;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Member {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long memberId;

    @Column(length = 45)
    private String email;

    @NotNull
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "face_id")
    private Face face;

    @NotNull
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "prefer_face_id")
    private Face preferFace;

    @Column(length = 10)
    private String faceName;

    @Column(length = 4)
    private String mbti;

    @Column(length = 10)
    private String nickName;

    private String file;

    private String token;

    @OneToMany(mappedBy = "member")
    private List<Board> boards = new ArrayList<>();

    @OneToOne(mappedBy = "member")
    private MiniRoom miniRoom;

//    @OneToMany(mappedBy = "memberId")
//    private List<ChattingRoom> chattingRooms = new ArrayList<>();
//
//    @OneToMany(mappedBy = "memberId")
//    private List<ChattingRoom> chattingRooms = new ArrayList<>();
}

package com.ssafy.omz.entity;

import com.sun.istack.NotNull;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
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
    private String nickname;

    private String file;

    private String token;

    @OneToMany(mappedBy = "member")
    private List<Board> boards = new ArrayList<>();

    @OneToOne(mappedBy = "member")
    private MiniRoom miniRoom;

    @Builder
    private Member(String email, String nickname, String mbti, String faceName){
        this.email = email;
        this.nickname = nickname;
        this.mbti = mbti;
        this.faceName = faceName;
    }
    public Member updateFace(Face face){
        this.face = face;
        return this;
    }

    public Member updatePreferFace(Face preferFace){
        this.preferFace = preferFace;
        return this;
    }

    public Member updateMemberInfo(String mbti, String nickname, String file, Face myface, Face preferFace, String faceName){
        this.mbti = mbti;
        this.nickname = nickname;
        this.file = file;
        this.face = myface;
        this.preferFace = preferFace;
        this.faceName = faceName;
        return this;
    }

//    @OneToMany(mappedBy = "memberId")
//    private List<ChattingRoom> chattingRooms = new ArrayList<>();
//
//    @OneToMany(mappedBy = "memberId")
//    private List<ChattingRoom> chattingRooms = new ArrayList<>();
}

package com.ssafy.omz.entity;

import com.sun.istack.NotNull;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.boot.context.properties.bind.DefaultValue;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Board {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long boardId;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @Column(length = 140)
    private String content;

    @CreationTimestamp
    private LocalDateTime registeredTime;

    @CreationTimestamp
    private LocalDateTime modifiedTime;

    @OneToMany(mappedBy = "board")
    private List<BoardLikes> likes = new ArrayList<>();

    private String file;

    @ColumnDefault("false")
    private boolean isDeleted;

    @OneToMany(mappedBy = "board")
    private List<Reply> replies = new ArrayList<>();

    @Builder
    private Board(Member member, String content){
        this.member = member;
        this.content = content;
    }


 }

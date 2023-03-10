package com.ssafy.omz.entity;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
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

    @Column(length = 45)
    private String title;

    @Column(length = 140)
    private String content;

    @CreationTimestamp
    private LocalDateTime registeredTime;

    @CreationTimestamp
    private LocalDateTime modifiedTime;

    @ColumnDefault("0")
    private int likes;

    private String file;

    @ColumnDefault("false")
    private boolean isDeleted;

    @OneToMany(mappedBy = "board")
    private List<Reply> replies = new ArrayList<>();
 }

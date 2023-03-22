package com.ssafy.omz.entity;

import com.sun.istack.NotNull;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Friend {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long friendId;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "from_member_id")
    private Member fromMember;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "to_member_id")
    private Member toMember;

    @ColumnDefault("0")
    private int state;

    @Column(length = 20)
    private String message;

    @Builder
    private Friend(Member toMember, Member fromMember, String message){
        this.toMember = toMember;
        this.fromMember = fromMember;
        this.message = message;
    }
}

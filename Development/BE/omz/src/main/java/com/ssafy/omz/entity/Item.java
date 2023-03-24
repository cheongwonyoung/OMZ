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
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long itemId;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "item_type_id")
    private ItemType itemType;

    @ColumnDefault("0")
    private int state;

    @Column(length = 20)
    private String name;

    @Builder
    private Item(Member member, ItemType itemType, int state, String name){
        this.member = member;
        this.itemType = itemType;
        this.state = state;
        this.name = name;

    }
}

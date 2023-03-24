package com.ssafy.omz.entity;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Column;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ItemType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long itemTypeId;

    @Column(length = 10)
    private String itemTypeName;

    @Builder
    private ItemType (String itemTypeName){
        this.itemTypeName = itemTypeName;
    }

}

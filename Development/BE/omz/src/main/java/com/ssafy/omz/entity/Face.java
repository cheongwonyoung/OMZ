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
public class Face {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long faceId;

    @NotNull
    private double dogProbability;

    @NotNull
    private double catProbability;

    @NotNull
    private double bearProbability;

    @NotNull
    private double rabbitProbability;

    @NotNull
    private double dinosaurProbability;

    @NotNull
    private double foxProbability;

    @OneToOne(mappedBy = "face")
    private Member member;

    @OneToOne(mappedBy = "preferFace")
    private Member preferMember;
}

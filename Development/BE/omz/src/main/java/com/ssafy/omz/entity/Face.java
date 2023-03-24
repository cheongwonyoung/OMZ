package com.ssafy.omz.entity;

import com.ssafy.omz.dto.req.FaceRequestDto;
import com.sun.istack.NotNull;
//import lombok.AllArgsConstructor;
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//import lombok.ToString;
import lombok.*;

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
    private double dinoProbability;

    @NotNull
    private double foxProbability;

    @OneToOne(mappedBy = "face")
    private Member member;

    @OneToOne(mappedBy = "preferFace")
    private Member preferMember;

    @Builder
    private Face(double dogProbability, double catProbability, double bearProbability, double rabbitProbability, double dinoProbability, double foxProbability){
        this.dogProbability = dogProbability;
        this.catProbability = catProbability;
        this.bearProbability = bearProbability;
        this.rabbitProbability = rabbitProbability;
        this.dinoProbability = dinoProbability;
        this.foxProbability = foxProbability;
        this.member = member;
    }
//    public Face updateFace(double dogProbability, String file){
//        this.file = file;
//        this.content = content;
//        return this;
//    }

}

package com.ssafy.omz.dto.resp;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

public class FaceResponseDto {
    @Data
    @Builder
//    @Schema
    public static class Info {
        private Double dog;
        private Double cat;
        private Double bear;
        private Double rabbit;
        private Double dinosaur;
        private Double fox;

        public static Info fromEntity(com.ssafy.omz.entity.Member memberEntity) {
            return Info.builder()
                    .dog(memberEntity.getFace().getDogProbability())
                    .cat(memberEntity.getFace().getCatProbability())
                    .bear(memberEntity.getFace().getBearProbability())
                    .rabbit(memberEntity.getFace().getRabbitProbability())
                    .dinosaur(memberEntity.getFace().getDinosaurProbability())
                    .fox(memberEntity.getFace().getFoxProbability())
                    .build();
        }
    }

}

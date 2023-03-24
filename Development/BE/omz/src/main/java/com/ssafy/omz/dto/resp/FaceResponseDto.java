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

        public static Info fromEntity(com.ssafy.omz.entity.Face faceEntity) {
            return Info.builder()
                    .dog(faceEntity.getDogProbability())
                    .cat(faceEntity.getCatProbability())
                    .bear(faceEntity.getBearProbability())
                    .rabbit(faceEntity.getRabbitProbability())
                    .dinosaur(faceEntity.getDinosaurProbability())
                    .fox(faceEntity.getFoxProbability())
                    .build();
        }
    }

}

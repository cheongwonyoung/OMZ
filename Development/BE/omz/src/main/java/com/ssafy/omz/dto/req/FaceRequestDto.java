package com.ssafy.omz.dto.req;

import com.ssafy.omz.dto.resp.FaceResponseDto;
import io.swagger.annotations.ApiModel;
import lombok.Builder;
import lombok.Data;

import javax.validation.constraints.NotEmpty;

public class FaceRequestDto {
    @Data
    @Builder
    @ApiModel(value = "선호하는 동물상 정보")
    public static class Write {
        @NotEmpty(message="dog는 빈값 일 수 없습니다")
        private Double dog;
        @NotEmpty(message="cat는 빈값 일 수 없습니다")
        private Double cat;
        @NotEmpty(message="bear는 빈값 일 수 없습니다")
        private Double bear;
        @NotEmpty(message="rabbit는 빈값 일 수 없습니다")
        private Double rabbit;
        @NotEmpty(message="dinosaur는 빈값 일 수 없습니다")
        private Double dinosaur;
        @NotEmpty(message="fox는 빈값 일 수 없습니다")
        private Double fox;
    }

}

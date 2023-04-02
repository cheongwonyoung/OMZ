package com.ssafy.omz.dto.req;

import io.swagger.annotations.ApiModel;
import lombok.Builder;
import lombok.Data;

import javax.validation.constraints.NotEmpty;

public class BgmRequestDto {
    @Data
    @Builder
    @ApiModel(value = "음악 정보")
    public static class Write {
        @NotEmpty(message="title는 빈값 일 수 없습니다")
        private String title;
        @NotEmpty(message="singer는 빈값 일 수 없습니다")
        private String singer;

    }
}
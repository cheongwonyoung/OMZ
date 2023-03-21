package com.ssafy.omz.dto.req;

import lombok.Builder;
import lombok.Data;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class BoardRequestDto {
    @Data
    @Builder
//    @Schema(name="FreeBoardDto.Write")
    public static class Write {
        @NotEmpty(message="content은 빈값 일 수 없습니다")
        @NotNull(message="content은 null 일 수 없습니다")
        private String content;
        @Size(min=1, max=140, message = "바르지 않은 content 크기 입니다")
        @NotEmpty(message="userId은 빈값 일 수 없습니다")
        @NotNull(message="userId은 null 일 수 없습니다")
        private Long memberId;
        private String file;
    }
}

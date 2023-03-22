package com.ssafy.omz.dto.req;

import lombok.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class MemberRequestDto {

    @Data
    @Builder
//    @Schema(name="FreeBoardDto.Write")
    public static class Write {
        @NotEmpty(message="email는 빈값 일 수 없습니다")
        @NotNull(message="email는 null 일 수 없습니다")
        private String email;

        @NotEmpty(message="mbti는 빈값 일 수 없습니다")
        @NotNull(message="mbti는 null 일 수 없습니다")
        private String mbti;

        @NotEmpty(message="nickname은 빈값 일 수 없습니다")
        @NotNull(message="nickname은 null 일 수 없습니다")
        private String nickname;

        @NotEmpty(message="profile은 빈값 일 수 없습니다")
        @NotNull(message="profile은 null 일 수 없습니다")
        private MultipartFile profile;

        @NotEmpty(message="myFace는 빈값 일 수 없습니다")
        @NotNull(message="myFace는 null 일 수 없습니다")
        private Long myFace;

        @NotEmpty(message="preferFace는 빈값 일 수 없습니다")
        @NotNull(message="preferFace는 null 일 수 없습니다")
        private Long preferFace;

    }
}

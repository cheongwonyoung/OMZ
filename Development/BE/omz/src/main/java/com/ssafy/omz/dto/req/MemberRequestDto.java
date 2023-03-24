package com.ssafy.omz.dto.req;

import com.ssafy.omz.entity.Face;
import io.swagger.annotations.ApiModel;
import lombok.*;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.Column;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class MemberRequestDto {

    @Data
    @Builder
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

        @NotEmpty(message="myFace는 빈값 일 수 없습니다")
        @NotNull(message="myFace는 null 일 수 없습니다")
        private FaceRequestDto.Write myFace;

        @NotEmpty(message="preferFace는 빈값 일 수 없습니다")
        @NotNull(message="preferFace는 null 일 수 없습니다")
        private FaceRequestDto.Write preferFace;


    }

    @Data
    @Builder
    public static class updateFaceInfo {
        private Face face;

        public static MemberRequestDto.updateFaceInfo fromEntity(com.ssafy.omz.entity.Member memberEntity) {
            return updateFaceInfo.builder()
                    .face(memberEntity.getFace())
                    .build();
        }
    }
    @Data
    @Builder
    public static class updatePreferFaceInfo {
        private Face preferFace;

        public static MemberRequestDto.updatePreferFaceInfo fromEntity(com.ssafy.omz.entity.Member memberEntity) {
            return updatePreferFaceInfo.builder()
                    .preferFace(memberEntity.getPreferFace())
                    .build();
        }
    }

    @Data
    @NoArgsConstructor
    @ApiModel(value = "멤버 회원가입 작성 정보")
    public static class MemberInfo {
        @NotEmpty(message="email는 빈값 일 수 없습니다")
        @NotNull(message="email는 null 일 수 없습니다")
        private String email;

        @NotEmpty(message="mbti는 빈값 일 수 없습니다")
        @NotNull(message="mbti는 null 일 수 없습니다")
        private String mbti;

        @NotEmpty(message="nickname은 빈값 일 수 없습니다")
        @NotNull(message="nickname은 null 일 수 없습니다")
        private String nickname;
    }
}

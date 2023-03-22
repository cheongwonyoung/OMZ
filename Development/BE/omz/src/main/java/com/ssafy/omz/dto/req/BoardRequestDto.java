package com.ssafy.omz.dto.req;

import com.ssafy.omz.dto.resp.BoardResponseDto;
import com.ssafy.omz.dto.resp.MemberResponseDto;
import io.swagger.annotations.ApiModel;
import lombok.Builder;
import lombok.Data;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;

public class BoardRequestDto {
    @Data
    @Builder
    @ApiModel(value = "글 작성 정보", description = "작성 내용, 작성자, 첨부 파일을 가진 Class")
    public static class Write {
        @Size(min=1, max=140, message = "바르지 않은 content 크기 입니다")
        @NotEmpty(message="content은 빈값 일 수 없습니다")
        @NotNull(message="content은 null 일 수 없습니다")
        private String content;
        @NotEmpty(message="memberId는 빈값 일 수 없습니다")
        @NotNull(message="memberId는 null 일 수 없습니다")
        private Long memberId;
        private String file;
    }

    @Data
    @Builder
//    @Schema
    public static class Info {
        private Long boardId;
        private String content;
        private String file;
        private LocalDateTime registeredTime;
        private LocalDateTime modifiedTime;
        private MemberResponseDto.LittleInfo member;
        public static BoardRequestDto.Info fromEntity(com.ssafy.omz.entity.Board boardEntity) {
            return BoardRequestDto.Info.builder()
                    .boardId(boardEntity.getBoardId())
                    .content(boardEntity.getContent())
                    .file(boardEntity.getFile())
                    .registeredTime(boardEntity.getRegisteredTime())
                    .modifiedTime(boardEntity.getModifiedTime())
                    .member(MemberResponseDto.LittleInfo.fromEntity(boardEntity.getMember()))
                    .build();
        }
    }
}

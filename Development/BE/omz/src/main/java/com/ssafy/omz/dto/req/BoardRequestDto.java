package com.ssafy.omz.dto.req;

import com.ssafy.omz.dto.resp.BoardResponseDto;
import com.ssafy.omz.dto.resp.MemberResponseDto;
import com.ssafy.omz.dto.resp.ReplyResponseDto;
import lombok.Builder;
import lombok.Data;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;
import java.util.stream.Collectors;

public class BoardRequestDto {
    @Data
    @Builder
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
        private MemberResponseDto.Community member;
        public static BoardResponseDto.Info fromEntity(com.ssafy.omz.entity.Board boardEntity) {
            return BoardResponseDto.Info.builder()
                    .boardId(boardEntity.getBoardId())
                    .content(boardEntity.getContent())
                    .file(boardEntity.getFile())
                    .registeredTime(boardEntity.getRegisteredTime())
                    .modifiedTime(boardEntity.getModifiedTime())
                    .member(MemberResponseDto.Community.fromEntity(boardEntity.getMember()))
                    .build();
        }
    }
}

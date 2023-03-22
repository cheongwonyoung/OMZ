package com.ssafy.omz.dto.req;

import com.ssafy.omz.dto.resp.MemberResponseDto;
import com.ssafy.omz.dto.resp.ReplyResponseDto;
import io.swagger.annotations.ApiModel;
import lombok.Builder;
import lombok.Data;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;

public class ReplyRequestDto {
    @Data
    @Builder
    @ApiModel(value = "댓글 작성 정보", description = "작성 내용, 작성자, 댓글을 작성한 게시글 ID를 가진 Class")
    public static class Write {
        @NotEmpty(message="content은 빈값 일 수 없습니다")
        @NotNull(message="content은 null 일 수 없습니다")
        private String content;
        @NotEmpty(message="memberId는 빈값 일 수 없습니다")
        @NotNull(message="memberId는 null 일 수 없습니다")
        private Long memberId;
        @Size(min=1, max=140, message = "바르지 않은 content 크기 입니다")
        @NotEmpty(message="boardId는 빈값 일 수 없습니다")
        @NotNull(message="boardId는 null 일 수 없습니다")
        private Long boardId;
    }
    @Data
    @Builder
    public static class Info {
        private Long replyId;
        private String content;
        private boolean isDeleted;
        private LocalDateTime registeredTime;
        private MemberResponseDto.LittleInfo member;
        public static ReplyRequestDto.Info fromEntity(com.ssafy.omz.entity.Reply replyEntity) {
            return ReplyRequestDto.Info.builder()
                    .replyId(replyEntity.getReplyId())
                    .content(replyEntity.getContent())
                    .isDeleted(replyEntity.isDeleted())
                    .registeredTime(replyEntity.getRegisteredTime())
                    .member(MemberResponseDto.LittleInfo.fromEntity(replyEntity.getMember()))
                    .build();
        }
    }
}

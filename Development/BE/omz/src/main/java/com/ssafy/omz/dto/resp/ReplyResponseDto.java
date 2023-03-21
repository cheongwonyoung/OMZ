package com.ssafy.omz.dto.resp;

import com.ssafy.omz.entity.Member;
import com.ssafy.omz.entity.Reply;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

public class ReplyResponseDto {
    @Data
    @Builder
//    @Schema(name="FreeBoardCommentDto.Info")
    public static class Info {
        private Long replyId;
        private String content;
        private boolean isDeleted;
        private LocalDateTime registeredTime;
        private MemberResponseDto.Community member;
        public static Info fromEntity(com.ssafy.omz.entity.Reply replyEntity) {
            return Info.builder()
                    .replyId(replyEntity.getReplyId())
                    .content(replyEntity.getContent())
                    .isDeleted(replyEntity.isDeleted())
                    .registeredTime(replyEntity.getRegisteredTime())
                    .member(MemberResponseDto.Community.fromEntity(replyEntity.getMember()))
                    .build();
        }
    }
}

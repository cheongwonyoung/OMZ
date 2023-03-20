package com.ssafy.omz.dto.resp;

import com.ssafy.omz.entity.Member;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

public class BoardDto {
    @Data
    @Builder
//    @Schema
    public static class Info {
        private Long boardId;
        private String content;
        private String file;
        private LocalDateTime registeredTime;
        private LocalDateTime modifiedTime;
        private int likeCnt;
        private int replyCnt;
        private MemberDto.Community member;
        private boolean iLikeBoard;
        public static Info fromEntity(com.ssafy.omz.entity.Board boardEntity) {
            return Info.builder()
                    .boardId(boardEntity.getBoardId())
                    .content(boardEntity.getContent())
                    .registeredTime(boardEntity.getRegisteredTime())
                    .modifiedTime(boardEntity.getModifiedTime())
                    .likeCnt(boardEntity.getLikes().size())
                    .replyCnt(boardEntity.getReplies().size())
                    .member(MemberDto.Community.fromEntity(boardEntity.getMember()))
                    .build();
        }
    }
}

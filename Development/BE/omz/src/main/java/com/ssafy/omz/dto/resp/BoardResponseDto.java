package com.ssafy.omz.dto.resp;

import com.ssafy.omz.entity.Reply;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

public class BoardResponseDto {
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
        private MemberResponseDto.Community member;
        private boolean iLikeBoard;
        public static Info fromEntity(com.ssafy.omz.entity.Board boardEntity) {
            return Info.builder()
                    .boardId(boardEntity.getBoardId())
                    .content(boardEntity.getContent())
                    .file(boardEntity.getFile())
                    .registeredTime(boardEntity.getRegisteredTime())
                    .modifiedTime(boardEntity.getModifiedTime())
                    .likeCnt(boardEntity.getLikes().size())
                    .replyCnt(boardEntity.getReplies().size())
                    .member(MemberResponseDto.Community.fromEntity(boardEntity.getMember()))
                    .build();
        }
    }

    @Data
    @Builder
//    @Schema
    public static class Detail {
        private Long boardId;
        private String content;
        private String file;
        private LocalDateTime registeredTime;
        private LocalDateTime modifiedTime;
        private int likeCnt;
        private int replyCnt;
        private MemberResponseDto.Community member;
        private boolean iLikeBoard;
        private List<Reply> replyList;
        public static Detail fromEntity(com.ssafy.omz.entity.Board boardEntity) {
            return Detail.builder()
                    .boardId(boardEntity.getBoardId())
                    .content(boardEntity.getContent())
                    .file(boardEntity.getFile())
                    .registeredTime(boardEntity.getRegisteredTime())
                    .modifiedTime(boardEntity.getModifiedTime())
                    .likeCnt(boardEntity.getLikes().size())
                    .replyCnt(boardEntity.getReplies().size())
                    .member(MemberResponseDto.Community.fromEntity(boardEntity.getMember()))
                    .build();
        }
    }
}

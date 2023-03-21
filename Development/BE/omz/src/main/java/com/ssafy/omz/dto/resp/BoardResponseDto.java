package com.ssafy.omz.dto.resp;

import com.ssafy.omz.entity.Reply;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

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
                    .replyCnt(boardEntity.getReplies().stream().filter(reply -> !reply.isDeleted()).collect(Collectors.toList()).size())
                    .member(MemberResponseDto.Community.fromEntity(boardEntity.getMember()))
                    .build();
        }
    }

    @Data
    @Builder
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
        private List<ReplyResponseDto.Info> replies;
        public static Detail fromEntity(com.ssafy.omz.entity.Board boardEntity) {
            return Detail.builder()
                    .boardId(boardEntity.getBoardId())
                    .content(boardEntity.getContent())
                    .file(boardEntity.getFile())
                    .registeredTime(boardEntity.getRegisteredTime())
                    .modifiedTime(boardEntity.getModifiedTime())
                    .likeCnt(boardEntity.getLikes().size())
                    .member(MemberResponseDto.Community.fromEntity(boardEntity.getMember()))
                    .replies(boardEntity.getReplies().stream()
                            .map(ReplyResponseDto.Info::fromEntity)
                            .filter(reply -> !reply.isDeleted())
                            .collect(Collectors.toList()))
                    .build();
        }
    }
}

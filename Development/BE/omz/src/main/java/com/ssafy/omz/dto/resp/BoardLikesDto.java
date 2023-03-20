package com.ssafy.omz.dto.resp;

import com.ssafy.omz.entity.Board;
import com.ssafy.omz.entity.Member;
import lombok.Builder;
import lombok.Data;

public class BoardLikesDto {

    @Data
    @Builder
//    @Schema
    public static class Info {
        private Long boardLikesId;
        private Board board;
        private Member member;
        public static BoardLikesDto.Info fromEntity(com.ssafy.omz.entity.BoardLikes boardLikesEntity) {
            return Info.builder()
                    .board(boardLikesEntity.getBoard())
                    .member(boardLikesEntity.getMember())
                    .build();
        }
    }
}

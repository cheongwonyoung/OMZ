package com.ssafy.omz.dto.resp;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

public class MemberDto {
    @Data
    @Builder
//    @Schema
    public static class Community {
        private Long memberId;
        private String nickname;
        private String file;
        public static MemberDto.Community fromEntity(com.ssafy.omz.entity.Member memberEntity) {
            return Community.builder()
                    .memberId(memberEntity.getMemberId())
                    .nickname(memberEntity.getNickname())
                    .file(memberEntity.getFile())
                    .build();
        }
    }
}

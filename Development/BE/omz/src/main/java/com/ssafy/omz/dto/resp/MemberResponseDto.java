package com.ssafy.omz.dto.resp;

import lombok.Builder;
import lombok.Data;

public class MemberResponseDto {
    @Data
    @Builder
    public static class Community {
        private Long memberId;
        private String nickname;
        private String file;
        public static MemberResponseDto.Community fromEntity(com.ssafy.omz.entity.Member memberEntity) {
            return Community.builder()
                    .memberId(memberEntity.getMemberId())
                    .nickname(memberEntity.getNickname())
                    .file(memberEntity.getFile())
                    .build();
        }
    }
}

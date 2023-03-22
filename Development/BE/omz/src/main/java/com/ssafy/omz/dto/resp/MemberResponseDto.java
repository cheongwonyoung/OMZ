package com.ssafy.omz.dto.resp;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

public class MemberResponseDto {
    @Data
    @Builder
    public static class LittleInfo {
        private Long memberId;
        private String nickname;
        private String file;
        public static LittleInfo fromEntity(com.ssafy.omz.entity.Member memberEntity) {
            return LittleInfo.builder()
                    .memberId(memberEntity.getMemberId())
                    .nickname(memberEntity.getNickname())
                    .file(memberEntity.getFile())
                    .build();
        }
    }



}

package com.ssafy.omz.dto.resp;

import lombok.Builder;
import lombok.Data;

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

    @Data
    @Builder
    public static class FriendSearch {
        private Long memberId;
        private String nickname;
        private String file;
        private boolean isRequestPossble;
        public static FriendSearch fromEntity(com.ssafy.omz.entity.Member memberEntity) {
            return FriendSearch.builder()
                    .memberId(memberEntity.getMemberId())
                    .nickname(memberEntity.getNickname())
                    .file(memberEntity.getFile())
                    .build();
        }
    }

    @Data
    @Builder
    public static class FriendListInfo {
        private Long memberId;
        private String nickname;
        private String file;
        private String stateMessage;
        public static FriendListInfo fromEntity(com.ssafy.omz.entity.Member memberEntity) {
            return FriendListInfo.builder()
                    .memberId(memberEntity.getMemberId())
                    .nickname(memberEntity.getNickname())
                    .file(memberEntity.getFile())
                    .stateMessage(memberEntity.getMiniRoom().getStateMessage())
                    .build();
        }
    }
}

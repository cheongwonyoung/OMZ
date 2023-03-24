package com.ssafy.omz.dto.resp;

import com.ssafy.omz.entity.Face;
import com.sun.istack.NotNull;
import lombok.Builder;
import lombok.Data;

import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
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

    @Data
    @Builder
    public static class MemberInfo {
        private Long memberId;
        private String email;
        private String mbti;
        private String nickname;
        private String file;
        private Face face;
        private Face preferFace;
        public static MemberInfo fromEntity(com.ssafy.omz.entity.Member memberEntity) {
            return MemberInfo.builder()
                    .memberId(memberEntity.getMemberId())
                    .email(memberEntity.getEmail())
                    .mbti(memberEntity.getMbti())
                    .nickname(memberEntity.getNickname())
                    .file(memberEntity.getFile())
                    .face(memberEntity.getFace())
                    .preferFace(memberEntity.getPreferFace())
                    .build();
        }
    }
}

package com.ssafy.omz.dto.resp;

import com.ssafy.omz.entity.Face;
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
    public static class MyPageMainInfo {
        private Long memberId;
        private String nickname;
        private String mbti;
        private FaceResponseDto.Info face;
        private String faceName;
        public static MyPageMainInfo fromEntity(com.ssafy.omz.entity.Member memberEntity) {
            return MyPageMainInfo.builder()
                    .memberId(memberEntity.getMemberId())
                    .nickname(memberEntity.getNickname())
                    .mbti(memberEntity.getMbti())
                    .face(FaceResponseDto.Info.fromEntity(memberEntity.getFace()))
                    .faceName(memberEntity.getFaceName())
                    .build();
        }
    }

    @Data
    @Builder
    public static class MyPageModifyInfo {
        private Long memberId;
        private String nickname;
        private String mbti;
        private FaceResponseDto.Info preferFace;
        public static MyPageModifyInfo fromEntity(com.ssafy.omz.entity.Member memberEntity) {
            return MyPageModifyInfo.builder()
                    .memberId(memberEntity.getMemberId())
                    .nickname(memberEntity.getNickname())
                    .mbti(memberEntity.getMbti())
                    .preferFace(FaceResponseDto.Info.fromEntity(memberEntity.getPreferFace()))
                    .build();
        }
    }
}

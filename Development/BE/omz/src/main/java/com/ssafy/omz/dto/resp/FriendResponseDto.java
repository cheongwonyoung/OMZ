package com.ssafy.omz.dto.resp;

import com.ssafy.omz.dto.req.FriendRequestDto;
import lombok.Builder;
import lombok.Data;

public class FriendResponseDto {
    @Data
    @Builder
    public static class Info {
        private Long friendId;
        private String message;
        private MemberResponseDto.LittleInfo toMember;
        private MemberResponseDto.LittleInfo fromMember;
        public static FriendResponseDto.Info fromEntity(com.ssafy.omz.entity.Friend friendEntity) {
            return Info.builder()
                    .friendId(friendEntity.getFriendId())
                    .message(friendEntity.getMessage())
                    .toMember(MemberResponseDto.LittleInfo.fromEntity(friendEntity.getToMember()))
                    .fromMember(MemberResponseDto.LittleInfo.fromEntity(friendEntity.getFromMember()))
                    .build();
        }
    }

    @Data
    @Builder
    public static class WaitingListInfo {
        private Long friendId;
        private String message;
        private MemberResponseDto.LittleInfo fromMember;
        public static FriendResponseDto.WaitingListInfo fromEntity(com.ssafy.omz.entity.Friend friendEntity) {
            return WaitingListInfo.builder()
                    .friendId(friendEntity.getFriendId())
                    .message(friendEntity.getMessage())
                    .fromMember(MemberResponseDto.LittleInfo.fromEntity(friendEntity.getFromMember()))
                    .build();
        }
    }
}

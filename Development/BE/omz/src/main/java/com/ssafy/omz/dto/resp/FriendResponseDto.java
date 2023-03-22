package com.ssafy.omz.dto.resp;

import com.ssafy.omz.dto.req.FriendRequestDto;
import lombok.Builder;
import lombok.Data;

public class FriendResponseDto {
    @Data
    @Builder
//    @Schema
    public static class Info {
        private String message;
        private MemberResponseDto.LittleInfo toMember;
        private MemberResponseDto.LittleInfo fromMember;
        public static FriendRequestDto.Info fromEntity(com.ssafy.omz.entity.Friend friendEntity) {
            return FriendRequestDto.Info.builder()
                    .message(friendEntity.getMessage())
                    .toMember(MemberResponseDto.LittleInfo.fromEntity(friendEntity.getToMember()))
                    .fromMember(MemberResponseDto.LittleInfo.fromEntity(friendEntity.getFromMember()))
                    .build();
        }
    }
}

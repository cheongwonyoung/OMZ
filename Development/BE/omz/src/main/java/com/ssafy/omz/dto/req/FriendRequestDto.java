package com.ssafy.omz.dto.req;

import com.ssafy.omz.dto.resp.BoardResponseDto;
import com.ssafy.omz.dto.resp.MemberResponseDto;
import io.swagger.annotations.ApiModel;
import lombok.Builder;
import lombok.Data;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;

public class FriendRequestDto {

    @Data
    @Builder
    @ApiModel(value = "친구 신청 정보", description = "신청 메세지, toMemberId, fromMemberId를 가진 Class")
    public static class Write {
        @Size(min=1, max=20, message = "바르지 않은 message 크기 입니다")
        @NotEmpty(message="message는 빈값 일 수 없습니다")
        @NotNull(message="message는 null 일 수 없습니다")
        private String message;
        @NotEmpty(message="memberId는 빈값 일 수 없습니다")
        @NotNull(message="memberId는 null 일 수 없습니다")
        private Long toMemberId;
        @NotEmpty(message="memberId는 빈값 일 수 없습니다")
        @NotNull(message="memberId는 null 일 수 없습니다")
        private Long fromMemberId;
    }

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

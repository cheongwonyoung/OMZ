package com.ssafy.omz.dto.resp;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

public class GuestBookResponseDto {

    @Data
    @Builder
    public static class Info {

        private long guestBookId;

        private String content;

        private LocalDateTime registeredTime;

        private MemberResponseDto.LittleInfo member;

        public static Info fromEntity(com.ssafy.omz.entity.GuestBook guestBookEntity){
            return Info.builder()
                    .guestBookId(guestBookEntity.getGuestBookId())
                    .content(guestBookEntity.getContent())
                    .registeredTime(guestBookEntity.getRegisteredTime())
                    .member(MemberResponseDto.LittleInfo.fromEntity(guestBookEntity.getMember()))
                    .build();
        }
    }

}

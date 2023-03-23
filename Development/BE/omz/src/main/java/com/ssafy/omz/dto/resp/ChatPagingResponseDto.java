package com.ssafy.omz.dto.resp;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ChatPagingResponseDto {
    private String message;

    private String memberId;

    private String nickname;

    private String createdTime;
}

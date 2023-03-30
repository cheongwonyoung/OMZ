package com.ssafy.omz.dto.req;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ChatPagingRequestDto {

    private String message;

    private Long memberId;

    private String nickname;

    private String cursor;
}

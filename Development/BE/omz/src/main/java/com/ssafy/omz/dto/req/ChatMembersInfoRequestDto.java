package com.ssafy.omz.dto.req;

import com.ssafy.omz.dto.resp.ChatOtherInfoResponseDto;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ChatMembersInfoRequestDto {
    private long memberId;
    private ChatOtherInfoResponseDto chatOtherInfo;
}

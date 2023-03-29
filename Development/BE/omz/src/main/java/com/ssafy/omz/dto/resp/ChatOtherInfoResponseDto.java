package com.ssafy.omz.dto.resp;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ChatOtherInfoResponseDto {

    private long memberId;

    private String nickName;

    private String file;

    //  채팅 상대와의 친구 여부
    //  0 : 친구 대기 중, 1 : 친구 상태, -1 : 친구 거절
    //  2 : 친구 신청한 적 없음, (친구 추가 버튼)
    //  아래로 수정
    //  true : 친구 추가 버튼 X 1 
    //  false : 친구 추가 버튼 O 0
    private int friendState;
}

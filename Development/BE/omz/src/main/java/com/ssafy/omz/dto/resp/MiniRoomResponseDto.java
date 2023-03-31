package com.ssafy.omz.dto.resp;

import io.swagger.annotations.ApiModel;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@ToString
@NoArgsConstructor
@ApiModel(value="미니룸 정보", description = "미니룸, 상태메세지를 가진 class")
public class MiniRoomResponseDto {

    private long miniRoomId;
    private long memberId;
    private String stateMessage;

    private int likes;

    @Builder
    public MiniRoomResponseDto(long miniRoomId, long memberId, String stateMessage, int likes){
        this.miniRoomId = miniRoomId;
        this.memberId = memberId;
        this.stateMessage = stateMessage;
        this.likes = likes;
    }


}

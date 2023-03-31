package com.ssafy.omz.dto.req;

import com.ssafy.omz.entity.MiniRoom;
import io.swagger.annotations.ApiModel;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class MiniRoomRequestDto {


    @Data
    @NoArgsConstructor
    @ApiModel(value="상태메세지 작성 정보", description="작성 내용을 가진 class")
    public static class State{

        @NotEmpty(message="miniRoomId는 빈값 일 수 없습니다")
        @NotNull(message="miniRoomId는 null 일 수 없습니다")
        private Long miniRoomId;
        @Size(min=1, max=140, message = "바르지 않은 content 크기 입니다")
        @NotEmpty(message="content은 빈값 일 수 없습니다")
        @NotNull(message="content은 null 일 수 없습니다")
        private String stateMessage;
    }
    
}

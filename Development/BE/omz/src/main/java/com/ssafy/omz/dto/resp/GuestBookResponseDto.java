package com.ssafy.omz.dto.resp;

import com.ssafy.omz.entity.GuestBook;
import com.ssafy.omz.entity.MiniRoom;
import io.swagger.annotations.ApiModel;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDateTime;

@Data
@ToString
@NoArgsConstructor
@ApiModel(value="방명록 정보", description = "작성자, 내용을 가진 class")
public class GuestBookResponseDto {

    private long miniRoomId;
    private long memberId;
    private String content;
    private LocalDateTime registeredTime;

    @Builder
    public GuestBookResponseDto(long miniRoomId, long memberId, String content, LocalDateTime registeredTime){
        this.miniRoomId = miniRoomId;
        this.memberId = memberId;
        this.content = content;
        this.registeredTime = registeredTime;
    }



}

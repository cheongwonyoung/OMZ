package com.ssafy.omz.dto.req;

import com.ssafy.omz.entity.GuestBook;
import io.swagger.annotations.ApiModel;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;

public class GuestBookRequestDto {

    @Data
    @NoArgsConstructor
    @ApiModel(value="방명록 작성 정보", description = "작성자, 내용을 가진 class")
    public static class Write{

        @NotEmpty(message="miniRoomId는 빈값 일 수 없습니다")
        @NotNull(message="miniRoomId는 null 일 수 없습니다")
        private long miniRoomId;

        @NotEmpty(message="memberId는 빈값 일 수 없습니다")
        @NotNull(message="memberId는 null 일 수 없습니다")
        private long memberId;
        @Size(min=1, max=140, message = "바르지않은 content 크기")
        @NotEmpty(message="content은 빈값 일 수 없습니다")
        @NotNull(message="content은 null 일 수 없습니다")
        private String content;

    }

}

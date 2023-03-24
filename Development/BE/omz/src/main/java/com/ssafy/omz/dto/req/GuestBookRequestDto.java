package com.ssafy.omz.dto.req;

import com.ssafy.omz.dto.resp.GuestBookResponseDto;
import com.ssafy.omz.dto.resp.MemberResponseDto;
import com.ssafy.omz.entity.GuestBook;
import com.ssafy.omz.entity.Member;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.Data;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class GuestBookRequestDto {

    @Data
    @Builder
    @ApiModel(value="방명록 작성 정보", description = "작성자, 내용을 가진 class")
    public static class Write{

        @NotEmpty(message="miniRoomId는 빈값 일 수 없습니다")
        @NotNull(message="miniRoomId는 null 일 수 없습니다")
        private Long miniRoomId;

        @NotEmpty(message="memberId는 빈값 일 수 없습니다")
        @NotNull(message="memberId는 null 일 수 없습니다")
        private Long memberId;
        @Size(min=1, max=140, message = "바르지않은 content 크기")
        @NotEmpty(message="content은 빈값 일 수 없습니다")
        @NotNull(message="content은 null 일 수 없습니다")
        private String content;

    }

}

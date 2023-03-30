package com.ssafy.omz.dto.req;

import com.ssafy.omz.entity.ItemType;
import com.ssafy.omz.entity.Member;
import io.swagger.annotations.ApiModel;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.Column;
import javax.validation.constraints.NotEmpty;

public class ItemRequestDto {
    @Data
    @NoArgsConstructor
    @ApiModel(value = "아이템 정보")
    public static class Write {
        @NotEmpty(message="name은 빈값 일 수 없습니다")
        private String name;
        @NotEmpty(message="state는 빈값 일 수 없습니다")
        private int state;

    }
}

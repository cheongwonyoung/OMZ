package com.ssafy.omz.dto.resp;

import com.ssafy.omz.entity.ItemType;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.stream.Collectors;

public class ItemResponseDto {

    @Data
    @Builder
    public static class Info {
        private Long itemId;
        private int state;
        private String name;
        public static ItemResponseDto.Info fromEntity(com.ssafy.omz.entity.Item itemEntity) {
            return Info.builder()
                    .itemId(itemEntity.getItemId())
                    .state(itemEntity.getState())
                    .name(itemEntity.getName())
                    .build();
        }
    }
}

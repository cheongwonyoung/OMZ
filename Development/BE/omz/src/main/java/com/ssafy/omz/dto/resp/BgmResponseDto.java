package com.ssafy.omz.dto.resp;

import lombok.Builder;
import lombok.Data;

public class BgmResponseDto {

    @Data
    @Builder
    public static class BgmInfo {

        private String singer;
        private String title;
        public static BgmResponseDto.BgmInfo fromEntity(com.ssafy.omz.entity.Bgm bgmEntity) {
            return BgmResponseDto.BgmInfo.builder()
                    .singer(bgmEntity.getSinger())
                    .title(bgmEntity.getTitle())
                    .build();
        }
    }

}

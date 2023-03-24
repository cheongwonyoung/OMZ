package com.ssafy.omz.service;

import com.ssafy.omz.dto.req.ChatMessage;
import com.ssafy.omz.dto.req.ChatPagingRequestDto;
import com.ssafy.omz.dto.resp.ChatPagingResponseDto;

import java.util.List;

public interface ChatRedisCacheService {
    void addChatToRedisCache(ChatMessage message);

    List<ChatPagingResponseDto> getChatsFromRedis(Long chatRoomId, ChatPagingRequestDto chatPagingDto);

    void findOtherChatsFromMysql(List<ChatPagingResponseDto> chatMessageDtoList, Long chatRoomId, String cursor);
}

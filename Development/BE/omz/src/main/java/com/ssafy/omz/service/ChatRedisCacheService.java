package com.ssafy.omz.service;

import com.ssafy.omz.dto.req.ChatMessage;
import com.ssafy.omz.dto.req.ChatRequestDto;
import com.ssafy.omz.dto.resp.ChatResponseDto;

import java.util.List;

public interface ChatRedisCacheService {
    void addChatToRedisCache(ChatMessage message);

    ChatMessage getRecentMessageByChatRoomId(Long chatRoomId);

    List<ChatResponseDto.ChatPaging> getChatsFromRedis(Long chatRoomId, Long memberId, ChatRequestDto.ChatPaging chatPagingDto);

    void findOtherChatsFromMysql(List<ChatResponseDto.ChatPaging> chatMessageDtoList, Long chatRoomId, String cursor);


}

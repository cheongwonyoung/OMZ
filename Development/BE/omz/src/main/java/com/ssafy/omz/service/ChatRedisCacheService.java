package com.ssafy.omz.service;

import com.ssafy.omz.dto.req.ChatMessage;

public interface ChatRedisCacheService {
    void addChatToRedisCache(ChatMessage message);
}

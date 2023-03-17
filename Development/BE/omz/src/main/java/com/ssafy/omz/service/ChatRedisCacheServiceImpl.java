package com.ssafy.omz.service;

import com.ssafy.omz.dto.req.ChatMessage;
import com.ssafy.omz.util.ChatUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.ZSetOperations;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.Set;

@RequiredArgsConstructor
@Service
public class ChatRedisCacheServiceImpl implements ChatRedisCacheService{

    public static final String NEW_CHAT = "NEW_CHAT";

    public static final String CHAT_SORTED_SET_ = "CHAT_SORTED_SET_";

    private final ChatUtils chatUtils;

    private final RedisTemplate<String, Object> redisTemplate;

    private final RedisTemplate<String, ChatMessage> chatRedisTemplate;

    //  Redis Sorted Set : 정렬된 상태로 유지
    //  채팅 메세지 저장 및 메세지 작성일자 기준 정렬
    private ZSetOperations<String, ChatMessage> zSetOperations;

    @PostConstruct
    private void init() {
        zSetOperations = chatRedisTemplate.opsForZSet();
    }

    @Override
    public void addChatToRedisCache(ChatMessage message) {
        //  ChatMessage savedData = ChatMessage.builder();

        //  Add tuples to a sorted set at key
        //  add(String key, Object data, double score);

        //  opsForZSet : Sorted Set

        //  zrange NEW_CHAT 0 -1
        redisTemplate.opsForZSet().add(NEW_CHAT, message, chatUtils.changeLocalDateTimeToDouble(message.getCreatedTime()));

        //  zrange CHAT_SORTED_SET_? 0 -1
        redisTemplate.opsForZSet().add(CHAT_SORTED_SET_ + message.getRoomId(), message, chatUtils.changeLocalDateTimeToDouble(message.getCreatedTime()));

    }
}

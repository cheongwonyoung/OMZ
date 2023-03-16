package com.ssafy.omz.service;

import com.ssafy.omz.dto.req.ChatMessage;
import com.ssafy.omz.util.ChatUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.ZSetOperations;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;

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
        System.out.println("[ChatRedisCacheServiceImpl addChatToRedisCache] ChatMessage createdTime : " + message.getCreatedTime());
        //  LocalDateTime 값 잘 들어옴 -> 2023-03-16T15:00:26.313484900 java.time.LocalDateTime

        //  ChatMessage savedData = ChatMessage.builder();

        //  Add tuples to a sorted set at key
        //  add(String key, Object data, double score);

        //  opsForZSet : Sorted Set
        redisTemplate.opsForZSet().add(NEW_CHAT, message, chatUtils.changeLocalDateTimeToDouble(message.getCreatedTime()));
        redisTemplate.opsForZSet().add(CHAT_SORTED_SET_ + message.getRoomId(), message, chatUtils.changeLocalDateTimeToDouble(message.getCreatedTime()));

        //  의문점 1.
        //  LocalDateTime을 기준으로 정렬하는데 왜 굳이 Double 타입으로 변환하는지
        //  Redis에서 LocalDateTime 기준 정렬 지원하지 않는 것인지


//        System.out.println("Message From Redis Cache : " + redisTemplate.opsForZSet().getOperations().getk);


    }
}

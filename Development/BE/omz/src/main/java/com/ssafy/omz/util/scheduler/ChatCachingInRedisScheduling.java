package com.ssafy.omz.util.scheduler;

import com.ssafy.omz.dto.req.ChatMessage;
import com.ssafy.omz.util.ChatUtils;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.redis.core.Cursor;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.ScanOptions;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import static com.ssafy.omz.service.ChatRedisCacheServiceImpl.CHAT_SORTED_SET_;

@Slf4j
@RequiredArgsConstructor
@Component
public class ChatCachingInRedisScheduling {

    private final ChatUtils chatUtils;
    private final RedisTemplate<String, Object> redisTemplate;

    private final RedisTemplate<String, ChatMessage> chatRedisTemplate;

    //  매일 새벽 2시 현재로부터 일주일 전 채팅 데이터를 MySql에서 가져와 Redis Cache에 적재
//    @Scheduled(cron = "0 0 2 * * *")
    @Scheduled(cron = "0 48/2 21 * * *")
    @Transactional
    public void chatCaching() {
        log.info("[ChatCachingInRedisScheduling chatCaching] redis chat caching start");

        ScanOptions scanOptions = ScanOptions.scanOptions()
                .match(CHAT_SORTED_SET_ + "*")
                .build();

        Cursor<String> cursor = redisTemplate.scan(scanOptions);


        //  기존 Redis Caching 데이터 삭제
        while(cursor.hasNext()){
            String matchedKey = cursor.next();
            log.info(matchedKey);
            redisTemplate.delete(matchedKey);
        }

        //  Redis Caching에 채팅 데이터 현재로부터 1주일치 적재하기
        chatUtils.cachingDataToRedisFromDB();

    }
}

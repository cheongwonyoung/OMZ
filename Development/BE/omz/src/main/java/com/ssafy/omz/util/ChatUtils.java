package com.ssafy.omz.util;

import com.ssafy.omz.dto.req.ChatMessage;
import com.ssafy.omz.entity.Chat;
import com.ssafy.omz.repository.ChatRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.ZSetOperations;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.List;

import static com.ssafy.omz.service.ChatRedisCacheServiceImpl.CHAT_SORTED_SET_;

@Slf4j
@Component
@RequiredArgsConstructor
public class ChatUtils {

    private final ChatRepository chatRepository;

    private final RedisTemplate<String, ChatMessage> chatRedisTemplate;

    private ZSetOperations<String, ChatMessage> zSetOperations;


    //  Destination으로부터 roomId 값 조회
    public String getRoomIdFromDestination(String destination){
        int lastIndex = destination.lastIndexOf('/');
        if(lastIndex != -1)
            return destination.substring(lastIndex+1);
        else
            return "";
    }

    //  채팅 데이터 생성일자 Double 형으로 형변환
    public Double changeLocalDateTimeToDouble(LocalDateTime createdAt) {
//        public Double changeLocalDateTimeToDouble(String createdAt) {
//        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss.SSS");
//        LocalDateTime localDateTime = LocalDateTime.parse(createdAt, formatter);

        createdAt.format(DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss.SSS"));
        return ((Long) createdAt.atZone(ZoneId.systemDefault()).toInstant().toEpochMilli()).doubleValue();
    }

    //  7일전까지의 채팅 데이터 MySql에서 Redis로 적재
    public void cachingDataToRedisFromDB(){

        zSetOperations = chatRedisTemplate.opsForZSet();
        //  서버 시작전, redis 에 데이터 적재시키기.
        LocalDateTime current = LocalDateTime.now();
        LocalDateTime cursorDate = current.minusDays(7);

        //  이건 7일전 뭔지 로그에 찍어보기위해서만,..?
        String cursor = cursorDate.format(DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss.SSS"));
        log.info("7일전 날짜 : {}", cursor);

        //  7일전 데이터 전부 가져와서, Redis에 적재
        List<Chat> chatList = chatRepository.findAllByCreatedTimeAfterOrderByCreatedTimeDesc(cursorDate);

        for (Chat chat : chatList) {
            ChatMessage chatMessage = ChatMessage.of(chat);
            zSetOperations.add(CHAT_SORTED_SET_ + chat.getChatRoom().getChatRoomId(), chatMessage, changeLocalDateTimeToDouble(chat.getCreatedTime()));
        }
    }

}

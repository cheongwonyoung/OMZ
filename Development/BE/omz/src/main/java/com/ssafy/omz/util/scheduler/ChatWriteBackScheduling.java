package com.ssafy.omz.util.scheduler;

import com.ssafy.omz.dto.req.ChatMessage;
import com.ssafy.omz.entity.Chat;
import com.ssafy.omz.entity.ChatRoom;
import com.ssafy.omz.entity.Member;
import com.ssafy.omz.repository.ChatJdbcRepository;
import com.ssafy.omz.repository.ChatRepository;
import com.ssafy.omz.repository.ChatRoomRepository;
import com.ssafy.omz.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.redis.core.*;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Component
public class ChatWriteBackScheduling {

    private final RedisTemplate<String, Object> redisTemplate;

    private final RedisTemplate<String, ChatMessage> chatRedisTemplate;

    private final ChatRepository chatRepository;

    private final ChatJdbcRepository chatJdbcRepository;

    private final ChatRoomRepository chatRoomRepository;

    private final MemberRepository memberRepository;

    //  매일 1?시부터 1시간마다 Redis Cache에 있는 채팅 데이터를 MySql에 저장
//    @Scheduled(cron = "0 0 0/1 * * *")
    @Scheduled(cron = "0 2/3 16 * * *") // 오전 9시 50분부터 3분 간격으로 MySql에 저장
    @Transactional
    public void writeBack(){
        log.info("[ChatWriteBackScheduling writeBack] Scheduling start");
        //  여기서부터 읽어오는 과정.
        BoundZSetOperations<String, ChatMessage> setOperations = chatRedisTemplate.boundZSetOps("NEW_CHAT");

        ScanOptions scanOptions = ScanOptions.scanOptions().build();

        List<Chat> chatList = new ArrayList<>();
        try (Cursor<ZSetOperations.TypedTuple<ChatMessage>> cursor= setOperations.scan(scanOptions)){

            while (cursor.hasNext()){
                ZSetOperations.TypedTuple<ChatMessage> chatMessage = cursor.next();

                ChatRoom chatroom = chatRoomRepository
                        .findById(Long.valueOf(chatMessage.getValue().getRoomId()))
                        .orElse(null);

                Member member = memberRepository
//                        .findById(chatMessage.getValue().getMemberId()).orElse(null);
                        .findByMemberId(Long.valueOf(chatMessage.getValue().getMemberId()));

                if(chatroom == null || member == null) {
                    continue;
                }

                chatList.add(Chat.of(chatMessage.getValue(), chatroom, member));
            }
            chatJdbcRepository.batchInsertChats(chatList);

            redisTemplate.delete("NEW_CHAT");

        }   catch (Exception e){
            e.printStackTrace();
        }

        log.info("Scheduling done");
    }

}

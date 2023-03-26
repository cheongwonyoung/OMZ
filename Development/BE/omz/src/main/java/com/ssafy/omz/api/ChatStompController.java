package com.ssafy.omz.api;

import com.ssafy.omz.dto.req.ChatMessage;
import com.ssafy.omz.repository.MemberRepository;
import com.ssafy.omz.service.ChatRedisCacheService;
import com.ssafy.omz.service.MemberService;
import com.ssafy.omz.service.RedisPublisher;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.redis.listener.ChannelTopic;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.stereotype.Controller;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

//@Api("ChatStompController API v1")
@Slf4j
@RequiredArgsConstructor
@Controller
public class ChatStompController { // stomp chat controller

    private final RedisPublisher redisPublisher;

    private final ChannelTopic topic; // GitHub for publisher

    private final ChatRedisCacheService chatRedisCacheService;

    private final MemberService memberService;  // LittleInfo return하는 메소드 추가해야 함

    /**
     * websocket "/pub/chat/message"로 들어오는 메시징을 처리한다.
     */

//    @MessageMapping("/chat/join")
//    public void testForJoin(ChatMessage message){
//        System.out.println("[ChatController Join] message : " + message);
//    }



    @ApiOperation(value = "채팅 메세지 송신", notes = "WebSocket /pub/chat/message로 들어오는 메세징 처리")
//    @ApiResponses({
//            @ApiResponse(code = 200, message = "OK"),
//            @ApiResponse(code = 404, message = "No param")
//            //Other Http Status code..
//    })
    @ApiImplicitParam(
            name = "message"
            , value = "채팅 메세지 정보"
            , defaultValue = "None")
    @MessageMapping("/chat/message")
    public void sendMessage(ChatMessage message){  // @Header("token") String token @Header("Authorization") String token
log.info("[ChatStompController sendMessage] ChatMessage : {}",message.toString());
//        GitHub 예시
//        UserInfo userInfo = jwtDecoder.decodeUsername(headerTokenExtractor.extract(token));

//        message.setNickName(memberService.getLittleInfo(Long.valueOf(message.getMemberId())).getNickname());
        message.setCreatedTime(LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss.SSS")));
        message.setType(ChatMessage.MessageType.TALK);

        //  만약 맨 처음 보낸 메세지면 ...

        // Topic에 pub 보내주기
        // 해당 채팅방에 메세지 보내주기
        redisPublisher.publish(topic, message);

        //  Redis Cache에 채팅 메세지 저장
        chatRedisCacheService.addChatToRedisCache(message);
    }

}

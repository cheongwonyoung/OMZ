package com.ssafy.omz.api;

import com.ssafy.omz.dto.req.ChatMessage;
import com.ssafy.omz.service.ChatRedisCacheService;
import com.ssafy.omz.service.RedisPublisher;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.listener.ChannelTopic;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.stereotype.Controller;

import java.time.LocalDateTime;

@Api("ChatController API v1")
@RequiredArgsConstructor
@Controller
public class ChatController { // stomp chat controller

    private final RedisPublisher redisPublisher;

    private final ChannelTopic topic; // GitHub for publisher

    private final ChatRedisCacheService chatRedisCacheService;

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

//        GitHub 예시
//        UserInfo userInfo = jwtDecoder.decodeUsername(headerTokenExtractor.extract(token));

//        Header에서 토큰 꺼내서 보낸 사람 누군지 확인 (member_id)
//        message.setMemberId();
//        message.setNickName();
        message.setCreatedTime(LocalDateTime.now());
//        "createdTime":[2023,3,16,14,41,59,51216100] 이렇게 Message 넘어옴

        message.setType(ChatMessage.MessageType.TALK);

        //  Redis Cache에 채팅 메세지 저장
        chatRedisCacheService.addChatToRedisCache(message);

        // Topic에 pub 보내주기
        // 해당 채팅방에 메세지 보내주기

        System.out.println("[ChatController message] Topic : " + topic.getTopic()); // chatroom

        redisPublisher.publish(topic, message);
    }

}

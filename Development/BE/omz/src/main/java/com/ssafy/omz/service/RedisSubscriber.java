package com.ssafy.omz.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafy.omz.dto.req.ChatMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class RedisSubscriber { //  implements MessageListener

    // Topic 구독하는 .... 비즈니스 로직 ...
    // 구독자들에게 Topic으로 들어온 메세지 보내줌

    private final ObjectMapper objectMapper;
    private final SimpMessageSendingOperations messagingTemplate;


//    private final RedisTemplate redisTemplate; // implements MessageListener 하면서 추가함



//    private final ChatRedisCacheService chatRedisCacheService;

    public void sendMessage(String publishMessage){

        try{
            // SUBSCRIBE일 경우 nickName null로 들어옴
//            [RedisSubscriber sendMessage] messasge : {"roomId":1,"memberId":0,"nickName":null,"type":"ENTER","message":null,"createdTime":null}
            System.out.println("[RedisSubscriber sendMessage] messasge : " + publishMessage);

            //redis에서 발행된 데이터를 받아 deserialize
            ChatMessage roomMessage = objectMapper.readValue(publishMessage, ChatMessage.class);

            //WebSocket 구독자에게 채팅 메시지 Send
            messagingTemplate.convertAndSend("/sub/chat/room/" + roomMessage.getRoomId(), roomMessage);
        }catch (Exception e){
            System.out.println(e.getMessage());
//            log.error(e.getMessage());
        }

    }

//    @Override
//    public void onMessage(Message message, byte[] pattern) {
//        try{
////            [RedisSubscriber sendMessage] messasge : {"roomId":1,"memberId":0,"nickName":null,"type":"ENTER","message":null,"createdTime":null}
//
//            // Redis로부터 온 메세지를 역직렬화
//            String publishMessage = (String) redisTemplate.getStringSerializer().deserialize(message.getBody());
//
//
//            System.out.println("[RedisSubscriber sendMessage] messasge : " + publishMessage);
//
//            //redis에서 발행된 데이터를 받아 deserialize
//            ChatMessage roomMessage = objectMapper.readValue(publishMessage, ChatMessage.class);
//
//            // Type이 TALK일 떄만 보내주는걸로 할까?
//            // 이거는 백 짤떄 필요한 정보가 있는지에 따라서 달라질 듯
//
//
//
//
//            //WebSocket 구독자에게 채팅 메시지 Send
//            messagingTemplate.convertAndSend("/sub/chat/room/"+roomMessage.getRoomId(), roomMessage);
//        }catch (Exception e){
//            System.out.println(e.getMessage());
////            log.error(e.getMessage());
//        }
//    }
}

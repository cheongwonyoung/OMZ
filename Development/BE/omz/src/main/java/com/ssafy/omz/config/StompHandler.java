package com.ssafy.omz.config;

import com.ssafy.omz.dto.req.ChatMessage;
import com.ssafy.omz.service.ChatRoomService;
import com.ssafy.omz.service.RedisPublisher;
import com.ssafy.omz.util.ChatUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.listener.ChannelTopic;
import org.springframework.messaging.Message;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.simp.stomp.StompCommand;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.messaging.support.ChannelInterceptor;
import org.springframework.stereotype.Component;

import java.util.Optional;

@RequiredArgsConstructor
@Component
public class StompHandler implements ChannelInterceptor {

    public static final String TOKEN = "token"; // Authorization ?

    public static final String SIMP_DESTINATION = "simpDestination";
    public static final String SIMP_SESSION_ID = "simpSessionId";
    public static final String INVALID_ROOM_ID = "InvalidRoomId";

    private final ChatRoomService chatRoomService;

    private final RedisPublisher redisPublisher;

    private final ChannelTopic topic;

    private final ChatUtils chatUtils; // StompHandler.java 내부에서 roomId 추출 코드 메서드로 빼도 됨 근데 일단 Util에 넣어놓기

    @Override
    public Message<?> preSend(Message<?> message, MessageChannel channel) {
        System.out.println("[StompHandler preSend]");
        StompHeaderAccessor accessor = StompHeaderAccessor.wrap(message);
//        String sessionId = (String) message.getHeaders().get("simpSessionId");

        // 최초 소켓 연결
        if (StompCommand.CONNECT == accessor.getCommand()) {
            System.out.println("[StompHandler preSend] : CONNECT");
            // 토큰 추출 -> 사용자 정보 확인
            String token = accessor.getFirstNativeHeader(TOKEN);
            System.out.println("[StompHandler preSend] : CONNECT Token : "+token);

//            String token = accessor.getFirstNativeHeader("Authorization").substring(7); // 7?
//            if(jwtDecoder.decodeUserId(token) == null) {
//                throw new LoginUserNotFoundException("로그인을 해주시기 바랍니다.");
//            }
        }
        // 소켓 연결 후, SUBSCRIBE 등록 ( 구독 요청 )
        else if (StompCommand.SUBSCRIBE == accessor.getCommand()) {
            // 메세지 보내지 아
            System.out.println("[StompHandler preSend] : SUBSCRIBE");

            // 토큰 추출 -> 사용자 정보 확인
            String token = accessor.getFirstNativeHeader(TOKEN);
//            String token = accessor.getFirstNativeHeader("Authorization").substring(7);

            // ---  blog start ----

            //  user 일치하는지 확인 후 일치하면 채팅방 목록에 추가
//            Long userId = Long.parseLong(jwtDecoder.decodeUserId(token));
//            User user = userRepository.findById(userId)
//                    .orElseThrow(() -> new UserNotFoundException("해당 유저가 존재하지 않습니다."));

//            ChatRoomUser chatRoomOldUser = chatRoomUserRepository.findByUser_Id(userId);
//
//            String roomId = chatMessageService.getRoomId(
//                    Optional.ofNullable((String) message.getHeaders().get("simpDestination"))
//                            .orElse("InvalidRoomId"));
//            ChatRoom chatRoom = chatRoomRepository.findById(Long.valueOf(roomId))
//                    .orElseThrow(() -> new ChatRoomNotFoundException("해당 토론방이 존재하지 않습니다."));
//
//            if (chatRoomOldUser == null) {
//                ChatRoomUser chatRoomUser = new ChatRoomUser(chatRoom, user);
//                chatRoomUserRepository.save(chatRoomUser);
//            } else throw new DuplicateChatRoomUserException("이미 다른 토론방에 있습니다."); // ?
//
//
//
//            // user와 채팅방 매핑
//            redisRepository.setSessionRoomId(sessionId, roomId); // HashOperations.put(sessionId, roomtId)
//            ----blog end---



            String destination = Optional.ofNullable(
                    (String) message.getHeaders().get(SIMP_DESTINATION)
            ).orElse(INVALID_ROOM_ID);

            String sessionId = Optional.ofNullable(
                    (String) message.getHeaders().get(SIMP_SESSION_ID)
            ).orElse(null);

            String roomId = chatUtils.getRoodIdFromDestination(destination);

            // for Test를 위해 token 값 일단 넣어주기
            String username = token; // null값 들어가는게 맞긴 한데 확인을 못해보내 ㅈ금 ...

            //redis에  key(roomId) :  Value( sessionId , nickname ) 저장
            chatRoomService.enterChatRoom(roomId, sessionId, username); // 닉네임으로? 아니면 memberId로?
            //  SESSION_ID - sessionId - roomId
            //  CHAT_ROOM_ID_roomId - sessionId - 유저 아이디

            // SUBSCRIBE일 경우 여기서 RedisSubscriber 호출됨..?


            redisPublisher.publish(topic,
                    ChatMessage.builder()
                            .type(ChatMessage.MessageType.ENTER)
                            .roomId(Long.valueOf(roomId))
//                            .userList(chatRoomService.findUser(roomId, sessionId))
                            .build()
            );
            // publish ENTER 보내서 RedisSubscriber 호출됨


            System.out.println("[StompHandler preSend] : SUBSCRIBE After publish sessionId : " + sessionId + ", roomId : " + roomId);


        }
        //  user 확인 후 채팅방에서 제외
        //  소켓 연결 후, 소켓 연결 해제 시 ( 근본 GitHub )
        else if (StompCommand.DISCONNECT == accessor.getCommand()) {
            System.out.println("[StompHandler preSend] : DISCONNECT");

//            String rawToken = Optional.ofNullable(accessor.getFirstNativeHeader("Authorization"))
//                    .orElse("unknownUser");
//            if(!rawToken.equals("unknownUser")) {
//                String token = rawToken.substring(7);
//                Long userId = Long.parseLong(jwtDecoder.decodeUserId(token));
//                chatRoomUserRepository.deleteByUser_Id(userId);
//                String roomId = redisRepository.getSessionRoomId(sessionId); // HashOperations에서 sessionId 검색
//                chatMessageService.accessChatMessage(
//                        ChatMessageRequestDto.builder().type(ChatMessage.MessageType.EXIT)
//                                .roomId(roomId).userId(userId).build());
//
//                //  매핑되었던 user와 채팅방 제거
//                redisRepository.removeSessionRoomId(sessionId);
//                // HashOperations에서 delete(sessionId)
//            }

            String sessionId = Optional.ofNullable(
                    (String) message.getHeaders().get(SIMP_SESSION_ID)
            ).orElse(null);

            //  **** 예외 처리 ****
            // sessionId null이면 Failed to send message to ExecutorSubscribableChannel 발생
            long roomId = Long.parseLong(chatRoomService.disconnectWebsocket(sessionId));

            redisPublisher.publish(topic,
                    ChatMessage.builder()
                            .type(ChatMessage.MessageType.QUIT)
                            .roomId(roomId)
//                            .userList(chatRoomService.findUser(roomId, sessionId))
                            .build()
            );
            System.out.println("[StompHandler preSend] : DISCONNECT sessionId : " + sessionId +", roomId : "+roomId);

        }
        //reids SubScribe 해제
        else if (StompCommand.UNSUBSCRIBE == accessor.getCommand()) {
            System.out.println("[StompHandler preSend] : UNSUBSCRIBE");

            String sessionId = Optional.ofNullable(
                    (String) message.getHeaders().get(SIMP_SESSION_ID)
            ).orElse(null);

            long roomId = Long.parseLong(chatRoomService.leaveChatRoom(sessionId));

            redisPublisher.publish(topic,
                    ChatMessage.builder()
                            .type(ChatMessage.MessageType.QUIT)
                            .roomId(roomId)
//                            .userList(chatRoomService.findUser(roomId, sessionId))
                            .build()
            );
            System.out.println("[StompHandler preSend] : UNSUBSCRIBE sessionId : " + sessionId +", roomId : "+roomId);

        }
        return message;
    }
}

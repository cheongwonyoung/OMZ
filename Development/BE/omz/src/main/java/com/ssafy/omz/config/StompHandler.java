package com.ssafy.omz.config;

import com.ssafy.omz.dto.req.ChatMessage;
import com.ssafy.omz.service.ChatRoomService;
import com.ssafy.omz.service.MemberService;
import com.ssafy.omz.service.RedisPublisher;
import com.ssafy.omz.util.ChatUtils;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.redis.listener.ChannelTopic;
import org.springframework.messaging.Message;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.simp.stomp.StompCommand;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.messaging.support.ChannelInterceptor;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Slf4j
@RequiredArgsConstructor
@Component
public class StompHandler implements ChannelInterceptor {

    public static final String TOKEN = "token";

    public static final String SIMP_DESTINATION = "simpDestination";
    public static final String SIMP_SESSION_ID = "simpSessionId";
    public static final String INVALID_ROOM_ID = "InvalidRoomId";

    private final MemberService memberService;

    private final ChatRoomService chatRoomService;

    private final RedisPublisher redisPublisher;

    private final ChannelTopic topic;

    private final ChatUtils chatUtils;

    @Override
    public Message<?> preSend(Message<?> message, MessageChannel channel) {
        StompHeaderAccessor accessor = StompHeaderAccessor.wrap(message);

        // 최초 소켓 연결
        if (StompCommand.CONNECT == accessor.getCommand()) {
            log.info("[StompHandler preSend] : CONNECT ");
        }
        // 소켓 연결 후, SUBSCRIBE 등록 ( 구독 요청 )
        else if (StompCommand.SUBSCRIBE == accessor.getCommand()) {

            log.info("[StompHandler preSend] : SUBSCRIBE ");

            log.info("[SubScribe destination] : " + message.getHeaders().get(SIMP_DESTINATION));
            log.info("[SubScribe sessionId] : " + message.getHeaders().get(SIMP_SESSION_ID));

            String destination = Optional.ofNullable(
                    (String) message.getHeaders().get(SIMP_DESTINATION)
            ).orElse(INVALID_ROOM_ID);

            String sessionId = Optional.ofNullable(
                    (String) message.getHeaders().get(SIMP_SESSION_ID)
            ).orElse(null);

            String roomId = chatUtils.getRoomIdFromDestination(destination);

            String nickname = "StompHandler";

            chatRoomService.enterChatRoom(roomId, sessionId, nickname); // 닉네임으로? 아니면 memberId로?

            redisPublisher.publish(topic,
                    ChatMessage.builder()
//                            .memberId(memberId)
//                            .nickName(nickname)
                            .type(ChatMessage.MessageType.ENTER)
                            .roomId(Long.valueOf(roomId))
                            .build()
            );
        }
        //  user 확인 후 채팅방에서 제외
        //  소켓 연결 후, 소켓 연결 해제 시 ( 근본 GitHub )
        else if (StompCommand.DISCONNECT == accessor.getCommand()) {
            log.info("[StompHandler preSend] : DISCONNECT");

            String sessionId = Optional.ofNullable(
                    (String) message.getHeaders().get(SIMP_SESSION_ID)
            ).orElse(null);

            //  **** 예외 처리 해줘야함****
            // sessionId null이면 (위에서 null) Failed to send message to ExecutorSubscribableChannel 발생

            String roomId = chatRoomService.disconnectWebsocket(sessionId);

            redisPublisher.publish(topic,
                    ChatMessage.builder()
                            .type(ChatMessage.MessageType.QUIT)
                            .roomId(Long.valueOf(roomId))
                            .build()
            );
        }
        return message;
    }
}

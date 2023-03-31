package com.ssafy.omz.config;

import com.ssafy.omz.dto.req.ChatMessage;
import com.ssafy.omz.dto.resp.MemberResponseDto;
import com.ssafy.omz.repository.MemberRepository;
import com.ssafy.omz.service.ChatRoomService;
import com.ssafy.omz.service.MemberService;
import com.ssafy.omz.service.RedisPublisher;
import com.ssafy.omz.util.ChatUtils;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.redis.listener.ChannelTopic;
import org.springframework.messaging.Message;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.MessageHeaders;
import org.springframework.messaging.simp.stomp.StompCommand;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.messaging.support.ChannelInterceptor;
import org.springframework.messaging.support.MessageHeaderAccessor;
import org.springframework.stereotype.Component;

import java.io.UnsupportedEncodingException;
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

    private final ChatUtils chatUtils; // StompHandler.java 내부에서 roomId 추출 코드 메서드로 빼도 됨 근데 일단 Util에 넣어놓기

    @Override
    public Message<?> preSend(Message<?> message, MessageChannel channel) {
        StompHeaderAccessor accessor = StompHeaderAccessor.wrap(message);
//        String sessionId = (String) message.getHeaders().get("simpSessionId");
//        String token = accessor.getFirstNativeHeader("Authorization").substring(7);
//        String token = accessor.getFirstNativeHeader("Authorization").substring(7);

//        MemberResponseDto.LittleInfo memberInfo = null;


        // 최초 소켓 연결
        if (StompCommand.CONNECT == accessor.getCommand()) {

            // 토큰 추출 -> FE에서 connectHeaders : {token : "토큰값"}

//            log.info("[StompHandler preSend] : CONNECT Authorization : " + accessor.getFirstNativeHeader("Authorization"));


//            String token = accessor.getFirstNativeHeader("Authorization").substring(7);
//            String token = accessor.getFirstNativeHeader(TOKEN);

            log.info("[StompHandler preSend] : CONNECT Authorization : ");
//            try {
//                memberInfo = memberService.getLittleInfo(token);
//                log.info("[CONNECT] memberInfo : {}", memberInfo.toString());
//            } catch (UnsupportedEncodingException e) {
//                throw new RuntimeException(e);
//            }

//            log.info("[StompHandler preSend] : CONNECT token : " + accessor.getFirstNativeHeader(TOKEN));

//            if(jwtDecoder.decodeUserId(token) == null) {
//                throw new LoginUserNotFoundException("로그인을 해주시기 바랍니다.");
//            }
        }
        // 소켓 연결 후, SUBSCRIBE 등록 ( 구독 요청 )
        else if (StompCommand.SUBSCRIBE == accessor.getCommand()) {

            log.info("[SubScribe destination] : " + message.getHeaders().get(SIMP_DESTINATION));
            log.info("[SubScribe sessionId] : " + message.getHeaders().get(SIMP_SESSION_ID));

            log.info("[StompHandler preSend] : SUBSCRIBE ");


//            log.info("[StompHandler preSend] : SUBSCRIBE {}", token);

            // 토큰 추출 -> FE에서 connectHeaders : {token : "토큰값"}
//            token = accessor.getFirstNativeHeader(TOKEN);
//            String token1 = accessor.getFirstNativeHeader("Authorization");

//            String token2 = accessor.getFirstNativeHeader(TOKEN);
//
//
//            try {
//                memberInfo = memberService.getLittleInfo(token2);
//            } catch (UnsupportedEncodingException e) {
//                throw new RuntimeException(e);
//            }

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

            String roomId = chatUtils.getRoomIdFromDestination(destination);

//            String nickname = memberInfo.getNickname();
//            String memberId = String.valueOf(memberInfo.getMemberId());

//            log.info("[Subscribe] memberInfo nickname : {}, memberId : {}", nickname, memberId);

            String nickname = "StompHandler";

            //redis에  key(roomId) :  Value( sessionId , nickname ) 저장
            chatRoomService.enterChatRoom(roomId, sessionId, nickname); // 닉네임으로? 아니면 memberId로?
            //  SESSION_ID - sessionId - roomId
            //  CHAT_ROOM_ID_roomId - sessionId - 유저 아이디

            // SUBSCRIBE일 경우 여기서 RedisSubscriber 호출됨..?


            redisPublisher.publish(topic,
                    ChatMessage.builder()
//                            .memberId(memberId)
//                            .nickName(nickname)
                            .type(ChatMessage.MessageType.ENTER)
                            .roomId(Long.valueOf(roomId))
                            .build()
            );
            // publish ENTER 보내서 RedisSubscriber 호출됨


            log.info("[StompHandler preSend] : SUBSCRIBE After publish sessionId : " + sessionId + ", roomId : " + roomId);


        }
        //  user 확인 후 채팅방에서 제외
        //  소켓 연결 후, 소켓 연결 해제 시 ( 근본 GitHub )
        else if (StompCommand.DISCONNECT == accessor.getCommand()) {
            log.info("[StompHandler preSend] : DISCONNECT");

            // 토큰 추출 -> FE에서 connectHeaders : {token : "토큰값"}
//            String token = accessor.getFirstNativeHeader(TOKEN);

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

            //  **** 예외 처리 해줘야함****
            // sessionId null이면 (위에서 null) Failed to send message to ExecutorSubscribableChannel 발생

            String roomId = chatRoomService.disconnectWebsocket(sessionId);

            redisPublisher.publish(topic,
                    ChatMessage.builder()
                            .type(ChatMessage.MessageType.QUIT)
                            .roomId(Long.valueOf(roomId))
//                            .userList(chatRoomService.findUser(roomId, sessionId))
                            .build()
            );
            log.info("[StompHandler preSend] : DISCONNECT After publish QUIT sessionId : " + sessionId +", roomId : "+roomId);

        }
        //reids SubScribe 해제
//        else if (StompCommand.UNSUBSCRIBE == accessor.getCommand()) {
//
//            String sessionId = Optional.ofNullable(
//                    (String) message.getHeaders().get(SIMP_SESSION_ID)
//            ).orElse(null);
//
//            long roomId = Long.parseLong(chatRoomService.leaveChatRoom(sessionId));
//
//            redisPublisher.publish(topic,
//                    ChatMessage.builder()
//                            .type(ChatMessage.MessageType.QUIT)
//                            .roomId(roomId)
////                            .userList(chatRoomService.findUser(roomId, sessionId))
//                            .build()
//            );
//
//        }
        return message;
    }
}

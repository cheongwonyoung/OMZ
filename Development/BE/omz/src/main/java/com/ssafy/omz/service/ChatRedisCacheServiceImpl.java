package com.ssafy.omz.service;

import com.ssafy.omz.dto.req.ChatMessage;
import com.ssafy.omz.util.ChatUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.ZSetOperations;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.Set;

@RequiredArgsConstructor
@Service
public class ChatRedisCacheServiceImpl implements ChatRedisCacheService{

    public static final String NEW_CHAT = "NEW_CHAT";

    public static final String CHAT_SORTED_SET_ = "CHAT_SORTED_SET_";

    private final ChatUtils chatUtils;

    private final RedisTemplate<String, Object> redisTemplate;
    //  username에 해당하는 nickname 넣어둠
//    private final RedisTemplate<String, String> roomRedisTemplate;

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
        //  ChatMessage savedData = ChatMessage.builder();

        //  Add tuples to a sorted set at key
        //  add(String key, Object data, double score);

        //  opsForZSet : Sorted Set

        //  zrange NEW_CHAT 0 -1
        redisTemplate.opsForZSet().add(NEW_CHAT, message, chatUtils.changeLocalDateTimeToDouble(message.getCreatedTime()));

        //  zrange CHAT_SORTED_SET_? 0 -1
        redisTemplate.opsForZSet().add(CHAT_SORTED_SET_ + message.getRoomId(), message, chatUtils.changeLocalDateTimeToDouble(message.getCreatedTime()));

    }

    //  이거 왜 하는? MySql -> Redis
//    public void cachingDBDataToRedis(Chat chat) {
//        ChatMessage chatMessage = ChatMessage.of(chat);
//        redisTemplate.opsForZSet()
//                .add(
//                        CHAT_SORTED_SET_ + chatMessage.getRoomId(),
//                        chatMessage,
//                        chatUtils.changeLocalDateTimeToDouble(chatMessage.getCreatedTime()));
//    }


    //redis 회원 닉네임 조회
//    public String findUserNicknameByUsername(String username) {
//
//        String nickname = (String) roomRedisTemplate.opsForHash().get(USERNAME_NICKNAME, username);
//
//        if (nickname != null)
//            return nickname;
//
//        //redis 닉네임이 존재하지 않는다면, MYSQL에서 데이터 불러오기
//        User user = userRepository.findByUsername(username)
//                .orElse(null);
//
//        if (user == null) return OUT_USER;
//
//        // redis nickname_data insert
//        roomRedisTemplate.opsForHash().put(USERNAME_NICKNAME, username, user.getNickname());
//
//        return user.getNickname();
//    }
//
//    public void changeUserCachingNickname(String username, String changedNickname) {
//        roomRedisTemplate.opsForHash().put(USERNAME_NICKNAME, username, changedNickname);
//    }
//
//    public void deleteUserCahchingNickname(String username) {
//        roomRedisTemplate.opsForHash().delete(USERNAME_NICKNAME, username);
//    }

    //  Cursor Pagination 사용 부분

}

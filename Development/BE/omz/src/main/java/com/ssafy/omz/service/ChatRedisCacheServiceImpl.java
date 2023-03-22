package com.ssafy.omz.service;

import com.ssafy.omz.dto.req.ChatMessage;
import com.ssafy.omz.entity.Member;
import com.ssafy.omz.repository.MemberRepository;
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

    public static final String MEMBER_ID_NICKNAME = "MEMBER_ID_NICKNAME";

    public static final String OUT_USER = "탈퇴 회원";

    private final ChatUtils chatUtils;

    private final MemberRepository memberRepository;

    private final RedisTemplate<String, ChatMessage> chatRedisTemplate;

    //  채팅 내역과 채팅방에 해당하는 채팅 내역
    private final RedisTemplate<String, Object> redisTemplate;

    //  memberId에 해당하는 nickname 넣어둠
    private final RedisTemplate<String, String> roomRedisTemplate;


    //  ZSet : Redis Sorted Set : 정렬된 상태로 유지
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


    //  Redis 회원 닉네임 조회 : nickname -> memberId
//    public String findNicknameByMemberId(long memberId) {
//
//        String nickname = (String) roomRedisTemplate.opsForHash().get(MEMBER_ID_NICKNAME, memberId);
//
//        if (nickname != null)
//            return nickname;
//
//        //  Redis 닉네임이 존재하지 않는다면, MYSQL에서 데이터 불러오기
//        Member member = memberRepository.findByMemberId(memberId)
//                .orElse(null);
//
//        if (member == null) return OUT_USER;
//
//        // redis nickname_data insert
//        roomRedisTemplate.opsForHash().put(MEMBER_ID_NICKNAME, memberId, member.getNickName());
//
//        return member.getNickName();
//    }

    public void changeUserCachingNickname(long memberId, String changedNickname) {
        roomRedisTemplate.opsForHash().put(MEMBER_ID_NICKNAME, memberId, changedNickname);
    }

    public void deleteUserCahchingNickname(long memberId) {
        roomRedisTemplate.opsForHash().delete(MEMBER_ID_NICKNAME, memberId);
    }

    //  Cursor Pagination 사용 부분

    //  Redis   getChatsFromRedis
    //  MySql   findChatFromMysql
}

package com.ssafy.omz.service;

import com.ssafy.omz.dto.req.ChatMessage;
import com.ssafy.omz.dto.req.ChatPagingRequestDto;
import com.ssafy.omz.dto.resp.ChatPagingResponseDto;
import com.ssafy.omz.entity.Member;
import com.ssafy.omz.repository.MemberRepository;
import com.ssafy.omz.util.ChatUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.ZSetOperations;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

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
    //chat_data 조회
    public List<ChatPagingResponseDto> getChatsFromRedis(Long roomId, ChatPagingRequestDto chatPagingDto) {

        //마지막 채팅을 기준으로 redis의 Sorted set에 몇번째 항목인지 파악
        ChatMessage cursorDto = ChatMessage.builder()
                .type(ChatMessage.MessageType.TALK)
                .roomId(roomId.toString())
                .createdTime(chatPagingDto.getCursor()) // ChatMessage에서는 LocalDateTime으로 되어있음
                .message(chatPagingDto.getMessage())
                .memberId(chatPagingDto.getMemberId())
                .nickName(chatPagingDto.getNickname())
                .build();


        //마지막 chat_data cursor Rank 조회
        Long rank = zSetOperations.reverseRank(CHAT_SORTED_SET_ + roomId, cursorDto);

        //Cursor 없을 경우 -> 최신채팅 조회
        if (rank == null)
            rank = 0L;
        else rank = rank + 1;

        //Redis 로부터 chat_data 조회
        Set<ChatMessage> chatMessageSaveDtoSet = zSetOperations.reverseRange(CHAT_SORTED_SET_ + roomId, rank, rank + 10);

//        List<ChatPagingResponseDto> chatMessageDtoList =
//                chatMessageSaveDtoSet
//                        .stream()
//                        .map(ChatPagingResponseDto::byChatMessageDto)
//                        .collect(Collectors.toList());
//
//        //Chat_data 부족할경우 MYSQL 추가 조회
//        if (chatMessageDtoList.size() != 10) {
//            findOtherChatDataInMysql(chatMessageDtoList, roomId, chatPagingDto.getCursor());
//        }
//
//        //redis caching 닉네임으로 작성자 삽입
//        for (ChatPagingResponseDto chatPagingResponseDto : chatMessageDtoList) {
//            chatPagingResponseDto.setNickname(findUserNicknameByUsername(chatPagingResponseDto.getWriter()));
//        }
//
//        return chatMessageDtoList;
        return new ArrayList<>();
    }

    //  MySql   findChatFromMysql
}

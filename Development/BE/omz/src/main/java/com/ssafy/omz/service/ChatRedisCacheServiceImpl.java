package com.ssafy.omz.service;

import com.ssafy.omz.dto.req.ChatMessage;
import com.ssafy.omz.dto.req.ChatPagingRequestDto;
import com.ssafy.omz.dto.resp.ChatPagingResponseDto;
import com.ssafy.omz.entity.Chat;
import com.ssafy.omz.entity.Member;
import com.ssafy.omz.repository.ChatRepository;
import com.ssafy.omz.repository.MemberRepository;
import com.ssafy.omz.util.ChatUtils;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Slice;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.ZSetOperations;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import static com.ssafy.omz.dto.resp.ChatPagingResponseDto.byChatMessageDto;

@Slf4j
@RequiredArgsConstructor
@Service
public class ChatRedisCacheServiceImpl implements ChatRedisCacheService{

    public static final String NEW_CHAT = "NEW_CHAT";

    public static final String CHAT_SORTED_SET_ = "CHAT_SORTED_SET_";

    public static final String MEMBER_ID_NICKNAME = "MEMBER_ID_NICKNAME";

    public static final String OUT_USER = "탈퇴 회원";

    private final ChatUtils chatUtils;

    private final MemberRepository memberRepository;

    private final ChatRepository chatRepository;

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

    //  MySql -> Redis
    public void cachingDBDataToRedis(Chat chat) {
        ChatMessage chatMessage = ChatMessage.of(chat);
        redisTemplate.opsForZSet()
                .add(
                        CHAT_SORTED_SET_ + chatMessage.getRoomId(),
                        chatMessage,
                        chatUtils.changeLocalDateTimeToDouble(chatMessage.getCreatedTime()));
    }


    //  Redis 회원 닉네임 조회 : nickname -> memberId
    public String findNicknameByMemberId(long memberId) {

        String nickname = (String) roomRedisTemplate.opsForHash().get(MEMBER_ID_NICKNAME, memberId);

        if (nickname != null)
            return nickname;

        //  Redis 닉네임이 존재하지 않는다면, MYSQL에서 데이터 불러오기
        Member member = memberRepository
                .findById(memberId)
//                .findByMemberId(memberId)
                .orElse(null);

        if (member == null) return OUT_USER;

        // redis nickname_data insert
        roomRedisTemplate.opsForHash().put(MEMBER_ID_NICKNAME, memberId, member.getNickname());

        return member.getNickname();
    }

    public void changeUserCachingNickname(long memberId, String changedNickname) {
        roomRedisTemplate.opsForHash().put(MEMBER_ID_NICKNAME, memberId, changedNickname);
    }

    public void deleteUserCahchingNickname(long memberId) {
        roomRedisTemplate.opsForHash().delete(MEMBER_ID_NICKNAME, memberId);
    }

    @Override
    public ChatMessage getRecentMessageByChatRoomId(Long chatRoomId){
        Long size = zSetOperations.size(CHAT_SORTED_SET_ + chatRoomId);
        if(size == 0)
            return null;
        ChatMessage recentChatMessage = zSetOperations.range(CHAT_SORTED_SET_ + chatRoomId, size - 1, size).iterator().next();
        return recentChatMessage;
    }

    @Override
    public List<ChatPagingResponseDto> getChatsFromRedis(Long chatRoomId, Long memberId, ChatPagingRequestDto chatPagingDto) {

        //  마지막 채팅을 기준으로 redis의 Sorted set에 몇번째 항목인지 파악
        ChatMessage cursorDto = ChatMessage.builder()
                .type(ChatMessage.MessageType.TALK)
                .roomId(chatRoomId)
                .createdTime(chatPagingDto.getCursor()) // ChatMessage에서는 LocalDateTime으로 되어있음
                .message(chatPagingDto.getMessage())
                .memberId(chatPagingDto.getMemberId())
                .nickName(chatPagingDto.getNickname())
                .build();

        //  마지막 chat_data cursor Rank 조회
        Long rank = zSetOperations.reverseRank(CHAT_SORTED_SET_ + chatRoomId, cursorDto);
        log.info("[Cursor Pagination] rank : {}", rank);
        //  Cursor 없을 경우 -> 최신채팅 조회
        if (rank == null)
            rank = 0L;
        else rank = rank + 1;

        //  Redis로부터 chat_data 조회
        Set<ChatMessage> chatMessageSaveDtoSet = zSetOperations.reverseRange(CHAT_SORTED_SET_ + chatRoomId, rank, rank + 10);
        log.info("[Redis에서 조회한 해당 채팅방 메세지 크기] size : {}",chatMessageSaveDtoSet.size());
//        List<ChatPagingResponseDto> chatMessageDtoList =
//                chatMessageSaveDtoSet
//                        .stream()
//                        .map(ChatPagingResponseDto::byChatMessageDto)
//                        .collect(Collectors.toList());

        //  isChecked를 위해 for문 세분화
        List<ChatPagingResponseDto> chatMessageDtoList = chatMessageSaveDtoSet.stream().map(
                chatMessage -> {
                    ChatPagingResponseDto chatPagingResponseDto = byChatMessageDto(chatMessage);

                    //  상대방이 보낸 채팅 메세지
                    if(chatMessage.getMemberId() != memberId && !chatMessage.isChecked()){
                        //  isChecked 값 변환 후 NEW_CHAT, CHAT_SORTED_SET_?에 다시 삽입
                        log.info("[ChatRedisCacheService isChecked] ChatMessage : {}", chatMessage.toString());
                        chatPagingResponseDto.setChecked(true);
                        
                        if(zSetOperations.reverseRank(CHAT_SORTED_SET_ + chatMessage.getRoomId(), chatMessage) != null) {
                            chatMessage.setChecked(true);
                            redisTemplate.opsForZSet().add(CHAT_SORTED_SET_ + chatMessage.getRoomId(), chatMessage, chatUtils.changeLocalDateTimeToDouble(chatMessage.getCreatedTime()));
                        }

                        chatMessage.setChecked(true);

                        //  zrange NEW_CHAT 0 -1
                        redisTemplate.opsForZSet().add(NEW_CHAT, chatMessage, chatUtils.changeLocalDateTimeToDouble(chatMessage.getCreatedTime()));

                        // 만약 NEW_CHAT에 있으면
                        //  zrange CHAT_SORTED_SET_? 0 -1
                        //  isChecked가 false에서 true로 바뀌어서 다른거 다 같아도 없다고 뜰 수도 있음... 순서를 일단 제일 먼저로 바꿔야하나?

                    }
                    return chatPagingResponseDto;
                }
        ).collect(Collectors.toList());

        //  Chat_data 부족할경우 MYSQL 추가 조회
        if (chatMessageDtoList.size() != 10) {
            findOtherChatsFromMysql(chatMessageDtoList, chatRoomId, chatPagingDto.getCursor());
        }

        //  Redis caching 닉네임으로 작성자 삽입
        for (ChatPagingResponseDto chatPagingResponseDto : chatMessageDtoList) {
            chatPagingResponseDto.setNickname(findNicknameByMemberId(chatPagingResponseDto.getMemberId()));
        }

        return chatMessageDtoList;
    }

    @Override
    public void findOtherChatsFromMysql(List<ChatPagingResponseDto> chatMessageDtoList, Long chatRoomId, String cursor) {
        String lastCursor;
        // 데이터가 하나도 없을 경우 현재시간을 Cursor로 활용
        if (chatMessageDtoList.size() == 0 && cursor == null) {
            ; // ?
            lastCursor = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss.SSS"));
        }

        //redis 적재된 마지막 데이터를 입력했을 경우.
        else if (chatMessageDtoList.size() == 0 && cursor != null) {
            lastCursor = cursor;
        }

        // 데이터가 존재할 경우 CreatedAt을 Cursor로 사용
        else
            lastCursor = chatMessageDtoList.get(chatMessageDtoList.size() - 1).getCreatedTime();

        int dtoListSize = chatMessageDtoList.size();
        Slice<Chat> chatSlice =
                chatRepository
                        .findAllByCreatedTimeBeforeAndChatRoomChatRoomIdOrderByCreatedTimeDesc(
                                lastCursor,
                                chatRoomId,
                                PageRequest.of(0, 30)
                        );

        //  Redis Cache에
        for (Chat chat : chatSlice.getContent()) {
            cachingDBDataToRedis(chat);
        }


        //  추가 데이터가 없을 때 return;
        if (chatSlice.getContent().isEmpty())
            return;

        //  추가 데이터가 존재하다면, responseDto에  데이터 추가.
        for (int i = dtoListSize; i <= 10; i++) {
            try {
                Chat chat = chatSlice.getContent().get(i - dtoListSize);
                chatMessageDtoList.add(ChatPagingResponseDto.of(chat));
            } catch (IndexOutOfBoundsException e) {
                e.printStackTrace();
                return;
            }
        }

    }

}

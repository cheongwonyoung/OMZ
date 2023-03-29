package com.ssafy.omz.service;

import com.ssafy.omz.dto.req.ChatMessage;
import com.ssafy.omz.dto.resp.ChatRoomDto;
import com.ssafy.omz.entity.ChatRoom;
import com.ssafy.omz.entity.Member;
import com.ssafy.omz.repository.ChatRoomRedisRepository;
import com.ssafy.omz.repository.ChatRoomRepository;
import com.ssafy.omz.repository.FriendRepository;
import com.ssafy.omz.repository.MemberRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
public class ChatRoomServiceImpl implements ChatRoomService{

    private ChatRoomRepository chatRoomRepository;

    private ChatRoomRedisRepository chatRoomRedisRepository;

    private MemberRepository memberRepository;

    private FriendRepository friendRepository;

    private final ChatRedisCacheService chatRedisCacheService;

    @Autowired
    public ChatRoomServiceImpl(ChatRoomRepository chatRoomRepository, ChatRoomRedisRepository chatRoomRedisRepository, MemberRepository memberRepository, FriendRepository friendRepository, ChatRedisCacheService chatRedisCacheService) {
        this.chatRoomRepository = chatRoomRepository;
        this.chatRoomRedisRepository = chatRoomRedisRepository;
        this.memberRepository = memberRepository;
        this.friendRepository = friendRepository;
        this.chatRedisCacheService = chatRedisCacheService;
    }

    @Override
    public void enterChatRoom(String roomId, String sessionId, String username) {
        chatRoomRedisRepository.enterChatRoom(roomId,sessionId,username);
    }

    @Override
    public String disconnectWebsocket(String sessionId) {
        return chatRoomRedisRepository.disconnectWebsocket(sessionId);
    }

    @Override
    public String leaveChatRoom(String sessionId) {
        return chatRoomRedisRepository.leaveChatRoom(sessionId);
    }

    @Override
    public List<ChatRoomDto> getChatRoomList(long memberId) {
        Member member = memberRepository.findByMemberId(memberId);
        List<ChatRoom> chatRooms = chatRoomRepository.findAllByToMemberIdOrFromMemberId(member, member);

        List<ChatRoomDto> chatRoomList = new ArrayList<>();
        for (ChatRoom chatRoom:
             chatRooms) {

            //  chatRepository 제일 최근 메세지 하나 redis에서 조회
            ChatMessage recentChatMessage = chatRedisCacheService.getRecentMessageByChatRoomId(chatRoom.getChatRoomId());
            if(recentChatMessage == null)
                continue;

            // memberRepository 상대방 닉네임, 아바타 이미지 조회
            Member other = (chatRoom.getToMemberId().getMemberId() != memberId) ? chatRoom.getToMemberId() : chatRoom.getFromMemberId();

            //  friendRepository 친구 여부 확인
            //  친구(1), 친구 대기 중(0), 친구 거절(-1), 친구 신청 기록 없음 (2)
            int state = 2;
            if(friendRepository.existsByToMember_MemberIdAndFromMember_MemberId(memberId, other.getMemberId()))
                state = friendRepository.findByToMember_MemberIdAndFromMember_MemberId(memberId, other.getMemberId()).getState();

            chatRoomList.add(
                    ChatRoomDto.builder()
                            .roomId(chatRoom.getChatRoomId())
                            .nickName(other.getNickname())
                            .memberId(other.getMemberId())
                            .file(other.getFile())
                            .recentMessage(recentChatMessage.getMessage())
                            .recentMessageCreatedTime(recentChatMessage.getCreatedTime())
//                            .isChecked()
                            .friendState(state)
                            .build()
            );
        }
        return chatRoomList;
    }
}

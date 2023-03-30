package com.ssafy.omz.service;

import com.ssafy.omz.dto.req.ChatMembersInfoRequestDto;
import com.ssafy.omz.dto.req.ChatMessage;
import com.ssafy.omz.dto.req.FriendRequestDto;
import com.ssafy.omz.dto.resp.ChatOtherInfoResponseDto;
import com.ssafy.omz.dto.resp.ChatRoomInfoResponseDto;
import com.ssafy.omz.dto.resp.ChatRoomResponseDto;
import com.ssafy.omz.entity.ChatRoom;
import com.ssafy.omz.entity.Friend;
import com.ssafy.omz.entity.Member;
import com.ssafy.omz.repository.ChatRoomRedisRepository;
import com.ssafy.omz.repository.ChatRoomRepository;
import com.ssafy.omz.repository.FriendRepository;
import com.ssafy.omz.repository.MemberRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.RollbackException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Slf4j
@Service
public class ChatRoomServiceImpl implements ChatRoomService{

    private ChatRoomRepository chatRoomRepository;

    private ChatRoomRedisRepository chatRoomRedisRepository;

    private MemberRepository memberRepository;

    private FriendRepository friendRepository;

    private final ChatRedisCacheService chatRedisCacheService;

    private final FriendService friendService;

    @Autowired
    public ChatRoomServiceImpl(ChatRoomRepository chatRoomRepository, ChatRoomRedisRepository chatRoomRedisRepository, MemberRepository memberRepository, FriendRepository friendRepository, ChatRedisCacheService chatRedisCacheService, FriendService friendService) {
        this.chatRoomRepository = chatRoomRepository;
        this.chatRoomRedisRepository = chatRoomRedisRepository;
        this.memberRepository = memberRepository;
        this.friendRepository = friendRepository;
        this.chatRedisCacheService = chatRedisCacheService;
        this.friendService = friendService;
    }

    @Override
    public void enterChatRoom(String roomId, String sessionId, String nickname) {
        chatRoomRedisRepository.enterChatRoom(roomId, sessionId, nickname);
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
    public List<ChatRoomInfoResponseDto> getChatRoomList(long memberId) {

        Member member = memberRepository.findByMemberId(memberId);
        List<ChatRoom> chatRooms = chatRoomRepository.findAllByToMemberIdOrFromMemberId(member, member);

        List<ChatRoomInfoResponseDto> chatRoomList = new ArrayList<>();
        for (ChatRoom chatRoom:
             chatRooms) {

            //  chatRepository 최근 메세지 Redis에서 조회
            ChatMessage recentChatMessage = chatRedisCacheService.getRecentMessageByChatRoomId(chatRoom.getChatRoomId());

            if(recentChatMessage == null)
                continue;

            // memberRepository 상대방 닉네임, 아바타 이미지 조회
            Member other = (chatRoom.getToMemberId().getMemberId() != memberId) ? chatRoom.getToMemberId() : chatRoom.getFromMemberId();

            //  friendRepository 친구 여부 확인
            //  친구(1), 친구 대기 중(0), 친구 거절(-1)

            //  friendState
            //  1 true : 친구 추가 버튼 X
            //  0 false : 친구 추가 버튼 O
            int state = 0;

            Friend friendFromOther = friendRepository.findByToMember_MemberIdAndFromMember_MemberId(memberId, other.getMemberId());

            //  다른 사람한테 친구 신청 받은 기록 있음
            if(friendFromOther != null){
                int friendState = friendFromOther.getState();
                if(friendState == -1){ // 친구였다가 친구 끊겼으면 다시 신청 못 한다는 로직
                    state = 1; // 친구 추가 버튼 X
                }
                else if(friendState == 0){
                    //  내가 받아주기
                    state = 0;
                }else { // 이미 친구
                    state = 1;
                }
            }
            else{
                // 다른 사람한테 친구 신청 받은 기록 없음

                //  내가 다른 사람한테 친구 신청 보낸 기록 있음
                if(friendRepository.existsByToMember_MemberIdAndFromMember_MemberId(other.getMemberId(), memberId)){
                    state = 1;
                }
                else // 보낸 기록 없음 걍
                    state = 0;
            }

            chatRoomList.add(
                    ChatRoomInfoResponseDto.builder()
                            .roomId(chatRoom.getChatRoomId())
                            .chatOtherInfo(
                                    ChatOtherInfoResponseDto.builder()
                                            .memberId(other.getMemberId())
                                            .nickName(other.getNickname())
                                            .file(other.getFile())
                                            .friendState(state)
                                            .build())
                            .recentMessage(recentChatMessage.getMessage())
                            .recentMessageCreatedTime(recentChatMessage.getCreatedTime())
                            .build()
            );
        }
        //  최근 메세지 시간 기준 정렬
        Collections.sort(chatRoomList);
        return chatRoomList;
    }

    @Override
    public ChatRoomResponseDto getChatRoomInfo(long chatRoomId, long memberId) {
        Member member = memberRepository.findByMemberId(memberId);
        ChatRoom chatRoom = chatRoomRepository.findByChatRoomId(chatRoomId);
        Member other = (chatRoom.getToMemberId().getMemberId() != memberId) ? chatRoom.getToMemberId() : chatRoom.getFromMemberId();

        int state = 0;

        Friend friendFromOther = friendRepository.findByToMember_MemberIdAndFromMember_MemberId(memberId, other.getMemberId());

        //  다른 사람한테 친구 신청 받은 기록 있음
        if(friendFromOther != null){
            int friendState = friendFromOther.getState();
            if(friendState == -1){ // 친구였다가 친구 끊겼으면 다시 신청 못 한다는 로직
                state = 1; // 친구 추가 버튼 X
            }
            else if(friendState == 0){
                //  내가 받아주기
                state = 0;
            }else { // 이미 친구
                state = 1;
            }
        }
        else{
            // 다른 사람한테 친구 신청 받은 기록 없음

            //  내가 다른 사람한테 친구 신청 보낸 기록 있음
            if(friendRepository.existsByToMember_MemberIdAndFromMember_MemberId(other.getMemberId(), memberId)){
                state = 1;
            }
            else // 보낸 기록 없음 걍
                state = 0;
        }


        return ChatRoomResponseDto.builder()
                .chatOtherInfo(
                        ChatOtherInfoResponseDto.builder()
                                .memberId(other.getMemberId())
                                .nickName(other.getNickname())
                                .file(other.getFile())
                                .friendState(state)
                                .build())
                .build();
    }

    @Override
    public ChatOtherInfoResponseDto addChatMemeberToFriend(ChatMembersInfoRequestDto chatMembersInfo) throws RollbackException {
        long memberId = chatMembersInfo.getMemberId();
        long otherMemberId = chatMembersInfo.getChatOtherInfo().getMemberId();

        //  다른 사람이 나한테 친구 요청 보낸 기록 여부 확인
        Friend isFriendReqeustFromOther = friendRepository.findByToMember_MemberIdAndFromMember_MemberId(memberId, otherMemberId);

        //  다른 사람이 나한테 보낸 기록 없음
        if(isFriendReqeustFromOther == null){

            //  내가 다른 사람한테 친구 요청 보낸 기록 여부 확인
            Friend isFriendReqeustToOther = friendRepository.findByToMember_MemberIdAndFromMember_MemberId(otherMemberId, memberId);

            if(isFriendReqeustToOther == null){
                //  둘 다 없음
                friendService.requestFriend(FriendRequestDto.Write.builder().message("").toMemberId(otherMemberId).fromMemberId(memberId).build());
                chatMembersInfo.getChatOtherInfo().setFriendState(1);
            }
        }
        else if(isFriendReqeustFromOther.getState() == 0){
            //  다른 사람이 나한테 보낸 기록 있음
            friendService.friendAccept(isFriendReqeustFromOther.getFriendId());
            chatMembersInfo.getChatOtherInfo().setFriendState(1);
        }
        return chatMembersInfo.getChatOtherInfo();
    }

    @Override
    public Long getChatRoomIdInFriendList(long memberId, long friendMemberId) {

        ChatRoom chatRoomFromFriend = chatRoomRepository.findByToMemberId_MemberIdAndFromMemberId_MemberId(memberId, friendMemberId);
        ChatRoom chatRoomFromMe = chatRoomRepository.findByToMemberId_MemberIdAndFromMemberId_MemberId(friendMemberId, memberId);

        if(chatRoomFromFriend != null || chatRoomFromMe != null){
            return chatRoomFromFriend != null ? chatRoomFromFriend.getChatRoomId() : chatRoomFromMe.getChatRoomId();
        }else{
            ChatRoom createdRoom = chatRoomRepository.save(ChatRoom.builder()
                    .toMemberId(memberRepository.findByMemberId(memberId))
                    .fromMemberId(memberRepository.findByMemberId(friendMemberId))
                    .build());
            return createdRoom.getChatRoomId();
        }

    }


}

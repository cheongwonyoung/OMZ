package com.ssafy.omz.service;

import com.ssafy.omz.dto.resp.ChatRoomDto;
import com.ssafy.omz.entity.ChatRoom;
import com.ssafy.omz.repository.ChatRoomRedisRepository;
import com.ssafy.omz.repository.ChatRoomRepository;
import com.ssafy.omz.repository.FriendRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ChatRoomServiceImpl implements ChatRoomService{

    private ChatRoomRedisRepository chatRoomRedisRepository;

    private ChatRoomRepository chatRoomRepository;

//    private FriendRepository friendRepository;

    @Autowired
    public ChatRoomServiceImpl(ChatRoomRepository chatRoomRepository, ChatRoomRedisRepository chatRoomRedisRepository) {
        this.chatRoomRepository = chatRoomRepository;
        this.chatRoomRedisRepository = chatRoomRedisRepository;
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
        List<ChatRoom> chatRooms = chatRoomRepository.findByFromMemberIdOrToMemberId(memberId, memberId);
        List<ChatRoomDto> chatRoomList = new ArrayList<>();
        for (ChatRoom chatRoom:
             chatRooms) {
            // memberRepository 상대방 닉네임, 아바타 이미지 조회
            //  friendRepository 친구 여부 확인
            //  chatRepository 제일 최근 메세지 하나 조회
            chatRoomList.add(
                    ChatRoomDto.builder()
                            .roomId(chatRoom.getChatRoomId())
//                            .nickName()
//                            .file()
//                            .recentMessage()
//                            .recentMessageCreatedTime()
//                            .isChecked()
//                            .isFriend()
                            .build()
            );
        }
        return chatRoomList;
    }
}

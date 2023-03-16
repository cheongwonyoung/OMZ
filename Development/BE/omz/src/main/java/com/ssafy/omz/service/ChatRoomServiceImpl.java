package com.ssafy.omz.service;

import com.ssafy.omz.repository.ChatRoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ChatRoomServiceImpl implements ChatRoomService{

    private ChatRoomRepository chatRoomRepository;

    @Autowired
    public ChatRoomServiceImpl(ChatRoomRepository chatRoomRepository) {
        this.chatRoomRepository = chatRoomRepository;
    }

    @Override
    public void enterChatRoom(String roomId, String sessionId, String username) {
        chatRoomRepository.enterChatRoom(roomId,sessionId,username);
    }

    @Override
    public String disconnectWebsocket(String sessionId) {
        return chatRoomRepository.disconnectWebsocket(sessionId);
    }

    @Override
    public String leaveChatRoom(String sessionId) {
        return chatRoomRepository.leaveChatRoom(sessionId);
    }
}

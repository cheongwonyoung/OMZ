package com.ssafy.omz.service;

import com.ssafy.omz.dto.resp.ChatRoomDto;

import java.util.List;

public interface ChatRoomService {

    // String username -> nickName or memberId
    void enterChatRoom(String roomId, String sessionId,String username);
    String disconnectWebsocket(String sessionId);
    String leaveChatRoom(String sessionId); // unsubscribe

    List<ChatRoomDto> getChatRoomList(long memberId);
}

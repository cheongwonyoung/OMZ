package com.ssafy.omz.service;

public interface ChatRoomService {

    // String username -> nickName or memberId
    void enterChatRoom(String roomId, String sessionId,String username);
    String disconnectWebsocket(String sessionId);
    String leaveChatRoom(String sessionId);
}

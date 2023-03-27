package com.ssafy.omz.service;

import com.ssafy.omz.dto.resp.ChatRoomInfoResponseDto;
import com.ssafy.omz.dto.resp.ChatRoomResponseDto;

import java.util.List;

public interface ChatRoomService {

    // String username -> nickName or memberId
    void enterChatRoom(String roomId, String sessionId,String nickname);

    String disconnectWebsocket(String sessionId);
    String leaveChatRoom(String sessionId); // unsubscribe

    List<ChatRoomInfoResponseDto> getChatRoomList(long memberId);

    ChatRoomResponseDto getChatRoomInfo(long chatRoomId, long memberId);
}

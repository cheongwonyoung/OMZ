package com.ssafy.omz.service;

import com.ssafy.omz.dto.req.ChatRequestDto;
import com.ssafy.omz.dto.resp.ChatResponseDto;

import javax.transaction.RollbackException;
import java.util.List;

public interface ChatRoomService {

    void enterChatRoom(String roomId, String sessionId,String nickname);

    String disconnectWebsocket(String sessionId);
    String leaveChatRoom(String sessionId); // unsubscribe

    List<ChatResponseDto.ChatRoomInfo> getChatRoomList(long memberId);

    ChatResponseDto.ChatRoomChatData getChatRoomInfo(long chatRoomId, long memberId);

    ChatResponseDto.ChatOtherInfo addChatMemeberToFriend(ChatRequestDto.ChatMembersInfo chatMembersInfo) throws RollbackException;

    Long getChatRoomIdInFriendList(long memberId, long friendMemberId);
}

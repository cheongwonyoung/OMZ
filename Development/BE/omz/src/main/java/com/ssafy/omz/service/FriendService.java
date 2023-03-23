package com.ssafy.omz.service;

import com.ssafy.omz.dto.req.FriendRequestDto;
import com.ssafy.omz.dto.resp.FriendResponseDto;
import com.ssafy.omz.dto.resp.MemberResponseDto;
import org.springframework.stereotype.Service;

import javax.transaction.RollbackException;
import java.util.List;

@Service
public interface FriendService {
    void requestFriend(FriendRequestDto.Write friend) throws RollbackException;

    List<MemberResponseDto.FriendSearch> getSearchMemberList(Long memberId, String word);

    List<MemberResponseDto.FriendListInfo> getFriendList(Long memberId);

    List<FriendResponseDto.WaitingListInfo> getFriendWaitingList(Long memberId);

    void friendAccept(Long friendId) throws RollbackException;

    void friendReject(Long friendId) throws RollbackException;

    void friendCut(Long toMemberId, Long fromMemberId) throws RollbackException;
}

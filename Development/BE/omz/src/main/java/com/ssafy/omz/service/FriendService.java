package com.ssafy.omz.service;

import com.ssafy.omz.dto.req.FriendRequestDto;
import com.ssafy.omz.dto.resp.MemberResponseDto;
import org.springframework.stereotype.Service;

import javax.transaction.RollbackException;
import java.util.List;

@Service
public interface FriendService {
    void requestFriend(FriendRequestDto.Write friend) throws RollbackException;
//    Boolean requestFriendPossibleCheck(Long toMemberId, Long fromMemberId);
    List<MemberResponseDto.FriendSearch> getSearchMemberList(Long memberId, String word);
}

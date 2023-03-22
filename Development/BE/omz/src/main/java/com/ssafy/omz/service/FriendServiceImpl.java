package com.ssafy.omz.service;

import com.ssafy.omz.dto.req.BoardRequestDto;
import com.ssafy.omz.dto.req.FriendRequestDto;
import com.ssafy.omz.entity.Board;
import com.ssafy.omz.entity.Friend;
import com.ssafy.omz.repository.FriendRepository;
import com.ssafy.omz.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.transaction.RollbackException;

@RequiredArgsConstructor
@Service("FriendService")
public class FriendServiceImpl implements FriendService {

    private final FriendRepository friendRepository;
    private final MemberRepository memberRepository;

    @Override
    @Transactional
    public void requestFriend(FriendRequestDto.Write friend) throws RollbackException {
        FriendRequestDto.Info.fromEntity(friendRepository.save(Friend.builder()
                .message(friend.getMessage())
                .toMember(memberRepository.findByMemberId(friend.getToMemberId()))
                .fromMember(memberRepository.findByMemberId(friend.getFromMemberId()))
                .build()));
    }
}

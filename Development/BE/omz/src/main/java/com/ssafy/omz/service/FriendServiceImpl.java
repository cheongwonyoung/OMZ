package com.ssafy.omz.service;

import com.ssafy.omz.dto.req.BoardRequestDto;
import com.ssafy.omz.dto.req.FriendRequestDto;
import com.ssafy.omz.dto.resp.MemberResponseDto;
import com.ssafy.omz.entity.Board;
import com.ssafy.omz.entity.Friend;
import com.ssafy.omz.entity.Member;
import com.ssafy.omz.repository.FriendRepository;
import com.ssafy.omz.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.transaction.RollbackException;
import java.util.List;
import java.util.stream.Collectors;

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

//    @Override
//    public Boolean requestFriendPossibleCheck(Long toMemberId, Long fromMemberId) {
//        return !friendRepository.existsByToMember_MemberIdAndFromMember_MemberId(toMemberId, fromMemberId)
//                || !friendRepository.existsByToMember_MemberIdAndFromMember_MemberId(fromMemberId, toMemberId);
//    }

    @Override
    public List<MemberResponseDto.FriendSearch> getSearchMemberList(Long memberId, String word) {
        return memberRepository.findByNicknameContaining(word)
                .map(member -> {
                    MemberResponseDto.FriendSearch res = MemberResponseDto.FriendSearch.fromEntity(member);
                    res.setRequestPossble(!friendRepository.existsByToMember_MemberIdAndFromMember_MemberId(memberId, res.getMemberId())
                            || !friendRepository.existsByToMember_MemberIdAndFromMember_MemberId(res.getMemberId(), memberId));

                    return res;
                }).stream().collect(Collectors.toList());
    }

    @Override
    public List<MemberResponseDto.FriendListInfo> getFriendList(Long memberId) {
        return friendRepository.findByFromMember_MemberIdAndState(memberId, 1)
                .map(friend -> {
                    Member member = memberRepository.findByMemberId(friend.getToMember().getMemberId());
                    MemberResponseDto.FriendListInfo res = MemberResponseDto.FriendListInfo.fromEntity(member);
                    return res;
                }).stream().collect(Collectors.toList());
    }
}

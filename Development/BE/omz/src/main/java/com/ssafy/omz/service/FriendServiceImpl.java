package com.ssafy.omz.service;

import com.ssafy.omz.dto.req.BoardRequestDto;
import com.ssafy.omz.dto.req.FriendRequestDto;
import com.ssafy.omz.dto.resp.BoardResponseDto;
import com.ssafy.omz.dto.resp.FriendResponseDto;
import com.ssafy.omz.dto.resp.MemberResponseDto;
import com.ssafy.omz.entity.Board;
import com.ssafy.omz.entity.BoardLikes;
import com.ssafy.omz.entity.Friend;
import com.ssafy.omz.entity.Member;
import com.ssafy.omz.repository.FriendRepository;
import com.ssafy.omz.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.transaction.RollbackException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service("FriendService")
@Slf4j
public class FriendServiceImpl implements FriendService {

    private final FriendRepository friendRepository;
    private final MemberRepository memberRepository;

    @Override
    @Transactional
    public void requestFriend(FriendRequestDto.Write friend) throws RollbackException {
        if (!friendRepository.existsByToMember_MemberIdAndFromMember_MemberId(friend.getToMemberId(), friend.getFromMemberId()) &&
                !friendRepository.existsByToMember_MemberIdAndFromMember_MemberId(friend.getFromMemberId(), friend.getToMemberId()))
            FriendRequestDto.Info.fromEntity(friendRepository.save(Friend.builder()
                    .message(friend.getMessage())
                    .toMember(memberRepository.findByMemberId(friend.getToMemberId()))
                    .fromMember(memberRepository.findByMemberId(friend.getFromMemberId()))
                    .build()));
    }

    @Override
    public List<MemberResponseDto.FriendSearch> getSearchMemberList(Long memberId, String word) {
        List<MemberResponseDto.FriendSearch> res = new ArrayList<>();

        List<Member> memberList = memberRepository.findByNicknameContainingAndMemberIdIsNot(word, memberId);
        for (Member m : memberList) {
            MemberResponseDto.FriendSearch search = MemberResponseDto.FriendSearch.fromEntity(m);
            search.setRequestPossible(!friendRepository.existsByToMember_MemberIdAndFromMember_MemberId(memberId, search.getMemberId())
                    || !friendRepository.existsByToMember_MemberIdAndFromMember_MemberId(search.getMemberId(), memberId));
            res.add(search);
        }

        return res;
    }

    @Override
    public List<MemberResponseDto.FriendListInfo> getFriendList(Long memberId) {
        List<Friend> friends = friendRepository.findByFromMember_MemberIdAndState(memberId, 1);
        List<MemberResponseDto.FriendListInfo> res = new ArrayList<>();
        for (Friend friend : friends) {
            Member member = memberRepository.findByMemberId(friend.getToMember().getMemberId());
            res.add(MemberResponseDto.FriendListInfo.fromEntity(member));
        }
        return res;
    }

    @Override
    public List<FriendResponseDto.WaitingListInfo> getFriendWaitingList(Long memberId) {
        return friendRepository.findByToMember_MemberIdAndState(memberId, 0).stream()
                .map(FriendResponseDto.WaitingListInfo::fromEntity).collect(Collectors.toList());
    }

    @Override
    @Transactional
    public void friendAccept(Long friendId) throws RollbackException {
        Friend friend = friendRepository.findById(friendId).get();
        int state = friendRepository.findByToMember_MemberIdAndFromMember_MemberId(
                friend.getToMember().getMemberId(), friend.getFromMember().getMemberId()).getState();
        if (state == 0) {
            FriendResponseDto.Info info = FriendResponseDto.Info.fromEntity(
                    friendRepository.findById(friendId).get());
            FriendResponseDto.Info.fromEntity(friendRepository.save(
                    friendRepository.findById(info.getFriendId()).get()
                            .updateState(1)));
            FriendResponseDto.Info.fromEntity(friendRepository.save(
                    Friend.builder()
                            .message(info.getMessage())
                            .toMember(memberRepository.findByMemberId(info.getFromMember().getMemberId()))
                            .fromMember(memberRepository.findByMemberId(info.getToMember().getMemberId()))
                            .state(1)
                            .build()));
        }
    }

    @Override
    @Transactional
    public void friendReject(Long friendId) throws RollbackException {
        if (friendRepository.findById(friendId).get() != null)
            friendRepository.deleteById(friendId);
    }

    @Override
    @Transactional
    public void friendCut(Long toMemberId, Long fromMemberId) throws RollbackException {
        FriendResponseDto.Info.fromEntity(friendRepository.save(
                friendRepository.findByToMember_MemberIdAndFromMember_MemberId(toMemberId, fromMemberId)
                        .updateState(-1)));
        FriendResponseDto.Info.fromEntity(friendRepository.save(
                friendRepository.findByToMember_MemberIdAndFromMember_MemberId(fromMemberId, toMemberId)
                        .updateState(-1)));
    }
}
package com.ssafy.omz.repository;
import com.ssafy.omz.entity.Friend;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

public interface FriendRepository extends JpaRepository<Friend,Long>{
    Boolean existsByToMember_MemberIdAndFromMember_MemberId(Long toMemberId, Long fromMemberId);

    List<Friend> findByFromMember_MemberIdAndState(Long memberId, int state);

    List<Friend> findByToMember_MemberIdAndState(Long memberId, int state);

    Friend findByToMember_MemberIdAndFromMember_MemberId(Long toMemberId, Long fromMemberId);
}

package com.ssafy.omz.repository;

import com.ssafy.omz.entity.ChatRoom;
import com.ssafy.omz.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ChatRoomRepository extends JpaRepository<ChatRoom, Long> {

    List<ChatRoom> findAllByToMemberIdOrFromMemberId(Member toMember, Member fromMember);

    ChatRoom findByToMemberId_MemberIdAndFromMemberId_MemberId(Long toMemberId, Long fromMemberId);

    ChatRoom findByChatRoomId(Long chatRoomId);
}

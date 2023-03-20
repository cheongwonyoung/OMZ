package com.ssafy.omz.repository;

import com.ssafy.omz.entity.ChatRoom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ChatRoomRepository extends JpaRepository<ChatRoom, Long> {
    List<ChatRoom> findByFromMemberIdOrToMemberId(long fromMemberId, long ToMemberId);
}

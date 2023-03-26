package com.ssafy.omz.repository;

import com.ssafy.omz.entity.MiniRoom;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MiniRoomRepository extends JpaRepository<MiniRoom,Long> {

    MiniRoom findByMember_MemberId(long memberId);
}

package com.ssafy.omz.repository;

import com.ssafy.omz.entity.MiniRoom;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MiniRoomRepository extends JpaRepository<MiniRoom,Long> {

    MiniRoom findByMiniRoomId(long miniRoomId);
<<<<<<< HEAD
=======

>>>>>>> d6ab4e8ef216a4aadd66501695cee47a7ccba017
    MiniRoom findByMember_MemberId(long memberId);
}

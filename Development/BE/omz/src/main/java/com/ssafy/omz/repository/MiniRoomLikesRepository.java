package com.ssafy.omz.repository;

import com.ssafy.omz.entity.Member;
import com.ssafy.omz.entity.MiniRoom;
import com.ssafy.omz.entity.MiniRoomLikes;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MiniRoomLikesRepository extends JpaRepository<MiniRoomLikes,Long> {


    MiniRoomLikes findByMiniRoomAndMember(MiniRoom miniRoom, Member member);

}

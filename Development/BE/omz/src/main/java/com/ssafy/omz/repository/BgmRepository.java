package com.ssafy.omz.repository;

import com.ssafy.omz.entity.Bgm;
import com.ssafy.omz.entity.MiniRoom;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BgmRepository extends JpaRepository<Bgm,Long> {

    Bgm findByMiniRoom_MiniRoomId(long miniRoomId);

}

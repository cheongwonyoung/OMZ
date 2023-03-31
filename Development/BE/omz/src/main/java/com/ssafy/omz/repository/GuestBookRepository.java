package com.ssafy.omz.repository;

import com.ssafy.omz.dto.resp.GuestBookResponseDto;
import com.ssafy.omz.entity.GuestBook;
import com.ssafy.omz.entity.MiniRoom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface GuestBookRepository extends JpaRepository<GuestBook,Long> {


    List<GuestBook> findAllByMiniRoom(MiniRoom miniRoom);
//    List<GuestBook> findAllByMiniRoomId(long mini_room_id);

    void deleteByGuestBookId(long guestBookId);

}

package com.ssafy.omz.repository;

import com.ssafy.omz.entity.Chat;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;

public interface ChatRepository extends JpaRepository<Chat,Long> {
//    Slice<Chat> findAllByCreatedTimeBeforeAndChatRoomIdOrderByCreatedTimeDesc(String cursorCreatedTime, Long chatRoomId, Pageable pageable);

    List<Chat> findAllByCreatedTimeAfterOrderByCreatedTimeDesc(String cursorCreatedTime);

}

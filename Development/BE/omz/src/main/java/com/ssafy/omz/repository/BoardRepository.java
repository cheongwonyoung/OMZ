package com.ssafy.omz.repository;

import com.ssafy.omz.entity.Board;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardRepository extends JpaRepository<Board,Long> {
    Page<Board> findAllByIsDeletedIsFalse(Pageable pageable);
    Page<Board> findAllByIsDeletedIsFalseAndContentContaining(String word, Pageable pageable);
    Page<Board> findAllByIsDeletedIsFalseAndMember_NicknameContaining(String word, Pageable pageable);
    Board findByBoardId(Long boardId);
}

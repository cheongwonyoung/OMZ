package com.ssafy.omz.repository;

import com.ssafy.omz.entity.Board;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface BoardRepository extends JpaRepository<Board,Long> {
    Page<Board> findAllByIsDeletedIsFalse(Pageable pageable);
    Page<Board> findAllByIsDeletedIsFalseAndMember_MemberId(Long memberId, Pageable pageable);
    List<Board> findAllByIsDeletedIsFalseAndContentContaining(String word);
    List<Board> findAllByIsDeletedIsFalseAndMember_NicknameContaining(String word);
    Board findByIsDeletedIsFalseAndBoardId(Long boardId);
    Board findByBoardId(Long boardId);
}

package com.ssafy.omz.repository;

import com.ssafy.omz.dto.resp.BoardLikesDto;
import com.ssafy.omz.entity.BoardLikes;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BoardLikesRepository extends JpaRepository<BoardLikes,Long> {

    Boolean existsByMember_MemberIdAndBoard_BoardId(Long memberId, Long boardId);

    Page<BoardLikes> findAllByMember_MemberId(Long memberId, Pageable pageable);

    BoardLikes findByMember_MemberIdAndBoard_BoardId(Long memberId, Long boardId);
}

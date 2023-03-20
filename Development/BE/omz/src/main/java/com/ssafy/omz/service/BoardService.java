package com.ssafy.omz.service;

import com.ssafy.omz.dto.resp.BoardDto;
import com.ssafy.omz.entity.Board;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public interface BoardService {
    Page<BoardDto.Info> getBoardList(Long memberId, Pageable pageable);

    Page<BoardDto.Info> getLikeList(Long memberId, Pageable pageable);

    Page<BoardDto.Info> searchBoardByContent(Long memberId, String word, Pageable pageable);

    Page<BoardDto.Info> searchBoardByNickname(Long memberId, String word, Pageable pageable);

    void memberLikeBoard(Long memberId, Long boardId);

    void memberCancleLikeBoard(Long memberId, Long boardId);
}

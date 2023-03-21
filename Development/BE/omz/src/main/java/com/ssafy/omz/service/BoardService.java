package com.ssafy.omz.service;

import com.ssafy.omz.dto.req.BoardRequestDto;
import com.ssafy.omz.dto.resp.BoardResponseDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.transaction.RollbackException;

@Service
public interface BoardService {
    Page<BoardResponseDto.Info> getBoardList(Long memberId, Pageable pageable);

    Page<BoardResponseDto.Info> searchBoardByContent(Long memberId, String word, Pageable pageable);

    Page<BoardResponseDto.Info> searchBoardByNickname(Long memberId, String word, Pageable pageable);

    BoardResponseDto.Detail getBoardDetail(Long memberId, Long boardId);

    void memberLikeBoard(Long memberId, Long boardId);

    void memberCancleLikeBoard(Long memberId, Long boardId);

    Page<BoardResponseDto.Info> getLikeList(Long memberId, Pageable pageable);

    void writeBoard(BoardRequestDto.Write board) throws RollbackException;

    void updateBoard(Long boardId, BoardRequestDto.Write board) throws RollbackException;

    void deleteBoard(Long boardId) throws RollbackException;
}

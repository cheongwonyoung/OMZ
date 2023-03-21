package com.ssafy.omz.service;

import com.ssafy.omz.dto.req.BoardRequestDto;
import com.ssafy.omz.dto.resp.BoardResponseDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.transaction.RollbackException;
import java.util.List;

@Service
public interface BoardService {
    Page<BoardResponseDto.Info> getBoardList(Long memberId, Pageable pageable);

    List<BoardResponseDto.Info> searchBoardByContent(Long memberId, String word);

    List<BoardResponseDto.Info> searchBoardByNickname(Long memberId, String word);

    BoardResponseDto.Detail getBoardDetail(Long memberId, Long boardId);

    void memberLikeBoard(Long memberId, Long boardId);

    void memberCancleLikeBoard(Long memberId, Long boardId);

    List<BoardResponseDto.Info> getLikeList(Long memberId);

    void writeBoard(BoardRequestDto.Write board) throws RollbackException;

    void updateBoard(Long boardId, BoardRequestDto.Write board) throws RollbackException;

    void deleteBoard(Long boardId) throws RollbackException;

    Page<BoardResponseDto.Info> getMemberBoardList(Long memberId, Pageable pageable);
}

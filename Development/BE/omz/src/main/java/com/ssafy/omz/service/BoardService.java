package com.ssafy.omz.service;

import com.ssafy.omz.dto.req.BoardRequestDto;
import com.ssafy.omz.dto.resp.BoardResponseDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.RollbackException;
import java.io.IOException;
import java.util.List;
import java.util.Map;

@Service
public interface BoardService {
    List<BoardResponseDto.Info> getBoardList(Long memberId, Pageable pageable);

    List<BoardResponseDto.Info> searchBoardByContent(Long memberId, String word);

    List<BoardResponseDto.Info> searchBoardByNickname(Long memberId, String word);

    BoardResponseDto.Detail getBoardDetail(Long memberId, Long boardId);

    void memberLikeBoard(Long memberId, Long boardId);

    void memberCancleLikeBoard(Long memberId, Long boardId);

    List<BoardResponseDto.Info> getLikeList(Long memberId);

    void writeBoard(MultipartFile file, BoardRequestDto.Write board) throws RollbackException, IOException;

    void updateBoard(Long boardId, MultipartFile file, BoardRequestDto.Write writeInfo) throws RollbackException, IOException;

    void deleteBoard(Long boardId) throws RollbackException;

    Map<String, Object> getMemberBoardList(Long memberId, Pageable pageable);
}

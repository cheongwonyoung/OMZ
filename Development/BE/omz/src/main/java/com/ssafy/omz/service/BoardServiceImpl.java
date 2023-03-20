package com.ssafy.omz.service;

import com.ssafy.omz.dto.resp.BoardDto;
import com.ssafy.omz.dto.resp.BoardLikesDto;
import com.ssafy.omz.entity.BoardLikes;
import com.ssafy.omz.repository.BoardLikesRepository;
import com.ssafy.omz.repository.BoardRepository;
import com.ssafy.omz.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@RequiredArgsConstructor
@Service("BoardService")
public class BoardServiceImpl implements BoardService {
    private final BoardRepository boardRepository;
    private final BoardLikesRepository boardLikesRepository;
    private final MemberRepository memberRepository;

    @Override
    public Page<BoardDto.Info> getBoardList(Long memberId, Pageable pageable) {
        return boardRepository.findAllByIsDeletedIsFalse(pageable)
                .map(board -> {
                    BoardDto.Info res = BoardDto.Info.fromEntity(board);
                    res.setILikeBoard(boardLikesRepository.existsByMember_MemberIdAndBoard_BoardId(memberId, board.getBoardId()));
                    return res;
                });
    }

    @Override
    public Page<BoardDto.Info> searchBoardByContent(Long memberId, String word, Pageable pageable) {
        return boardRepository.findAllByIsDeletedIsFalseAndContentContaining(word, pageable)
                .map(board -> {
                    BoardDto.Info res = BoardDto.Info.fromEntity(board);
                    res.setILikeBoard(boardLikesRepository.existsByMember_MemberIdAndBoard_BoardId(memberId, board.getBoardId()));
                    return res;
                });
    }

    @Override
    public Page<BoardDto.Info> searchBoardByNickname(Long memberId, String word, Pageable pageable) {
        return boardRepository.findAllByIsDeletedIsFalseAndMember_NicknameContaining(word, pageable)
                .map(board -> {
                    BoardDto.Info res = BoardDto.Info.fromEntity(board);
                    res.setILikeBoard(boardLikesRepository.existsByMember_MemberIdAndBoard_BoardId(memberId, board.getBoardId()));
                    return res;
                });
    }

    @Override
    public void memberLikeBoard(Long memberId, Long boardId) {
        log.info(memberId + " " + boardId);
        boardLikesRepository.save(BoardLikes.builder()
                .member(memberRepository.findByMemberId(memberId))
                .board(boardRepository.findByBoardId(boardId))
                .build());
    }

    @Override
    public void memberCancleLikeBoard(Long memberId, Long boardId) {
        boardLikesRepository.deleteById(boardLikesRepository.findByMember_MemberIdAndBoard_BoardId(memberId, boardId).getBoardLikesId());
    }

    @Override
    public Page<BoardDto.Info> getLikeList(Long memberId, Pageable pageable) {
        return boardLikesRepository.findAllByMember_MemberId(memberId, pageable)
                .map(likeInfo -> {
                    BoardDto.Info res = BoardDto.Info.fromEntity(boardRepository.findByBoardId(likeInfo.getBoard().getBoardId()));
                    res.setILikeBoard(true);
                    return res;
                });
    }
}

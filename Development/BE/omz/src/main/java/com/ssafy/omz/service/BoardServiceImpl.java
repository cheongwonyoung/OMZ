package com.ssafy.omz.service;

import com.ssafy.omz.dto.req.BoardRequestDto;
import com.ssafy.omz.dto.resp.BoardResponseDto;
import com.ssafy.omz.entity.Board;
import com.ssafy.omz.entity.BoardLikes;
import com.ssafy.omz.repository.BoardLikesRepository;
import com.ssafy.omz.repository.BoardRepository;
import com.ssafy.omz.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.transaction.RollbackException;
import java.util.stream.Collectors;

@Slf4j
@RequiredArgsConstructor
@Service("BoardService")
public class BoardServiceImpl implements BoardService {
    private final BoardRepository boardRepository;
    private final BoardLikesRepository boardLikesRepository;
    private final MemberRepository memberRepository;

    @Override
    public Page<BoardResponseDto.Info> getBoardList(Long memberId, Pageable pageable) {
        return boardRepository.findAllByIsDeletedIsFalse(pageable)
                .map(board -> {
                    BoardResponseDto.Info res = BoardResponseDto.Info.fromEntity(board);
                    res.setILikeBoard(boardLikesRepository.existsByMember_MemberIdAndBoard_BoardId(memberId, board.getBoardId()));
                    return res;
                });
    }

    @Override
    public Page<BoardResponseDto.Info> searchBoardByContent(Long memberId, String word, Pageable pageable) {
        return boardRepository.findAllByIsDeletedIsFalseAndContentContaining(word, pageable)
                .map(board -> {
                    BoardResponseDto.Info res = BoardResponseDto.Info.fromEntity(board);
                    res.setILikeBoard(boardLikesRepository.existsByMember_MemberIdAndBoard_BoardId(memberId, board.getBoardId()));
                    return res;
                });
    }

    @Override
    public Page<BoardResponseDto.Info> searchBoardByNickname(Long memberId, String word, Pageable pageable) {
        return boardRepository.findAllByIsDeletedIsFalseAndMember_NicknameContaining(word, pageable)
                .map(board -> {
                    BoardResponseDto.Info res = BoardResponseDto.Info.fromEntity(board);
                    res.setILikeBoard(boardLikesRepository.existsByMember_MemberIdAndBoard_BoardId(memberId, board.getBoardId()));
                    return res;
                });
    }

    @Override
    public BoardResponseDto.Detail getBoardDetail(Long memberId, Long boardId) {
        Board board = boardRepository.findByBoardId(boardId);
        BoardResponseDto.Detail res = BoardResponseDto.Detail.fromEntity(board);
        res.setILikeBoard(boardLikesRepository.existsByMember_MemberIdAndBoard_BoardId(memberId, boardId));
        res.setReplyList(
                BoardResponseDto.Detail.fromEntity(board).getReplyList().stream()
                        .filter(reply -> !reply.isDeleted())
                        .collect(Collectors.toList()));
        return  res;
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
    public Page<BoardResponseDto.Info> getLikeList(Long memberId, Pageable pageable) {
        return boardLikesRepository.findAllByMember_MemberId(memberId, pageable)
                .map(likeInfo -> {
                    BoardResponseDto.Info res = BoardResponseDto.Info.fromEntity(boardRepository.findByBoardId(likeInfo.getBoard().getBoardId()));
                    res.setILikeBoard(true);
                    return res;
                });
    }
    @Override
    @Transactional
    public void writeBoard(BoardRequestDto.Write board) throws RollbackException {
        BoardResponseDto.Info.fromEntity(boardRepository.save(Board.builder()
                .content(board.getContent())
                .file(board.getFile())
                .member(memberRepository.findByMemberId(board.getMemberId()))
                .build()));
    }

    @Override
    @Transactional
    public void updateBoard(Long boardId, BoardRequestDto.Write board) throws RollbackException {
        BoardResponseDto.Info.fromEntity(boardRepository.save(
                boardRepository.findById(boardId).get()
                        .updateContentAndFile(board.getContent(), board.getFile())));
    }

    @Override
    @Transactional
    public void deleteBoard(Long boardId) throws RollbackException {
        BoardResponseDto.Info.fromEntity(boardRepository.save(
                boardRepository.findById(boardId).get().updateIsDeleted()));
    }

}

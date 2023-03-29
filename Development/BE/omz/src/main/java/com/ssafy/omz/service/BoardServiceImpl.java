package com.ssafy.omz.service;

import com.google.cloud.storage.BlobInfo;
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
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import javax.transaction.RollbackException;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Slf4j
@RequiredArgsConstructor
@Service("BoardService")
public class BoardServiceImpl implements BoardService {
    private final BoardRepository boardRepository;
    private final BoardLikesRepository boardLikesRepository;
    private final MemberRepository memberRepository;
    private final GCSService gcsService;

    @Override
    public Page<BoardResponseDto.Info> getBoardList(Long memberId, Pageable pageable) {
        return boardRepository.findAllByIsDeletedIsFalse(pageable)
                .map(board -> {
                    BoardResponseDto.Info res = BoardResponseDto.Info.fromEntity(board);
                    res.setILikeBoard(boardLikesRepository.existsByMember_MemberIdAndBoard_BoardId(memberId, board.getBoardId()));
                    log.info("" + res.getReplyCnt());
                    return res;
                });
    }

    @Override
    public List<BoardResponseDto.Info> searchBoardByContent(Long memberId, String word) {
        List<Board> boards = boardRepository.findAllByIsDeletedIsFalseAndContentContaining(word);
        List<BoardResponseDto.Info> res = new ArrayList<>();
        for (Board board : boards) {
            BoardResponseDto.Info respDto = BoardResponseDto.Info.fromEntity(board);
            respDto.setILikeBoard(boardLikesRepository.existsByMember_MemberIdAndBoard_BoardId(memberId, board.getBoardId()));

            res.add(respDto);
        }
        return res;
    }

    @Override
    public List<BoardResponseDto.Info> searchBoardByNickname(Long memberId, String word) {
        List<Board> boards = boardRepository.findAllByIsDeletedIsFalseAndMember_NicknameContaining(word);
        List<BoardResponseDto.Info> res = new ArrayList<>();
        for (Board board : boards) {
            BoardResponseDto.Info respDto = BoardResponseDto.Info.fromEntity(board);
            respDto.setILikeBoard(boardLikesRepository.existsByMember_MemberIdAndBoard_BoardId(memberId, board.getBoardId()));

            res.add(respDto);
        }
        return res;
    }

    @Override
    public BoardResponseDto.Detail getBoardDetail(Long memberId, Long boardId) {
        Board board = boardRepository.findByBoardId(boardId);
        BoardResponseDto.Detail res = BoardResponseDto.Detail.fromEntity(board);
        res.setILikeBoard(boardLikesRepository.existsByMember_MemberIdAndBoard_BoardId(memberId, boardId));
        res.setReplyCnt(res.getReplies().size());
        return res;
    }

    @Override
    public void memberLikeBoard(Long memberId, Long boardId) {
        if(!boardLikesRepository.existsByMember_MemberIdAndBoard_BoardId(memberId, boardId)){
            boardLikesRepository.save(BoardLikes.builder()
                    .member(memberRepository.findByMemberId(memberId))
                    .board(boardRepository.findByBoardId(boardId))
                    .build());
        }
    }

    @Override
    public void memberCancleLikeBoard(Long memberId, Long boardId) {
        if(boardLikesRepository.existsByMember_MemberIdAndBoard_BoardId(memberId, boardId)){
            boardLikesRepository.deleteById(boardLikesRepository
                    .findByMember_MemberIdAndBoard_BoardId(memberId, boardId).getBoardLikesId());
        }
    }

    @Override
    public List<BoardResponseDto.Info> getLikeList(Long memberId) {
        List<BoardLikes> likeInfo = boardLikesRepository.findAllByMember_MemberId(memberId);
        List<BoardResponseDto.Info> res = new ArrayList<>();
        for (BoardLikes info : likeInfo) {
            Board board = boardRepository.findByIsDeletedIsFalseAndBoardId(info.getBoard().getBoardId());
            if (board != null) {
                BoardResponseDto.Info respDto = BoardResponseDto.Info.fromEntity(board);
                respDto.setILikeBoard(true);
                res.add(respDto);
            }
        }
        return res;
    }

    @Override
    @Transactional
    public void writeBoard(MultipartFile file, BoardRequestDto.Write writeInfo) throws RollbackException, IOException {
        Long boardId = BoardRequestDto.Info.fromEntity(boardRepository.save(Board.builder()
                        .content(writeInfo.getContent())
                        .member(memberRepository.findByMemberId(writeInfo.getMemberId()))
                        .build())).getBoardId();
        Board board = boardRepository.findByBoardId(boardId);
        if (file != null)
            gcsService.uploadBoardImage(file, board);
    }

    @Override
    @Transactional
    public void updateBoard(Long boardId, MultipartFile file, BoardRequestDto.Write writeInfo) throws RollbackException, IOException {
        BoardRequestDto.Info.fromEntity(boardRepository.save(
                boardRepository.findById(boardId).get()
                        .updateContent(writeInfo.getContent())));

        Board board = boardRepository.findByBoardId(boardId);

        if (file != null)
            gcsService.uploadBoardImage(file, board);
    }

    @Override
    @Transactional
    public void deleteBoard(Long boardId) throws RollbackException {
        BoardRequestDto.Info.fromEntity(boardRepository.save(
                boardRepository.findById(boardId).get().updateIsDeleted()));
    }

    @Override
    public Page<BoardResponseDto.Info> getMemberBoardList(Long memberId, Pageable pageable) {
        return boardRepository.findAllByIsDeletedIsFalseAndMember_MemberId(memberId, pageable)
                .map(board -> {
                    BoardResponseDto.Info res = BoardResponseDto.Info.fromEntity(board);
                    res.setILikeBoard(boardLikesRepository.existsByMember_MemberIdAndBoard_BoardId(memberId, board.getBoardId()));
                    return res;
                });
    }

}

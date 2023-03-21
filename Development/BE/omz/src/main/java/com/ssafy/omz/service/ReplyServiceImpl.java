package com.ssafy.omz.service;

import com.ssafy.omz.dto.req.BoardRequestDto;
import com.ssafy.omz.dto.req.ReplyRequestDto;
import com.ssafy.omz.dto.resp.BoardResponseDto;
import com.ssafy.omz.dto.resp.ReplyResponseDto;
import com.ssafy.omz.entity.Board;
import com.ssafy.omz.entity.Reply;
import com.ssafy.omz.repository.BoardRepository;
import com.ssafy.omz.repository.MemberRepository;
import com.ssafy.omz.repository.ReplyRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.RollbackException;
import javax.transaction.Transactional;

@Slf4j
@RequiredArgsConstructor
@Service("ReplyService")
public class ReplyServiceImpl implements ReplyService {
    private final ReplyRepository replyRepository;
    private final MemberRepository memberRepository;
    private final BoardRepository boardRepository;

    @Override
    @Transactional
    public void writeReply(ReplyRequestDto.Write reply) throws RollbackException {
        ReplyRequestDto.Info.fromEntity(replyRepository.save(Reply.builder()
                .member(memberRepository.findByMemberId(reply.getMemberId()))
                .board(boardRepository.findByBoardId(reply.getBoardId()))
                .content(reply.getContent())
                .build()));
    }

    @Override
    public void updateReply(Long replyId, ReplyRequestDto.Write reply) throws RollbackException {
        ReplyRequestDto.Info.fromEntity(replyRepository.save(
                replyRepository.findByReplyId(replyId).updateContent(reply.getContent())));
    }

    @Override
    public void deleteReply(Long replyId) throws RollbackException {
        ReplyRequestDto.Info.fromEntity(replyRepository.save(
                replyRepository.findByReplyId(replyId).updateIsDeleted()));
    }
}

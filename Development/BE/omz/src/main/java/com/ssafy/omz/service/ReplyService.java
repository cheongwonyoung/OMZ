package com.ssafy.omz.service;

import com.ssafy.omz.dto.req.BoardRequestDto;
import com.ssafy.omz.dto.req.ReplyRequestDto;
import org.springframework.stereotype.Service;

import javax.transaction.RollbackException;

@Service
public interface ReplyService {
    void writeReply(ReplyRequestDto.Write reply) throws RollbackException;
    void updateReply(Long replyId, ReplyRequestDto.Write reply) throws RollbackException;
    void deleteReply(Long replyId) throws RollbackException;
}

package com.ssafy.omz.repository;

import com.ssafy.omz.entity.Reply;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReplyRepository extends JpaRepository<Reply,Long> {

    Reply findByReplyId(Long replyId);
}

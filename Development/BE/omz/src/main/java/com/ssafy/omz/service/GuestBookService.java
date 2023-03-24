package com.ssafy.omz.service;


import com.ssafy.omz.dto.req.BoardRequestDto;
import com.ssafy.omz.dto.req.GuestBookRequestDto;
import com.ssafy.omz.dto.resp.BoardResponseDto;
import com.ssafy.omz.dto.resp.GuestBookResponseDto;
import com.ssafy.omz.entity.Member;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.transaction.RollbackException;
import java.util.List;

@Service
public interface GuestBookService {

    // 방명록 전체 리스트
//    List<GuestBookResponseDto.Info> getGuestBookList(Long miniRoomId);

    // 방명록 작성
    void writeGuestBook(GuestBookRequestDto.Write guestBook) throws RollbackException;

    // 방명록 삭제
    void deleteGuestBook(Long guestBookId) throws RollbackException;
}

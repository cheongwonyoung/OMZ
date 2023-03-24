package com.ssafy.omz.service;

import com.ssafy.omz.dto.req.BoardRequestDto;
import com.ssafy.omz.dto.req.GuestBookRequestDto;
import com.ssafy.omz.dto.resp.GuestBookResponseDto;
import com.ssafy.omz.entity.Board;
import com.ssafy.omz.entity.GuestBook;
import com.ssafy.omz.entity.Member;
import com.ssafy.omz.repository.GuestBookRepository;
import com.ssafy.omz.repository.MemberRepository;
import com.ssafy.omz.repository.MiniRoomRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.transaction.RollbackException;
import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Service("GuestBookService")
public class GuestBookServiceImpl implements GuestBookService{

    private final GuestBookRepository guestBookRepository;
    private final MiniRoomRepository miniRoomRepository;
    private final MemberRepository memberRepository;


    // 방명록 전체 리스트
//    @Override
//    public List<GuestBookResponseDto.Info> getGuestBookList(Long miniRoomId) {

//        return null;
//    }

    // 방명록 작성
    @Override
    @Transactional
    public void writeGuestBook(GuestBookRequestDto.Write guestBook) throws RollbackException {
        guestBookRepository.save(GuestBook.builder()
                .miniRoom(miniRoomRepository.findById(guestBook.getMiniRoomId()).get())
                .member(memberRepository.findByMemberId(guestBook.getMemberId()))
                .content(guestBook.getContent())
                .build());
    }

    // 방명록 삭제
    @Override
    @Transactional
    public void deleteGuestBook(Long guestBookId) throws RollbackException {
        guestBookRepository.deleteById(guestBookId);
    }
}

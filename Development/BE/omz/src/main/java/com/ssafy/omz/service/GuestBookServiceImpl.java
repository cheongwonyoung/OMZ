package com.ssafy.omz.service;

import com.ssafy.omz.dto.req.BoardRequestDto;
import com.ssafy.omz.dto.req.GuestBookRequestDto;
import com.ssafy.omz.dto.resp.GuestBookResponseDto;
import com.ssafy.omz.entity.Board;
import com.ssafy.omz.entity.GuestBook;
import com.ssafy.omz.entity.Member;
import com.ssafy.omz.entity.MiniRoom;
import com.ssafy.omz.repository.GuestBookRepository;
import com.ssafy.omz.repository.MemberRepository;
import com.ssafy.omz.repository.MiniRoomRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import springfox.documentation.swagger2.mappers.ModelMapper;

import javax.transaction.RollbackException;
import java.util.ArrayList;
import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Service("GuestBookService")
public class GuestBookServiceImpl implements GuestBookService{

    private final GuestBookRepository guestBookRepository;
    private final MiniRoomRepository miniRoomRepository;
    private final MemberRepository memberRepository;


    // 방명록 전체 리스트
    @Override
    public List<GuestBookResponseDto> getGuestBookList(long memberId) {
        List<GuestBookResponseDto> list = new ArrayList<>();

        MiniRoom miniRoom = miniRoomRepository.findByMember_MemberId(memberId);
        List<GuestBook> entityList = guestBookRepository.findAllByMiniRoom(miniRoom);

        for (int i = 0; i < entityList.size(); i++){
            GuestBook g = entityList.get(i);
            GuestBookResponseDto guestBookDto = new GuestBookResponseDto(g.getGuestBookId(), g.getMember().getMemberId(), g.getContent(), g.getRegisteredTime());
            list.add(guestBookDto);
        }
        return list;
    }

    // 방명록 작성
    @Override
    @Transactional
    public void writeGuestBook(GuestBookRequestDto.Write guestBook) throws RollbackException {
        log.info(guestBook.getContent());
        guestBookRepository.save(GuestBook.builder()
                .miniRoom(miniRoomRepository.findByMember_MemberId(guestBook.getFriendId()))
                .member(memberRepository.findByMemberId(guestBook.getMemberId()))
                .content(guestBook.getContent())
                .build());
    }

    // 방명록 삭제
    @Override
    @Transactional
    public void deleteGuestBook(long guestBookId) throws RollbackException {
        guestBookRepository.deleteByGuestBookId(guestBookId);
    }
}

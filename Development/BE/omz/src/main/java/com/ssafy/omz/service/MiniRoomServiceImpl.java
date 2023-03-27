package com.ssafy.omz.service;

import com.ssafy.omz.dto.req.MiniRoomRequestDto;
import com.ssafy.omz.dto.resp.MiniRoomResponseDto;
import com.ssafy.omz.entity.GuestBook;
import com.ssafy.omz.entity.Item;
import com.ssafy.omz.entity.MiniRoom;
import com.ssafy.omz.repository.ItemRepository;
import com.ssafy.omz.repository.ItemTypeRepository;
import com.ssafy.omz.repository.MemberRepository;
import com.ssafy.omz.repository.MiniRoomRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.transaction.RollbackException;
import java.util.List;
import java.util.Map;


@Slf4j
@RequiredArgsConstructor
@Service("MiniRoomService")
public class MiniRoomServiceImpl implements MiniRoomService{

    private final MiniRoomRepository miniRoomRepository;
    final private ItemRepository itemRepository;
    final private ItemTypeRepository itemTypeRepository;



    // 상태메세지 조회
    public MiniRoomResponseDto getStateMessage(long miniRoomId){
        MiniRoom m = miniRoomRepository.findById(miniRoomId).get();
        MiniRoomResponseDto miniRoomDto = new MiniRoomResponseDto(m.getMiniRoomId(),m.getMember().getMemberId(),m.getStateMessage(),m.getLikes());
        return miniRoomDto;
    }

    // 상태메세지 수정
    @Override
    @Transactional
    public void updateStateMessage(long miniRoomId, String stateMessage) throws RollbackException {
        MiniRoom miniRoom = miniRoomRepository.findById(miniRoomId).get();
//        log.info(miniRoom.getMiniRoomId() + "번 미니룸 상메 수정할거얌");
        miniRoom.updateStateMessage(stateMessage).getStateMessage();
    }
    
    // 상태메세지 삭제
    @Override
    @Transactional
    public void deleteStateMessage(long miniRoomId) throws RollbackException {
        MiniRoom miniRoom = miniRoomRepository.findById(miniRoomId).get();
        miniRoom.updateStateMessage("상메로 감정을 표현해봐! 이얏호 레츠고");
    }
    
}

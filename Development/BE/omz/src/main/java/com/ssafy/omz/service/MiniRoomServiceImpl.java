package com.ssafy.omz.service;

import com.ssafy.omz.dto.req.BgmRequestDto;
import com.ssafy.omz.dto.req.ItemRequestDto;
import com.ssafy.omz.dto.req.MiniRoomRequestDto;
import com.ssafy.omz.dto.resp.BgmResponseDto;
import com.ssafy.omz.dto.resp.ItemResponseDto;
import com.ssafy.omz.dto.resp.MemberResponseDto;
import com.ssafy.omz.dto.resp.MiniRoomResponseDto;
import com.ssafy.omz.entity.Bgm;
import com.ssafy.omz.entity.GuestBook;
import com.ssafy.omz.entity.Item;
import com.ssafy.omz.entity.MiniRoom;
import com.ssafy.omz.repository.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.transaction.RollbackException;
import javax.transaction.TransactionalException;
import java.util.ArrayList;
import java.util.List;


@Slf4j
@RequiredArgsConstructor
@Service("MiniRoomService")
public class MiniRoomServiceImpl implements MiniRoomService{

    private final MiniRoomRepository miniRoomRepository;
    final private ItemRepository itemRepository;
    final private ItemTypeRepository itemTypeRepository;
    final private BgmRepository bgmRepository;

    // 미니룸 3D 불러오기
    @Override
    public List<ItemResponseDto.Info> getMiniRoom(long memberId) {

        Long miniRoomId = miniRoomRepository.findByMember_MemberId(memberId).getMiniRoomId();

        List<Item> itemList = itemRepository.findAllByMember_MemberIdAndItemType_ItemTypeId(memberId,
                itemTypeRepository.findByItemTypeName("miniRoom").getItemTypeId());

        List<ItemResponseDto.Info> items = new ArrayList<>();
        for(Item item : itemList){
            ItemResponseDto.Info info = ItemResponseDto.Info.fromEntity(item);
            items.add(info);
        }
        return items;
    }

    // 미니룸 커스텀
    @Override
    @Transactional
    public void updateMiniRoomCustom(long memberId, List<ItemRequestDto.Write> customInfo) throws TransactionalException {
        for (int i = 0; i < customInfo.size(); i++){
            itemRepository.save(itemRepository.findByMember_MemberIdAndName(memberId, customInfo.get(i).getName())
                    .updateItemState(customInfo.get(i).getState()));
        }
    }

    // 상태메세지 조회
    @Override
    public MiniRoomResponseDto getStateMessage(long memberId){
        MiniRoom m = miniRoomRepository.findByMember_MemberId(memberId);
        MiniRoomResponseDto miniRoomDto = new MiniRoomResponseDto(m.getMiniRoomId(),m.getMember().getMemberId(),m.getStateMessage(),m.getLikes());
        log.info(miniRoomDto.getStateMessage() + "이것이 상메");
        return miniRoomDto;
    }

    // 상태메세지 수정
    @Override
    @Transactional
    public void updateStateMessage(long memberId, String stateMessage) throws RollbackException {
        MiniRoom miniRoom = miniRoomRepository.findByMember_MemberId(memberId);
//        log.info(miniRoom.getMiniRoomId() + "번 미니룸 상메 수정할거얌");
        miniRoom.updateStateMessage(stateMessage).getStateMessage();
    }
    
    // 상태메세지 삭제
    @Override
    @Transactional
    public void deleteStateMessage(long memberId) throws RollbackException {
        MiniRoom miniRoom = miniRoomRepository.findByMember_MemberId(memberId);
        miniRoom.updateStateMessage("상메로 감정을 표현해봐! 이얏호 레쓰고");
    }

    // 음악정보 등록
    @Override
    public void updateBgm(long miniRoomId, BgmRequestDto.Write musicInfo) {
        bgmRepository.save(Bgm.builder().miniRoom(miniRoomRepository.findByMiniRoomId(miniRoomId))
                .title(musicInfo.getTitle()).singer(musicInfo.getSinger()).build());
    }

    // miniroom의 bgm 정보 조회
    @Override
    public BgmResponseDto.BgmInfo getBgm(long miniRoomId) {
        Bgm bgm = bgmRepository.findByMiniRoom_MiniRoomId(miniRoomId);
        BgmResponseDto.BgmInfo bgmInfo = BgmResponseDto.BgmInfo.fromEntity(bgm);
        return bgmInfo;
    }

}

package com.ssafy.omz.service;

import com.ssafy.omz.dto.req.FaceRequestDto;
import com.ssafy.omz.dto.req.ItemRequestDto;
import com.ssafy.omz.dto.resp.ItemResponseDto;
import com.ssafy.omz.dto.resp.MemberResponseDto;
import com.ssafy.omz.entity.Item;
import com.ssafy.omz.entity.Member;
import com.ssafy.omz.repository.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import javax.transaction.TransactionalException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Slf4j
@RequiredArgsConstructor
@Service("MyPageService")
public class MypageServiceImpl implements MyPageService {

    final private MemberRepository memberRepository;
    final private MiniRoomRepository miniRoomRepository;
    final private ItemRepository itemRepository;
    final private ItemTypeRepository itemTypeRepository;
    final private FaceRepository faceRepository;

    @Override
    public Map<String, Object> getMyPageMain(Long memberId) {
        Map<String, Object> res = new HashMap<>();
        MemberResponseDto.MyPageMainInfo memberDto = MemberResponseDto.MyPageMainInfo.fromEntity(
                memberRepository.findByMemberId(memberId));
        Long miniRoomId = miniRoomRepository.findByMember_MemberId(memberId).getMiniRoomId();
        List<Item> itemEntityList = itemRepository.findAllByMember_MemberIdAndItemType_ItemTypeId(memberId,
                itemTypeRepository.findByItemTypeName("avatar").getItemTypeId());
        List<ItemResponseDto.Info> items = new ArrayList<>();
        for(Item item : itemEntityList){
            ItemResponseDto.Info info = ItemResponseDto.Info.fromEntity(item);
            items.add(info);
        }
        res.put("member", memberDto);
        res.put("miniRoomId", miniRoomId);
        res.put("items", items);
        return res;
    }

    @Override
    public MemberResponseDto.MyPageModifyInfo getMyPageModify(Long memberId) {
        return MemberResponseDto.MyPageModifyInfo.fromEntity(memberRepository.findByMemberId(memberId));
    }

    @Override
    public Map<String, Object> getMyPageCustom(Long memberId) {
        Map<String, Object> res = new HashMap<>();
        List<Item> itemEntityList = itemRepository.findAllByMember_MemberIdAndItemType_ItemTypeId(memberId,
                itemTypeRepository.findByItemTypeName("avatar").getItemTypeId());
        List<ItemResponseDto.Info> items = new ArrayList<>();
        for(Item item : itemEntityList){
            ItemResponseDto.Info info = ItemResponseDto.Info.fromEntity(item);
            items.add(info);
        }
        res.put("memberId", memberRepository.findByMemberId(memberId).getMemberId());
        res.put("faceName", memberRepository.findByMemberId(memberId).getFaceName());
        res.put("items", items);
        return res;
    }

    @Override
    @Transactional
    public void updateNickname(Long memberId, String nickname)  throws TransactionalException{
        memberRepository.save(memberRepository.findByMemberId(memberId).updateNickname(nickname));
    }

    @Override
    @Transactional
    public void updateMbti(Long memberId, String mbti) throws TransactionalException {
        memberRepository.save(memberRepository.findByMemberId(memberId).updateMbti(mbti));
    }

    @Override
    @Transactional
    public void updatePreferFace(Long memberId, FaceRequestDto.Write faceInfo) throws TransactionalException {
        Long faceId = memberRepository.findByMemberId(memberId).getPreferFace().getFaceId();
        faceRepository.save(faceRepository.findByFaceId(faceId).updateFace(
                faceInfo.getDog(), faceInfo.getCat(), faceInfo.getBear(),
                faceInfo.getRabbit(), faceInfo.getDino(), faceInfo.getFox()));
    }

    @Override
    @Transactional
    public void updateAvatarCustom(Long memberId, List<ItemRequestDto.Write> itemInfo) throws TransactionalException {
        for (int i = 0; i < itemInfo.size(); i++){
            itemRepository.save(itemRepository.findByMember_MemberIdAndName(memberId,itemInfo.get(i).getName())
                    .updateItemState(itemInfo.get(i).getState()));
        }
    }
}

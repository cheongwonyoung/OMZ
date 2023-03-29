package com.ssafy.omz.service;

import com.ssafy.omz.entity.Member;
import com.ssafy.omz.entity.MiniRoom;
import com.ssafy.omz.entity.MiniRoomLikes;
import com.ssafy.omz.repository.MemberRepository;
import com.ssafy.omz.repository.MiniRoomLikesRepository;
import com.ssafy.omz.repository.MiniRoomRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@RequiredArgsConstructor
@Service("MiniRoomLikesService")
public class MiniRoomLikesServiceImpl implements MiniRoomLikesService{

    private final MiniRoomLikesRepository likesRepository;
    private final MiniRoomRepository miniRoomRepository;
    private final MemberRepository memberRepository;

    
    // 좋아요 조회
    @Override
    public long getLikes(long miniRoomId) {
        MiniRoom miniRoom = miniRoomRepository.findById(miniRoomId).get();
        return miniRoom.getLikes();
    }

    // 좋아요 누르기 및 취소
    public void likeMiniRoom(long miniRoomId, long memberId){
        MiniRoom miniRoom = miniRoomRepository.findById(miniRoomId).get();
        Member member = memberRepository.findById(memberId).get();

        // 좋아요 누른 적 없을 때
        if(likesRepository.findByMiniRoomAndMember(miniRoom, member) == null){
            miniRoom.setLikes(miniRoom.getLikes() + 1);
            MiniRoomLikes miniRoomLikes = new MiniRoomLikes(miniRoom, member);
            likesRepository.save(miniRoomLikes);
            log.info("좋아요 성공");
        } 
        // 누른 적 있을 때 좋아요 취소
        else {
            MiniRoomLikes miniRoomLikes = likesRepository.findByMiniRoomAndMember(miniRoom, member);
            miniRoom.setLikes(miniRoom.getLikes() - 1);
            likesRepository.delete(miniRoomLikes);
            log.info("좋아요 취소");
        }
    }
}

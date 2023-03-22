package com.ssafy.omz.api;

import com.ssafy.omz.dto.req.BoardRequestDto;
import com.ssafy.omz.dto.req.FriendRequestDto;
import com.ssafy.omz.service.FriendService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Api("friendController API v1")
@RestController
@RequestMapping("/friend")
@RequiredArgsConstructor
public class FriendController {

    private final FriendService friendService;
    @ApiOperation(value = "친구 찾기 페이지 멤버 검색", notes = "닉네임으로 멤버 검색하기 \n" +
            "친구 신청 버튼을 띄울지 말지 판단할 수 있게 내 memberId도 보내주세요")
    @GetMapping("/{memberId}/{word}")
    public ResponseEntity<?> getSearchMemberList(@PathVariable Long memberId, @PathVariable String word) {
        try {
            return new ResponseEntity<>(friendService.getSearchMemberList(memberId, word), HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @ApiOperation(value = "친구 신청", notes = "message: 친구 신청메세지 \n" +
            "toMemberId: 내가 친구 신청을 보내는 사람 \n " +
            "fromMemberId: 내 아이디 \n")
    @PostMapping("")
    public ResponseEntity<?> friendRequest(@RequestBody FriendRequestDto.Write friend) {
        try {
            friendService.requestFriend(friend);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
//    @ApiOperation(value = "친구 신청을 할 수 있는 유저인지 판단", notes = "이전에 친구를 끊음 or \n" +
//            "이미 친구 신청을 받음 or \n 이미 친구 신청 보냄 or \n 이미 친구인 상태면 \n" +
//            "친구 신청하기 버튼 안 띄워줘도 됨")
//    @GetMapping("/{toMemberId}/{fromMemberId}")
//    public ResponseEntity<?> friendRequestPossibleCheck(@PathVariable Long toMemberId, @PathVariable Long fromMemberId) {
//        try {
//            return new ResponseEntity<>(friendService.requestFriendPossibleCheck(toMemberId, fromMemberId), HttpStatus.ACCEPTED);
//        } catch (Exception e) {
//            e.printStackTrace();
//            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
//        }

//    }

}

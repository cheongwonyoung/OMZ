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

    @ApiOperation(value = "내 친구 목록", notes = "내 친구  목록 불러오기")
    @GetMapping("/{memberId}")
    public ResponseEntity<?> getFriendList(@PathVariable Long memberId) {
        try {
            return new ResponseEntity<>(friendService.getFriendList(memberId), HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @ApiOperation(value = "내 친구 대기 목록", notes = "나한테 친구 신청 보낸 사람들 목록 불러오기")
    @GetMapping("waiting/{memberId}")
    public ResponseEntity<?> getFriendWaitingList(@PathVariable Long memberId) {
        try {
            return new ResponseEntity<>(friendService.getFriendWaitingList(memberId), HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @ApiOperation(value = "친구 수락", notes = "친구 요청 수락하기")
    @PutMapping("accept/{friendId}")
    public ResponseEntity<?> acceptFriend(@PathVariable Long friendId) {
        try {
            friendService.friendAccept(friendId);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @ApiOperation(value = "친구 거절", notes = "친구 요청 거절하기")
    @DeleteMapping("reject/{friendId}")
    public ResponseEntity<?> rejectFriend(@PathVariable Long friendId) {
        try {
            friendService.friendReject(friendId);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @ApiOperation(value = "친구 끊기", notes = "이미 친구인 멤버와 친구 끊기 \n 해당 작업 수행 후 다신 친구 신청 불가")
    @PutMapping("/{toMemberId}/{fromMemberId}")
    public ResponseEntity<?> cutFriend(@PathVariable Long toMemberId, @PathVariable Long fromMemberId) {
        try {
            friendService.friendCut(toMemberId, fromMemberId);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

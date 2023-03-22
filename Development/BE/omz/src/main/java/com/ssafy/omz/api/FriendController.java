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
}

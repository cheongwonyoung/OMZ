package com.ssafy.omz.api;

import com.ssafy.omz.dto.req.BoardRequestDto;
import com.ssafy.omz.dto.req.ReplyRequestDto;
import com.ssafy.omz.service.ReplyService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@Api("boardController API v1")
@RestController
@RequiredArgsConstructor
@RequestMapping("/reply")
public class ReplyController {

    private final ReplyService replyService;

    @ApiOperation(value = "커뮤니티 댓글 작성", notes = "커뮤니티 댓글 작성하기")
    @PostMapping("")
    public ResponseEntity<?> boardWrite(@RequestBody ReplyRequestDto.Write reply) {
        try {
            replyService.writeReply(reply);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @ApiOperation(value = "커뮤니티 댓글 수정", notes = "커뮤니티 댓글 수정하기")
    @PutMapping("/")
    public ResponseEntity<?> replyUpdate(@RequestParam(required = false, value = "replyId") Long replyId,
                                         @RequestBody ReplyRequestDto.Write reply) {
        try {
            replyService.updateReply(replyId, reply);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @ApiOperation(value = "커뮤니티 댓글 삭제", notes = "커뮤니티 댓글 삭제하기")
    @PutMapping("/delete/{replyId}")
    public ResponseEntity<?> boardDelete(@PathVariable Long replyId) {
        try {
            replyService.deleteReply(replyId);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}

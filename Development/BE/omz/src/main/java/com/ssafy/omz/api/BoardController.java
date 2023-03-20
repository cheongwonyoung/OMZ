package com.ssafy.omz.api;

import com.ssafy.omz.service.BoardService;
import io.swagger.annotations.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.hibernate.annotations.Parameter;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@Api("memberController API v1")
@RestController
@RequiredArgsConstructor
@RequestMapping("/board")
public class BoardController {

    private final BoardService boardService;

    @ApiOperation(value = "글 리스트, 검색", notes = "key가 없을 때는 모든 글 불러오고 key가 있을 때는 key에 맞는 글 검색")
    @GetMapping("")
    public ResponseEntity<?> boardList(@RequestParam(required = false, value = "memberId") Long memberId,
                                       @RequestParam(required = false, value = "key") String key,
                                       @RequestParam(required = false, value = "word") String word,
                                       Pageable pageable) {
        try {
            if (key == null || key.isEmpty())
                return new ResponseEntity<>(boardService.getBoardList(memberId, pageable), HttpStatus.OK);
            else if (key.equals("content"))
                return new ResponseEntity<>(boardService.searchBoardByContent(memberId, word, pageable), HttpStatus.OK);
            else if (key.equals("nickname"))
                return new ResponseEntity<>(boardService.searchBoardByNickname(memberId, word, pageable), HttpStatus.OK);
            return new ResponseEntity<>(boardService.getBoardList(memberId, pageable), HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @ApiOperation(value = "글 좋아요", notes = "글에 좋아요 누르기")
    @PostMapping("/{memberId}/{boardId}")
    public ResponseEntity<?> postUserLikeCourse(@PathVariable Long memberId,
                                                @PathVariable Long boardId) {
        try{
            boardService.memberLikeBoard(memberId, boardId);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        } catch(Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @ApiOperation(value = "글 좋아요 취소", notes = "글에 좋아요 누른 거 취소")
    @PutMapping("/{memberId}/{boardId}")
    public ResponseEntity<?> cancleMemberLikeBoard(@PathVariable Long memberId,
                                                @PathVariable Long boardId) {
        try{
            boardService.memberCancleLikeBoard(memberId, boardId);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        } catch(Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @ApiOperation(value = "좋아요한 글 목록", notes = "memberId가 좋아요한 글 목록 불러오기")
    @GetMapping("/likes")
    public ResponseEntity<?> boardList(@RequestParam(required = false, value = "memberId") Long memberId,
                                       Pageable pageable) {
        try {
            return new ResponseEntity<>(boardService.getLikeList(memberId, pageable), HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}

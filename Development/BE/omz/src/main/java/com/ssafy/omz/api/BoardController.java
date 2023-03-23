package com.ssafy.omz.api;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafy.omz.dto.req.BoardRequestDto;
import com.ssafy.omz.service.BoardService;
import io.swagger.annotations.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@Slf4j
@Api("boardController API v1")
@RestController
@RequiredArgsConstructor
@RequestMapping("/board")
public class BoardController {
    private final BoardService boardService;

    @ApiOperation(value = "메인 글 리스트",
            notes = "커뮤니티 메인 글 리스트 불러오기 \n" +
                    " 페이지 네이션 정보는 이렇게 주세요\n" +
                    " \"page\": currentPage-1 출력할 페이지,\n" +
                    " \"size\": 10 한 페이지에 담을 글 수,\n" +
                    " \"sort\": sort 정렬")
    @GetMapping("")
    public ResponseEntity<?> boardList(@RequestParam(required = false, value = "memberId") Long memberId, Pageable pageable) {
        try {
            return new ResponseEntity<>(boardService.getBoardList(memberId, pageable), HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @ApiOperation(value = "글 검색", notes = "커뮤니티 검색 결과 불러오기 \n "
            + "key:  content 혹은 nickname으로 주세요 \n"
            + "word: 검색할 단어를 입력해주시면 돼요")
            @GetMapping("/search/{memberId}/{key}/{word}")
            public ResponseEntity<?> searchList(@PathVariable Long memberId,
            @PathVariable String key,
            @PathVariable String word) {
        try {
            if (key.equals("content"))
                return new ResponseEntity<>(boardService.searchBoardByContent(memberId, word), HttpStatus.OK);
            else
                return new ResponseEntity<>(boardService.searchBoardByNickname(memberId, word), HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @ApiOperation(value = "글 상세 보기", notes = "클릭한 글에 대한 상세 정보")
    @GetMapping("/{memberId}/{boardId}")
    public ResponseEntity<?> boardDetail(@PathVariable Long memberId, @PathVariable Long boardId) {
        try {
            return new ResponseEntity<>(boardService.getBoardDetail(memberId, boardId), HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @ApiOperation(value = "글 좋아요", notes = "글에 좋아요 누르기")
    @PostMapping("/{memberId}/{boardId}")
    public ResponseEntity<?> postMemberLikeBoard(@PathVariable Long memberId,
                                                 @PathVariable Long boardId) {
        try {
            boardService.memberLikeBoard(memberId, boardId);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @ApiOperation(value = "글 좋아요 취소", notes = "글에 좋아요 누른 거 취소")
    @PutMapping("/{memberId}/{boardId}")
    public ResponseEntity<?> cancleMemberLikeBoard(@PathVariable Long memberId,
                                                   @PathVariable Long boardId) {
        try {
            boardService.memberCancleLikeBoard(memberId, boardId);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @ApiOperation(value = "좋아요한 글 목록", notes = "memberId가 좋아요한 글 목록 불러오기")
    @GetMapping("/likes/{memberId}")
    public ResponseEntity<?> getBoardLikeList(@PathVariable Long memberId) {
        try {
            return new ResponseEntity<>(boardService.getLikeList(memberId), HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @ApiOperation(value = "사용자가 쓴 글 목록", notes = "memberId가 쓴 글 목록 불러오기")
    @GetMapping("/{memberId}")
    public ResponseEntity<?> getBoardMemberList(@PathVariable Long memberId, Pageable pageable) {
        try {
            return new ResponseEntity<>(boardService.getMemberBoardList(memberId, pageable), HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @ApiOperation(value = "커뮤니티 글 작성", notes = "커뮤니티 글 작성하기")
    @PostMapping("")
    public ResponseEntity<?> boardWrite(@RequestParam MultipartFile file,
                                        @RequestParam String dto) {
        try {
            ObjectMapper mapper = new ObjectMapper();
            BoardRequestDto.Write writeInfo = mapper.readValue(dto, BoardRequestDto.Write.class);
            boardService.writeBoard(file, writeInfo);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @ApiOperation(value = "커뮤니티 글 수정", notes = "커뮤니티 글 수정하기")
    @PutMapping("/{boardId}")
    public ResponseEntity<?> boardUpdate(@PathVariable Long boardId,
                                         @RequestParam MultipartFile file,
                                         @RequestParam String dto) {
        try {
            ObjectMapper mapper = new ObjectMapper();
            BoardRequestDto.Write writeInfo = mapper.readValue(dto, BoardRequestDto.Write.class);
            boardService.updateBoard(boardId, file, writeInfo);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @ApiOperation(value = "커뮤니티 글 삭제", notes = "커뮤니티 글 삭제하기")
    @DeleteMapping("/{boardId}")
    public ResponseEntity<?> boardDelete(@PathVariable Long boardId) {
        try {
            boardService.deleteBoard(boardId);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

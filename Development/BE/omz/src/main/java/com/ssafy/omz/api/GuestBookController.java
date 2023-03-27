package com.ssafy.omz.api;

import com.ssafy.omz.dto.req.BoardRequestDto;
import com.ssafy.omz.dto.req.GuestBookRequestDto;
import com.ssafy.omz.service.GuestBookService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@Api("guestBookController API v1")
@RestController
@RequiredArgsConstructor
@RequestMapping("/guestbook")
public class GuestBookController {

    private final GuestBookService guestBookService;

    @ApiOperation(value = "방명록 조회")
    @GetMapping("")
    public ResponseEntity<?> guestBookList(@RequestParam(required = true, value = "miniRoomId") Long miniRoomId){
        try{
            return new ResponseEntity<>(guestBookService.getGuestBookList(miniRoomId), HttpStatus.OK);
        } catch ( Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @ApiOperation(value = "방명록 등록")
    @PostMapping("")
    public ResponseEntity<?> guestBookWrite(@RequestBody GuestBookRequestDto.Write guestBook) {
        try {
            log.info(guestBook.getContent());
            guestBookService.writeGuestBook(guestBook);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @ApiOperation(value = "방명록 삭제")
    @PutMapping("")
    public ResponseEntity<?> guestBookDelete(@RequestParam(required = true, value = "guestBookId") long guestBookId) {
        try {
            guestBookService.deleteGuestBook(guestBookId);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}

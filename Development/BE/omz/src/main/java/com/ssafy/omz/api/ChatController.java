package com.ssafy.omz.api;

import com.ssafy.omz.dto.req.ChatPagingRequestDto;
import com.ssafy.omz.dto.resp.ChatPagingResponseDto;
import com.ssafy.omz.dto.resp.ChatRoomDto;
import com.ssafy.omz.service.ChatRedisCacheService;
import com.ssafy.omz.service.ChatRoomService;
import io.swagger.annotations.*;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@Api("ChatController API v1")
//@RequiredArgsConstructor
//@RequestMapping("/api/chatting")
@RequestMapping("/chatting")
@RestController
public class ChatController {

    private final ChatRoomService chatRoomService;

    private final ChatRedisCacheService chatRedisCacheService;


    @Autowired
    public ChatController(ChatRoomService chatRoomService, ChatRedisCacheService chatRedisCacheService){
        this.chatRoomService = chatRoomService;
        this.chatRedisCacheService = chatRedisCacheService;
    }

    @ApiOperation(value = "채팅방 목록 조회", notes = "토큰 사용자와 채팅했던 채팅방 목록을 불러온다.", response = List.class)
    @ApiResponses({
            @ApiResponse(code = 200, message = "OK"),
            @ApiResponse(code = 204, message = "No Content"),
            @ApiResponse(code = 404, message = "Not Found")
            //Other Http Status code..
    })
    @GetMapping()
    public ResponseEntity<List<ChatRoomDto>> getChatRoomList(){

        HttpStatus status = HttpStatus.OK;
        List<ChatRoomDto> chatRoomList = null;
        try {
        //  Token 기반 사용자 정보 추출
            // Member member = ?
          long memberId = 4; // sara
            //  service
            chatRoomList = chatRoomService.getChatRoomList(memberId);
            if (chatRoomList.isEmpty() || chatRoomList == null) // || chatRoomList == null
                status = HttpStatus.NO_CONTENT;

        } catch (Exception e){
            e.printStackTrace();
            status = HttpStatus.BAD_REQUEST;
        }
        return new ResponseEntity<List<ChatRoomDto>>(chatRoomList, status);
    }

    //  굳이 API 없어도 채팅방 목록에서 닉네임, 아바타 이미지, 채팅방 번호(roomId) 있어서
    //  세가지만 들고 채팅방 페이지로 넘어가면 바로 연결됨 아마도...? -> 이부분은 소켓 ChatStompControlller 부분
    //  근데 채팅 읽었는지 안 읽었는지 부분은 false -> true로 바꾸어줘야하는데
    //  이 부분을 어떻게 잡아주죠...^^?
//    @ApiOperation(value = "채팅방 불러오기", notes = "채팅방 번호(roomId)에 해당하는 채팅방을 불러온다.")
//        @ApiResponses({
//            @ApiResponse(code = 200, message = "OK"),
//            @ApiResponse(code = 404, message = "Not Found")
//            //Other Http Status code..
//    })
//    @ApiImplicitParam(
//            name = "roomId"
//            , value = "채팅방 번호"
////            , defaultValue = "None"
//    )
//    @GetMapping("/{roomId}")
//    public ResponseEntity<?> getChatRoomByRoomId(@PathVariable("roomId") long roomId){
//        //  roomId에 해당하는 채팅방 연결
//        //  해당 데이터 조회 및 소켓 통신 시작
//        //  이제까지의 채팅 데이터 넘겨주면 됨 ...
//        return new ResponseEntity<>();
//    }

        @ApiOperation(value = "채팅방 대화 내역 불러오기", notes = "채팅방 번호(roomId)에 해당하는 채팅방의 대화 내역을 불러온다.")
        @ApiResponses({
            @ApiResponse(code = 200, message = "OK"),
            @ApiResponse(code = 404, message = "Not Found")
            //Other Http Status code..
        })
        @ApiImplicitParam(
                name = "roomId"
                , value = "채팅방 번호"
        )
        @PostMapping("/{roomId}")
        public ResponseEntity<List<ChatPagingResponseDto>> getChatting(@PathVariable Long roomId, @RequestBody(required = false) ChatPagingRequestDto chatPagingDto){

            HttpStatus status = HttpStatus.OK;
            List<ChatPagingResponseDto> chatList = null;
            //Cursor 존재하지 않을 경우,현재시간을 기준으로 paging
            try {
                if(chatPagingDto == null || chatPagingDto.getCursor() == null || chatPagingDto.getCursor().equals("")){
                    chatPagingDto= ChatPagingRequestDto.builder()
                            //  cursor type 정하기
                            .cursor(LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss.SSS"))).build();

                }
                chatList = chatRedisCacheService.getChatsFromRedis(roomId, chatPagingDto);

                if(chatList.isEmpty() || chatList == null)
                    status = HttpStatus.NO_CONTENT;

            }
            catch (Exception e){
                e.printStackTrace();
                status = HttpStatus.BAD_REQUEST;
            }

            //  getChatsFromRedis는 프론트에서 커서 값 가져오는 부분이라 아직 코드 작성 안 함 (0321_16:04)
//            return chatRedisCacheService.getChatsFromRedis(roomId, chatPagingDto);
            return new ResponseEntity<List<ChatPagingResponseDto>>(chatList, status);
        }
}

package com.ssafy.omz.api;

import com.ssafy.omz.dto.req.ChatPagingRequestDto;
import com.ssafy.omz.dto.resp.*;
import com.ssafy.omz.entity.ChatRoom;
import com.ssafy.omz.entity.Friend;
import com.ssafy.omz.repository.FriendRepository;
import com.ssafy.omz.service.ChatRedisCacheService;
import com.ssafy.omz.service.ChatRoomService;
import com.ssafy.omz.service.FriendService;
import io.swagger.annotations.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Api("ChatController API v1")
//@RequiredArgsConstructor
@RequestMapping("/chatting")
@RestController
public class ChatController {

    private final ChatRoomService chatRoomService;

    private final ChatRedisCacheService chatRedisCacheService;

    private final FriendService friendService;

    @Autowired
    public ChatController(ChatRoomService chatRoomService, ChatRedisCacheService chatRedisCacheService, FriendService friendService){
        this.chatRoomService = chatRoomService;
        this.chatRedisCacheService = chatRedisCacheService;
        this.friendService = friendService;
    }

    @ApiOperation(value = "채팅방 목록 조회", notes = "토큰 사용자와 채팅했던 채팅방 목록을 불러온다.", response = List.class)
    @ApiResponses({
            @ApiResponse(code = 200, message = "OK"),
            @ApiResponse(code = 204, message = "채팅 목록이 없습니다."),
            @ApiResponse(code = 400, message = "Bad Request"),
            @ApiResponse(code = 404, message = "Not Found")
            //Other Http Status code..
    })
    @GetMapping("")
    public ResponseEntity<List<ChatRoomInfoResponseDto>> getChatRoomList(@RequestParam(required = false, value = "memberId") Long memberId){

        HttpStatus status = HttpStatus.OK;
        List<ChatRoomInfoResponseDto> chatRoomList = null;
        try {
            chatRoomList = chatRoomService.getChatRoomList(memberId);
            if (chatRoomList.isEmpty() || chatRoomList == null)
                status = HttpStatus.NO_CONTENT;

        } catch (Exception e){
            e.printStackTrace();
            status = HttpStatus.BAD_REQUEST;
        }
        return new ResponseEntity<List<ChatRoomInfoResponseDto>>(chatRoomList, status);
    }

    @ApiOperation(value = "채팅방 정보 및 대화 내역 불러오기", notes = "채팅방 번호(roomId)에 해당하는 채팅방의 정보와 대화 내역을 불러온다.")
    @ApiImplicitParam(
            name = "roomId"
            , value = "채팅방 번호"
    )
    @PostMapping("/{roomId}")
    public ResponseEntity<?> getChatRoom(@PathVariable Long roomId, @RequestParam(required = false, value = "memberId") Long memberId, @RequestBody(required = false) ChatPagingRequestDto chatPagingDto){

        //  Cursor 존재하지 않을 경우,현재시간을 기준으로 paging
        try {
            if(chatPagingDto == null || chatPagingDto.getCursor() == null || chatPagingDto.getCursor().equals("")){
                chatPagingDto= ChatPagingRequestDto.builder()
                        .cursor(LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss.SSS"))).build();
            }
            ChatRoomResponseDto chatRoomResponseDto = chatRoomService.getChatRoomInfo(roomId, memberId);
            List<ChatPagingResponseDto> chatList = chatRedisCacheService.getChatsFromRedis(roomId, memberId, chatPagingDto);
            chatRoomResponseDto.setChatList(chatList);

            return new ResponseEntity<ChatRoomResponseDto>(chatRoomResponseDto, HttpStatus.OK);
        }
        catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @ApiOperation(value = "채팅 상대방 친구 추가", notes = "")
    @ApiImplicitParam(
            name = "roomId"
            , value = "채팅방 번호"
    )
    @PostMapping("/{roomId}/addFriend")
    public ResponseEntity<?> getChatRoom(@PathVariable Long roomId, @RequestBody(required = false) ChatOtherInfoResponseDto chatOtherInfo){

        //  상대방 memberId
        try {

            int friendState = chatOtherInfo.getFriendState();

            //  FriendRepository에 나랑 chatOtherInfo.getMemberId() 있는지
            //  있으면 바로 state 1로 바꿔주고
            //  없으면 state 0으로 넣어주기

            //  친구 상태 반환
            return new ResponseEntity<>(friendState, HttpStatus.OK);
        }
        catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}

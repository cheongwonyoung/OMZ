package com.ssafy.omz.api;


import com.ssafy.omz.dto.req.ChatRequestDto;
import com.ssafy.omz.dto.resp.*;
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

    @ApiOperation(value = "채팅방 목록 조회", notes = "토큰 사용자와 채팅했던 채팅방 목록을 불러온다. \n chatOtherInfo.friendState 값이 0일 경우 친구 추가 버튼 존재", response = List.class)
    @ApiResponses({
            @ApiResponse(code = 200, message = "OK"),
            @ApiResponse(code = 204, message = "채팅 목록이 없습니다."),
            @ApiResponse(code = 400, message = "Bad Request"),
            @ApiResponse(code = 404, message = "Not Found")
            //Other Http Status code..
    })
    @GetMapping("")
    public ResponseEntity<List<ChatResponseDto.ChatRoomInfo>> getChatRoomList(@RequestParam(required = false, value = "memberId") Long memberId){

        HttpStatus status = HttpStatus.OK;
        List<ChatResponseDto.ChatRoomInfo> chatRoomList = null;
        try {
            chatRoomList = chatRoomService.getChatRoomList(memberId);
            if (chatRoomList.isEmpty() || chatRoomList == null)
                status = HttpStatus.NO_CONTENT;

        } catch (Exception e){
            e.printStackTrace();
            status = HttpStatus.BAD_REQUEST;
        }
        return new ResponseEntity<List<ChatResponseDto.ChatRoomInfo>>(chatRoomList, status);
    }

    @ApiOperation(value = "채팅방 정보 및 대화 내역 불러오기", notes = "채팅방 번호(roomId)에 해당하는 채팅방의 정보와 대화 내역을 불러온다.")
    @ApiImplicitParam(
            name = "roomId"
            , value = "채팅방 번호"
    )
    @PostMapping("/{roomId}")
    public ResponseEntity<?> getChatRoom(@PathVariable Long roomId, @RequestParam(required = false, value = "memberId") Long memberId, @RequestBody(required = false) ChatRequestDto.ChatPaging chatPagingDto){

        //  Cursor 존재하지 않을 경우,현재시간을 기준으로 paging
        try {
            if(chatPagingDto == null || chatPagingDto.getCursor() == null || chatPagingDto.getCursor().equals("")){
                chatPagingDto= ChatRequestDto.ChatPaging.builder()
                        .cursor(LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss.SSS"))).build();
            }
            ChatResponseDto.ChatRoomChatData chatRoomResponseDto = chatRoomService.getChatRoomInfo(roomId, memberId);
            List<ChatResponseDto.ChatPaging> chatList = chatRedisCacheService.getChatsFromRedis(roomId, memberId, chatPagingDto);
            chatRoomResponseDto.setChatList(chatList);

            return new ResponseEntity<ChatResponseDto.ChatRoomChatData>(chatRoomResponseDto, HttpStatus.OK);
        }
        catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @ApiOperation(value = "채팅 상대방 친구 추가", notes = "채팅 상대방을 친구 추가한다.")
    @PostMapping("/addFriend")
    public ResponseEntity<?> addFriendInChat(@RequestBody ChatRequestDto.ChatMembersInfo chatMembersInfo){

        try {
            ChatResponseDto.ChatOtherInfo chatOtherInfo = chatRoomService.addChatMemeberToFriend(chatMembersInfo);

            //  친구 추가 버튼 여부 반환
            return new ResponseEntity<>(chatOtherInfo, HttpStatus.OK);
        }
        catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @ApiOperation(value = "친구에게 말 걸기", notes = "친구와의 채팅방에 접속하기 위한 채팅방 번호(roomId)를 반환한다.")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "memberId", value = "나의 memberId"),
            @ApiImplicitParam(name = "friendMemberId", value = "친구 memberId")
    })
    @GetMapping("/{memberId}/{friendMemberId}")
    public ResponseEntity<?> getChatRoomIdInFriendList(@PathVariable Long memberId, @PathVariable Long friendMemberId){
        try {
            long roomId = chatRoomService.getChatRoomIdInFriendList(memberId, friendMemberId);
            return new ResponseEntity<>(roomId, HttpStatus.OK);
        }
        catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}

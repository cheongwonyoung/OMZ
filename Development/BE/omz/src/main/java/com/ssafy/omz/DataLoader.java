package com.ssafy.omz;

import com.ssafy.omz.dto.req.MemberRequestDto;
import com.ssafy.omz.dto.resp.MemberResponseDto;
import com.ssafy.omz.entity.*;
import com.ssafy.omz.repository.*;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@Component
public class DataLoader implements CommandLineRunner {
    @Value("${spring.jpa.hibernate.ddl-auto}")
    private String DDL_CONFIG;
    @Autowired
    private MemberRepository memberRepository;
    @Autowired
    private BoardRepository boardRepository;
    @Autowired
    private ReplyRepository replyRepository;
    @Autowired
    private BoardLikesRepository boardLikesRepository;
    @Autowired
    private FriendRepository friendRepository;
    @Autowired
    private MiniRoomRepository miniRoomRepository;
    @Autowired
    private FaceRepository faceRepository;
    @Autowired
    private ItemTypeRepository itemTypeRepository;
    @Autowired
    private ItemRepository itemRepository;
    @Autowired
    private ChatRoomRepository chatRoomRepository;
    @Autowired
    private ChatRepository chatRepository;

    @Override
    public void run(String... args) throws Exception {
        // JPA DDL 설정 보고 실행 판단
        if (!DDL_CONFIG.equals("create")) return;

        addMember();
        addBoard();
        addReply();
        addBoardLikes();
        addFriend();
        addMiniRoom();
        addFace();
        addItemType();
        addItem();
        addChatRoom();
        addChat();
    }
    private void addItem() {
        List<Member> memberList = memberRepository.findAll();
        List<ItemType> itemTypeList = itemTypeRepository.findAll();
        List<Item> itemList = new ArrayList<>();
        for (int i = 0; i < 2; i++) {
            itemList.add(itemRepository.save(Item.builder()
                    .itemType(itemTypeList.get(0))
                    .member(memberList.get(i))
                    .name("hat")
                    .state(1)
                    .build()));
            itemList.add(itemRepository.save(Item.builder()
                    .itemType(itemTypeList.get(0))
                    .member(memberList.get(i))
                    .name("glasses")
                    .state(1)
                    .build()));
            itemList.add(itemRepository.save(Item.builder()
                    .itemType(itemTypeList.get(0))
                    .member(memberList.get(i))
                    .name("wing")
                    .state(1)
                    .build()));
            itemList.add(itemRepository.save(Item.builder()
                    .itemType(itemTypeList.get(1))
                    .member(memberList.get(i))
                    .name("bed")
                    .state(1)
                    .build()));
            itemList.add(itemRepository.save(Item.builder()
                    .itemType(itemTypeList.get(1))
                    .member(memberList.get(i))
                    .name("table")
                    .state(1)
                    .build()));
            itemList.add(itemRepository.save(Item.builder()
                    .itemType(itemTypeList.get(1))
                    .member(memberList.get(i))
                    .name("lamp")
                    .state(1)
                    .build()));
            itemList.add(itemRepository.save(Item.builder()
                    .itemType(itemTypeList.get(1))
                    .member(memberList.get(i))
                    .name("drawer")
                    .state(1)
                    .build()));
            itemList.add(itemRepository.save(Item.builder()
                    .itemType(itemTypeList.get(1))
                    .member(memberList.get(i))
                    .name("clock")
                    .state(1)
                    .build()));
        }
        for (int i = 2; i < 4; i++) {
            itemList.add(itemRepository.save(Item.builder()
                    .itemType(itemTypeList.get(0))
                    .member(memberList.get(i))
                    .name("hat")
                    .state(2)
                    .build()));
            itemList.add(itemRepository.save(Item.builder()
                    .itemType(itemTypeList.get(0))
                    .member(memberList.get(i))
                    .name("glasses")
                    .state(2)
                    .build()));
            itemList.add(itemRepository.save(Item.builder()
                    .itemType(itemTypeList.get(0))
                    .member(memberList.get(i))
                    .name("wing")
                    .state(2)
                    .build()));
            itemList.add(itemRepository.save(Item.builder()
                    .itemType(itemTypeList.get(1))
                    .member(memberList.get(i))
                    .name("bed")
                    .state(2)
                    .build()));
            itemList.add(itemRepository.save(Item.builder()
                    .itemType(itemTypeList.get(1))
                    .member(memberList.get(i))
                    .name("table")
                    .state(2)
                    .build()));
            itemList.add(itemRepository.save(Item.builder()
                    .itemType(itemTypeList.get(1))
                    .member(memberList.get(i))
                    .name("lamp")
                    .state(2)
                    .build()));
            itemList.add(itemRepository.save(Item.builder()
                    .itemType(itemTypeList.get(1))
                    .member(memberList.get(i))
                    .name("drawer")
                    .state(2)
                    .build()));
            itemList.add(itemRepository.save(Item.builder()
                    .itemType(itemTypeList.get(1))
                    .member(memberList.get(i))
                    .name("clock")
                    .state(2)
                    .build()));
        }
        itemList.add(itemRepository.save(Item.builder()
                .itemType(itemTypeList.get(0))
                .member(memberList.get(4))
                .name("hat")
                .state(3)
                .build()));
        itemList.add(itemRepository.save(Item.builder()
                .itemType(itemTypeList.get(0))
                .member(memberList.get(4))
                .name("glasses")
                .state(3)
                .build()));
        itemList.add(itemRepository.save(Item.builder()
                .itemType(itemTypeList.get(0))
                .member(memberList.get(4))
                .name("wing")
                .state(3)
                .build()));

        itemRepository.saveAllAndFlush(itemList);
    }

    private void addItemType() {
        itemTypeRepository.save(ItemType.builder().itemTypeName("avatar").build());
        itemTypeRepository.save(ItemType.builder().itemTypeName("miniRoom").build());
    }

    private void addFace() {
        List<Member> memberList = memberRepository.findAll();

        // 내 동물상 추가
        List<Face> faceList = new ArrayList<>();

        faceList.add(Face.builder()
                .bearProbability(0.1)
                .catProbability(0.1)
                .dinoProbability(0.3)
                .dogProbability(0.15)
                .foxProbability(0.1)
                .rabbitProbability(0.25)
                .member(memberList.get(0))
                .build());

        faceList.add(Face.builder()
                .bearProbability(0.0)
                .catProbability(0.0)
                .dinoProbability(0.7)
                .dogProbability(0.0)
                .foxProbability(0.0)
                .rabbitProbability(0.3)
                .member(memberList.get(1))
                .build());

        faceList.add(Face.builder()
                .bearProbability(0.1)
                .catProbability(0.15)
                .dinoProbability(0.0)
                .dogProbability(0.0)
                .foxProbability(0.0)
                .rabbitProbability(0.75)
                .member(memberList.get(2))
                .build());

        faceList.add(Face.builder()
                .bearProbability(0.0)
                .catProbability(0.0)
                .dinoProbability(0.1)
                .dogProbability(0.9)
                .foxProbability(0.0)
                .rabbitProbability(0.0)
                .member(memberList.get(3))
                .build());

        faceList.add(Face.builder()
                .bearProbability(0.5)
                .catProbability(0.0)
                .dinoProbability(0.0)
                .dogProbability(0.0)
                .foxProbability(0.0)
                .rabbitProbability(0.95)
                .member(memberList.get(4))
                .build());

        faceRepository.saveAllAndFlush(faceList);

        // 선호하는 동물상 추가
        List<Face> preferFaceList = new ArrayList<>();

        preferFaceList.add(Face.builder()
                .bearProbability(0.1)
                .catProbability(0.2)
                .dinoProbability(0.0)
                .dogProbability(0.0)
                .foxProbability(0.5)
                .rabbitProbability(0.2)
                .member(memberList.get(0))
                .build());

        preferFaceList.add(Face.builder()
                .bearProbability(0.8)
                .catProbability(0.05)
                .dinoProbability(0.0)
                .dogProbability(0.0)
                .foxProbability(0.1)
                .rabbitProbability(0.5)
                .member(memberList.get(1))
                .build());

        preferFaceList.add(Face.builder()
                .bearProbability(0.0)
                .catProbability(0.0)
                .dinoProbability(0.7)
                .dogProbability(0.0)
                .foxProbability(0.1)
                .rabbitProbability(0.2)
                .member(memberList.get(2))
                .build());

        preferFaceList.add(Face.builder()
                .bearProbability(0.1)
                .catProbability(0.2)
                .dinoProbability(0.0)
                .dogProbability(0.0)
                .foxProbability(0.5)
                .rabbitProbability(0.2)
                .member(memberList.get(3))
                .build());

        preferFaceList.add(Face.builder()
                .bearProbability(0.9)
                .catProbability(0.0)
                .dinoProbability(0.5)
                .dogProbability(0.0)
                .foxProbability(0.0)
                .rabbitProbability(0.5)
                .member(memberList.get(4))
                .build());

        faceRepository.saveAllAndFlush(preferFaceList);

        // 멤버랑 연결
        faceList = faceRepository.findAll();
        for (int i = 0; i < memberList.size(); i++) {
            memberRepository.save(memberRepository.findByMemberId(memberList.get(i)
                    .getMemberId()).updateFace(faceList.get(i)).updatePreferFace(faceList.get(i + 5)));
        }
    }

    private void addMiniRoom() {
        List<Member> memberList = memberRepository.findAll();
        List<MiniRoom> miniRoomList = new ArrayList<>();
        for (int i = 0; i < memberList.size(); i++) {
            miniRoomList.add(MiniRoom.builder()
                    .member(memberList.get(i))
                    .stateMessage("미니룸 상태메세지는 140자까지 쓸 수 있어요 좀 길죠? 저는 40자예용")
                    .build());
        }
        miniRoomRepository.saveAllAndFlush(miniRoomList);
    }

    private void addFriend() {
        List<Member> memberList = memberRepository.findAll();
        List<Friend> friendList = new ArrayList<>();
        friendList.add(Friend.builder()
                .message("렉쮸꽁")
                .toMember(memberList.get(1))
                .fromMember(memberList.get(0))
                .state(1)
                .build());
        friendList.add(Friend.builder()
                .message("렉쮸꽁")
                .toMember(memberList.get(0))
                .fromMember(memberList.get(1))
                .state(1)
                .build());
        for (int i = 2; i < 4; i++) {
            friendList.add(Friend.builder()
                    .message("친구 대기즁 나랑 친구 안 하면 앙마")
                    .toMember(memberList.get(i))
                    .fromMember(memberList.get(0))
                    .state(0)
                    .build());
        }
        friendList.add(Friend.builder()
                .message("친구 거절 부탁 나랑 친구 하면 앙마")
                .toMember(memberList.get(4))
                .fromMember(memberList.get(0))
                .state(-1)
                .build());
        friendRepository.saveAllAndFlush(friendList);

    }

    private void addBoardLikes() {
        List<Member> memberList = memberRepository.findAll();
        List<Board> boardList = boardRepository.findAll();
        List<BoardLikes> boardLikesList = new ArrayList<>();
        for (int i = 0; i < memberList.size(); i++) {
            for (int j = 0; j < 5; j++) {
                boardLikesList.add(BoardLikes.builder()
                        .board(boardList.get(j))
                        .member(memberList.get(i))
                        .build());
            }
        }
        boardLikesRepository.saveAllAndFlush(boardLikesList);
    }

    private void addReply() {
        List<Member> memberList = memberRepository.findAll();
        List<Board> boardList = boardRepository.findAll();
        List<Reply> replyList = new ArrayList<>();
        for (int i = 0; i < 5; i++) {
            for (int j = 0; j < memberList.size(); j++) {
                replyList.add(Reply.builder()
                        .board(boardList.get(i))
                        .member(memberList.get(j))
                        .content("댓글은 70자까지 쓸 수 있떠용 웅웅 지금 똥먹었쥬 발가락빨았쥬 입냄새나쥬 나한테 졌쥬 응 입에 곰팡이 폈쥬 지금 완전 분하쥬")
                        .build());
            }
        }
        replyRepository.saveAllAndFlush(replyList);
    }

    private void addBoard() {
        List<Member> memberList = memberRepository.findAll();
        List<Board> boardList = new ArrayList<>();
        for (int i = 0; i < memberList.size(); i++) {
            for (int j = 0; j < 5; j++) {
                boardList.add(Board.builder()
                        .member(memberList.get(i))
                        .content("안녕하세요 140자를 채워보겠습니다 과연 얼마나 될까요? 지금은 서른자를 막 넘어가고 있는데요? 남은 걸 어떻게 채워야할지 감도 안 잡힙니다 죽을맛이에요 자소서도 쓰기 싫은데 내가 이걸 쓰고 있네 그래도 이건 재미잉네요 ㅎㅎ 밥 먹고 싶다 오늘 뭐 먹")
                        .build());
            }
        }
        boardRepository.saveAllAndFlush(boardList);
    }

    private void addMember() {
        List<Member> memberList = new ArrayList<>();

        Member member1 = Member.builder()
                .email("10yutae@gmail.com")
                .nickname("비동기마스터갓유태갓")
                .mbti("ISFP")
                .faceName("bear")
                .build();
        Member member2 = Member.builder()
                .email("10@gmail.com")
                .nickname("워녕공듀")
                .mbti("ENTJ")
                .faceName("dino")
                .build();
        Member member3 = Member.builder()
                .email("cherry@gmail.com")
                .nickname("킹갓제네럴체리")
                .mbti("INFP")
                .faceName("dog")
                .build();
        Member member4 = Member.builder()
                .email("sorainsunny@gmail.com")
                .nickname("소라는애들이놀려")
                .mbti("ENTP")
                .faceName("rabbit")
                .build();
        Member member5 = Member.builder()
                .email("jjjooooddy@gmail.com")
                .nickname("맑눈광융쥬쥬")
                .mbti("ISFP")
                .faceName("cat")
                .build();

        memberList.add(member1);
        memberList.add(member2);
        memberList.add(member3);
        memberList.add(member4);
        memberList.add(member5);

        memberRepository.saveAllAndFlush(memberList);
    }

    private void addChatRoom() {
        List<ChatRoom> chatRoomList = new ArrayList<>();

        // 유태 서니
        chatRoomList.add(ChatRoom.builder()
                .chatRoomId(1)
                .fromMemberId(memberRepository.findByMemberId(1L))
                .toMemberId(memberRepository.findByMemberId(4L))
                .build());
        // 채리 서니
        chatRoomList.add(ChatRoom.builder()
                .chatRoomId(2)
                .fromMemberId(memberRepository.findByMemberId(3L))
                .toMemberId(memberRepository.findByMemberId(4L))
                .build());
        // 워녕 주강
        chatRoomList.add(ChatRoom.builder()
                .chatRoomId(3)
                .fromMemberId(memberRepository.findByMemberId(2L))
                .toMemberId(memberRepository.findByMemberId(5L))
                .build());
        // 워녕 서니
        chatRoomList.add(ChatRoom.builder()
                .chatRoomId(4)
                .fromMemberId(memberRepository.findByMemberId(2L))
                .toMemberId(memberRepository.findByMemberId(4L))
                .build());
        // 체리 워녕
        chatRoomList.add(ChatRoom.builder()
                .chatRoomId(5)
                .fromMemberId(memberRepository.findByMemberId(3L))
                .toMemberId(memberRepository.findByMemberId(2L))
                .build());
        chatRoomRepository.saveAllAndFlush(chatRoomList);
    }

    private void addChat() {
        List<Chat> chatList = new ArrayList<>();

        chatList.add(Chat.builder()
                .createdTime(LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss.SSS")))
                .message("살려주세요")
                .chatRoom(chatRoomRepository.findByChatRoomId(2l))
                .fromMember(memberRepository.findByMemberId(3l))
                .build());
        chatList.add(Chat.builder()
                .createdTime(LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss.SSS")))
                .message("아아아아")
                .chatRoom(chatRoomRepository.findByChatRoomId(2l))
                .fromMember(memberRepository.findByMemberId(3l))
                .build());
        chatList.add(Chat.builder()
                .createdTime(LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss.SSS")))
                .message("아아앙")
                .chatRoom(chatRoomRepository.findByChatRoomId(2l))
                .fromMember(memberRepository.findByMemberId(3l))
                .build());
        chatList.add(Chat.builder()
                .createdTime(LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss.SSS")))
                .message("아아아")
                .chatRoom(chatRoomRepository.findByChatRoomId(2l))
                .fromMember(memberRepository.findByMemberId(3l))
                .build());
        chatList.add(Chat.builder()
                .createdTime(LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss.SSS")))
                .message("d")
                .chatRoom(chatRoomRepository.findByChatRoomId(2l))
                .fromMember(memberRepository.findByMemberId(3l))
                .build());
        chatList.add(Chat.builder()
                .createdTime(LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss.SSS")))
                .message("닉네임")
                .chatRoom(chatRoomRepository.findByChatRoomId(2l))
                .fromMember(memberRepository.findByMemberId(4l))
                .build());
        chatList.add(Chat.builder()
                .createdTime(LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss.SSS")))
                .message("어디갔어")
                .chatRoom(chatRoomRepository.findByChatRoomId(2l))
                .fromMember(memberRepository.findByMemberId(4l))
                .build());
        chatList.add(Chat.builder()
                .createdTime(LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss.SSS")))
                .message("d")
                .chatRoom(chatRoomRepository.findByChatRoomId(2l))
                .fromMember(memberRepository.findByMemberId(3l))
                .build());
        chatList.add(Chat.builder()
                .createdTime(LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss.SSS")))
                .message("아아아")
                .chatRoom(chatRoomRepository.findByChatRoomId(2l))
                .fromMember(memberRepository.findByMemberId(3l))
                .build());
        chatList.add(Chat.builder()
                .createdTime(LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss.SSS")))
                .message("ㅇㄹㅇㅇㄹ")
                .chatRoom(chatRoomRepository.findByChatRoomId(2l))
                .fromMember(memberRepository.findByMemberId(3l))
                .build());

        chatRepository.saveAllAndFlush(chatList);

    }

}

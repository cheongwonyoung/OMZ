package com.ssafy.omz;

import com.ssafy.omz.entity.*;
import com.ssafy.omz.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

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

    @Override
    public void run(String... args) throws Exception {
        // JPA DDL 설정 보고 실행 판단
        if (!DDL_CONFIG.equals("create")) return;

        addMember();
        addBoard();
        addReply();
        addBoardLikes();
        addFriend();
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
                .build();
        Member member2 = Member.builder()
                .email("10@gmail.com")
                .nickname("워녕공듀")
                .build();
        Member member3 = Member.builder()
                .email("cherry@gmail.com")
                .nickname("킹갓제네럴체리")
                .build();
        Member member4 = Member.builder()
                .email("sorainsunny@gmail.com")
                .nickname("소라는애들이놀려")
                .build();
        Member member5 = Member.builder()
                .email("jjjooooddy@gmail.com")
                .nickname("맑눈광융쥬쥬")
                .build();

        memberList.add(member1);
        memberList.add(member2);
        memberList.add(member3);
        memberList.add(member4);
        memberList.add(member5);

        memberRepository.saveAllAndFlush(memberList);
    }
}

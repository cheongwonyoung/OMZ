# 🐾 OMZ - 3D 모델링을 접목한 차세대 SNS

![main_omz_banner](/exec/images/main_omz_banner.png)
</br>

# 📺 소개 영상 보기: [UCC 링크](https://youtu.be/BpSWuHHP36s)

</br>

# 💾 프로젝트 진행 기간

2023.02.27(월) ~ 2023.04.07(금)

SSAFY 8기 2학기 공통프로젝트 - OMZ

</br>

# 📟 OMZ - 배경

사회에는 Y2K의 열풍이 불고 있습니다. Y2K란 Year 2000의 약자로 2000년대를 의미합니다. Y2K는 기존 세대에겐 추억의 향수를 불러오고, Z세대에겐 Y2K 패션의 특징인 화려한 스타일링과 과감한 컬러가 세대의 가치관과 부합하여 긍정적인 반응이 주를 이루었습니다.

OMZ는 이러한니즈를 충족시켜주기 위해 탄생한 차세대 SNS입니다. OMZ와 함께라면, SNS에서도 나만의 개성을 쉽게 표현할 수 있습니다!

</br></br>

# ✨ OMZ - 개요

<b><i>'매력 있는 건 같지만 우리는 모두 다르잖아'</i></b>

OMZ는 ‘오늘의 엠지’의 약자입니다.

OMZ는 기본적으로 채팅과 커뮤니티를 통해 타인과 소통한다는 점의 SNS 기능을 개발하였습니다. 또한,  본인 얼굴을 바탕으로 생성된 3D 동물 아바타와 3D 아이템을 이용한 아바타, 미니룸 커스텀을 이용해 나만의 개성을 표현할 수 있습니다. 또한, MBTI 정보 등으로 나와 꼭 맞는 친구를 추천 받을 수 있고 미니룸에서 나의 감정을 통해 배경 음악도 추천받을 수 있습니다.

</br></br>

# 🔎 주요 기능

## 🐶 관상 분석을 통한 동물 아바타

- 사진을 입력하면 강아지, 고양이, 여우, 곰, 토끼, 공룡 총 6가지의 동물로 분석해줘요.
- 가장 크게 나타난 확률을 통해 동물 직접 제작한 3D modeling 아바타를 생성해요.

## 🐱 친구 추천과 관리

- MBTI 궁합과 내가 좋아하는 동물상의 정도를 통해 잘 맞는 친구 3명을 추천해줘요.
- 친구의 닉네임을 통해 검색할 수도 있고 짧은 메세지와 함께 친구 신청을 보낼 수 있어요.
- 친구 수락, 거절, 끊기를 통해 친구를 관리할 수 있어요.

## 🦊 채팅과 커뮤니티

- 1:1 실시간 채팅을 통해 회원들끼리 소통할 수 있어요.
- 사진을 포함한 글을 쓰고 공유할 수 있어요.
- 좋아요 기능을 통해 좋아하는 글을 모아볼 수 있어요.

## 🐰 음악추천

- 상태 메세지를 작성하고, 오늘 듣고 싶은 노래를 선택하면 감정 분석에 기반한 음악 추천을 받을 수 있어요.
- 선택한 음악은 미니룸에서 동영상으로 볼 수 있어요.

## 🐻 미니룸 커스텀

- 3D 미니룸을 확대 및 이동하고, 조명을 켜볼 수 있어요.
- 3D 아이템으로 나만의 미니룸을 꾸며볼 수 있어요.
- 친구의 미니룸에 방명록을 작성할 수 있어요.

## 🦕 아바타 커스텀

- 3D 아이템으로 동물 아바타를 커스텀해 나만의 개성을 뽐내볼 수 있어요.
- 꾸민 내용으로 프로필 사진을 새롭게 만들 수 있어요.

</br></br>

# 🛠 주요 기술

| Frontend | Backend - Spring | Backend - Django | CI/CD |
| --- | --- | --- | --- |
| VSCode | IntelliJ IDE | Python 3.10.9 | AWS EC2 |
| react 18.2.0 | java 11.0.18 | Scikit-learn | Docker |
| node.js 18.15.0 LTS | Springboot | Tensorflow | Jenkins |
| vite 4.1.0 | gradle Openjdk 11.0.18+10 | SQLite | NGINX |
| typescript 4.9.3 | Spring Web |  | Webhook |
| three.js 0.150.1 | Spring Data JPA |  |  |
| react-three-fiber 8.12.0 | jUnit |  |  |
| blender 3.4.1  | Redis |  |  |
| react query 3.39.3 | WebSocket |  |  |
| react-router-dom 6.8.2 | MySQL 8.0.30 |  |  |
| tailwindcss 3.2.7 | swagger 2.0.0 |  |  |
| recoil 0.7.7 |  |  |  |

</br></br>

# ⚒ 서비스 아키텍처

![service](/exec/images/service.png)

</br></br>

# 🧸 OMZ 서비스 화면

## 1. 메인 & 회원가입

|메인 페이지|회원가입|
|-|-|
|![enterpage](/exec/images/EnterPage.gif)|![signup](/exec/images/SignUp.gif)|

## 2. New Friend

|친구 추천|                                                    |
|-|-|
| ![recommend_friend](/exec/images/Recommend.gif) |![recommend_friend2](/exec/images/Recommend_2.gif)|

## 3. My Friends 

|내 친구와 친구 신청 목록|친구 관리|
|-|-|
|![my_friend](/exec/images/MyFriends.gif)|![my_friend_accept](/exec/images/MyFriendsAccept.gif)|

## 4. Chatting

|친구와의 채팅|친구가 아닌 사람과의채팅|
|-|-|
|![chatting1](/exec/images/Chatting1.gif)|![chatting2](/exec/images/Chatting2.gif)|

## 5. Community

|글 작성, 검색, 좋아요와 회원별 글 목록|작성 글 관리|댓글 작성 & 관리|
|-|-|-|
|![community2](/exec/images/Community2.gif)|![community1](/exec/images/Community1.gif)|![community3](/exec/images/Community3.gif)|

## 6. MiniRoom

|음악 추천|커스텀|메인|
|-|-|-|
|![miniroom1](/exec/images/Miniroom1.gif)|![miniroom2](/exec/images/Miniroom2.gif)|![miniroom3](/exec/images/Miniroom3.gif)|

## 7. MyPage

|메인|정보 수정|
|-|-|
|![mypage1](/exec/images/MyPage1.gif)|![mypage2](/exec/images/MyPage2.gif)|



|커스텀|프로필 사진 촬영|
|-|-|
|![mypage3](/exec/images/MyPage3.gif)|![mypage4](/exec/images/MyPage4.gif)|

</br></br>

# 👩‍💻 팀원 역할 분배

|정채린|최유태|한선희|
|---|---|---|
|![image](https://avatars.githubusercontent.com/u/109324466?v=4)|![image](https://avatars.githubusercontent.com/u/109324458?v=4)|![image](https://avatars.githubusercontent.com/u/63505110?v=4)|
|팀원|부팀장|팀장|
|Frontend|Frontend|Backend|
| - 와이어프레임 총괄  <br>  - 프로젝트 초기 구조 정립  <br>  - 3D 아바타 커스텀 및 모션 적용  <br>  - StopmJS를 이용한 채팅 서비스 구현 및 무한 스크롤 구현  <br>  - 실시간 커뮤니티 구현  <br>  - GCS를 이용한 커뮤니티 & 회원 사진 관리   <br>  - React 폴더 구조 설계 | - three.js, react-three-fiber 로직 구현   <br>  - 아이템 커스텀 로직    <br>  - 새로운 친구, 친구 목록   <br>  - 카카오톡 소셜 로그인   <br>  - 회원가입 단계 관상분석 Teachable Machine 연동   <br>  - 미니룸 아이템 자체 제작   <br>  - 아바타 프로필 사진 생성   <br>  - 와이어프레임   <br>  - React 폴더 구조 설계 | - Redis Pub/Sub 메세징 기반 채팅 서비스 구현  <br>  - 커서 페이지네이션 구현  <br>  - scheduler를 이용한 Redis 캐시 전략 설계  <br>  - Redis  운영 관리  <br>  - 메인 페이지 애니메이션 제작  <br>  - Blender를 통한 UCC 제작  <br>  - ERD 설계  <br>  - Spring 파일 초기 구조 생성|

|강윤주|배서연|정원영|
|---|---|---|
|![image](https://avatars.githubusercontent.com/u/63834758?v=4)|![image](https://avatars.githubusercontent.com/u/101535851?v=4)|![image](https://avatars.githubusercontent.com/u/86768006?v=4)|
|팀원|팀원|팀원|
|Backend, Frontend, Devops|Backend|Backend|
|- 미니룸 정보 관리 및 아이템 커스텀 REST API 구현 <br> - 미니룸 정보 관리 및 아이템 커스텀 비동기 통신 <br> - Docker, Jenkins, Nginx를  이용한 EC2 서버 배포 <br> - CI/CD 파이프라인 구축 <br> - 와이어프레임 & ERD 설계 <br> - 발표 자료와 웹사이트에 쓰인 시각 자료 서치 | - 회원 정보와 친구 관리, 커뮤니티,  마이페이지 커스텀 REST API 구현 <br> - GCS를 이용한 커뮤니티 사진 관리  <br> - 미니룸 상태메세지 감정 분석 & 음악 추천 API 구현  <br> - UX/UI  <br> - Blender를  통한 동물 아바타 자체 제작  <br> - 와이어프레임 & ERD 설계  <br> - 발표 자료 제작| - 카카오톡 소셜 로그인 REST API 구현  <br> - selenium을 이용한 연예인 이미지 크롤링   <br> - Teachable Machine을 이용한 얼굴상 학습 및 동물상 분석   <br> - 회원 정보를 활용한 친구 추천 알고리즘 구현   <br> - GCS를 이용한 프로필 사진 관리   <br> - ERD 설계|

</br></br>

# 🔧 협업툴

- Git
- Notion
- JIRA
- MatterMost
- Webex

</br></br>

# 🔨 협업 환경

- Gitlab
    - 코드의 버전을 관리
    - 기능별 브랜치 관리
    - 기능이 끝나면 브랜치 삭제
- JIRA
    - 매주 목표량을 설정하여 Sprint 진행
    - 업무의 할당량을 정하여 Story Point를 설정하고 작업
- 회의
    - 매일 아침 Daily Scrum 진행
    - 빠른 소통과 신속한 대응 가능
- Notion
    - 회의가 있을때마다 회의록을 기록하여 보관
    - 기술확보 시, 다른 팀원들도 추후 따라할 수 있도록 보기 쉽게 작업 순서대로 정리
    - 컨벤션 정리
    - 간트차트 관리
    - 기능명세서 등 모두가 공유해야 하는 문서 관리


</br></br>

# ⛓ 프로젝트 파일 구조

## Frontend

```
src
 ├── api
 │ ├── chatting.ts
 │ ├── community.ts
 │ ├── index.ts
 │ ├── kakaoLogin.ts
 │ ├── member.ts
 │ ├── miniRoom.ts
 │ ├── myFriends.ts
 │ ├── myPage.ts
 │ ├── newFriend.ts
 │ └── youtube.ts
 ├── components
 │ ├── chatting
 │ ├── common
 │ ├── communityPag
 │ ├── login
 │ ├── miniRoom
 │ ├── myFriends
 │ ├── mypage
 │ ├── newFriends
 │ └── signUp
 ├── pages
 ├── recoil
 ├── App.css
 ├── App.tsx
 ├── index.css
 ├── main.tsx
 └── vite-env.d.ts
```

## Backend -Spring

```
omz
 ├── api
 ├── config
 │ ├── RedisConfig.java
 │ ├── StompHandler.java
 │ ├── StompWebSocketConfig.java
 │ ├── SwaggerConfig.java
 │ └── WebConfig.java
 ├── dto
 │ ├── req
 │ └── resp
 ├── entity
 ├── exception
 ├── interceptor
 ├── repository
 ├── service
 ├── util
 │ ├── scheduler
 │ └── ChatUtils.java
 ├── DataLoader.java
 └── OmzApplication.java
```

## Backend  - Django

```
django
 ├── data
 │ ├── anger.csv
 │ ├── happiness.csv
 │ ├── sadness.csv
 │ ├── song_similarity.csv
 │ ├── song_total.csv
 │ └── surprise.csv
 ├── music_choice
 ├── omz_django
 ├── reco_friend
 ├── trained_KoBERT
 ├── db.sqlite3
 ├── Dockerfile
 ├── manage.py
 ├── requirements.txt
 └── test.json
```
</br></br>

# 📰 프로젝트 산출물

- [ERD](https://lab.ssafy.com/s08-bigdata-recom-sub2/S08P22A705/-/blob/main/exec/%EC%82%B0%EC%B6%9C%EB%AC%BC/ERD.md)
- [DB dump 파일](https://lab.ssafy.com/s08-bigdata-recom-sub2/S08P22A705/-/blob/main/exec/%EC%84%9C%EC%9A%B8_7%EB%B0%98_A705_dump.sql)
- [깃 컨벤션](https://lab.ssafy.com/s08-bigdata-recom-sub2/S08P22A705/-/blob/main/exec/%EC%82%B0%EC%B6%9C%EB%AC%BC/%EA%B9%83%EC%BB%A8%EB%B2%A4%EC%85%98.md)
- [기능 명세서](https://lab.ssafy.com/s08-bigdata-recom-sub2/S08P22A705/-/blob/main/exec/%EC%82%B0%EC%B6%9C%EB%AC%BC/%EA%B8%B0%EB%8A%A5%EB%AA%85%EC%84%B8%EC%84%9C.pdf)
- [시스템 구성도](https://lab.ssafy.com/s08-bigdata-recom-sub2/S08P22A705/-/blob/main/exec/%EC%82%B0%EC%B6%9C%EB%AC%BC/%EC%8B%9C%EC%8A%A4%ED%85%9C%EA%B5%AC%EC%84%B1%EB%8F%84.md)
- [시연 시나리오](https://lab.ssafy.com/s08-bigdata-recom-sub2/S08P22A705/-/blob/main/exec/%EC%84%9C%EC%9A%B8_7%EB%B0%98_A705_%EC%8B%9C%EC%97%B0%EC%8B%9C%EB%82%98%EB%A6%AC%EC%98%A4.pdf)

# 📑 프로젝트 결과물

- [포팅 메뉴얼](https://lab.ssafy.com/s08-bigdata-recom-sub2/S08P22A705/-/blob/main/exec/%EC%84%9C%EC%9A%B8_7%EB%B0%98_A705_%ED%8F%AC%ED%8C%85%EB%A7%A4%EB%89%B4%EC%96%BC.pdf)
- [중간 발표 자료](https://lab.ssafy.com/s08-bigdata-recom-sub2/S08P22A705/-/blob/main/exec/%EC%82%B0%EC%B6%9C%EB%AC%BC/%EC%A4%91%EA%B0%84%EB%B0%9C%ED%91%9C%EC%9E%A5%ED%91%9C.pdf)
- [최종 발표 자료](https://lab.ssafy.com/s08-bigdata-recom-sub2/S08P22A705/-/blob/main/exec/%EC%82%B0%EC%B6%9C%EB%AC%BC/%EC%B5%9C%EC%A2%85%EB%B0%9C%ED%91%9C%EC%9E%A5%ED%91%9C.pdf)

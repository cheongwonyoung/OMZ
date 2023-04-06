import Camera3D from "../components/common/Camera3D";
import BottomBar from "../components/miniRoom/BottomBar";
import Heart from "../components/miniRoom/Heart";
import MusicModal from "../components/miniRoom/MusicModal";
import StateMessage from "../components/miniRoom/StateMessage";
import { useEffect, useState } from "react";
import { images } from "../assets/images";
// import { MiniroomBeta2 } from "../assets/3DMiniRoom/MiniroomBeta2";
import { MiniroomFinal } from "../assets/3DMiniRoom/MiniroomFinal";
// import TitleBar from "../components/common/TitleBar";
import BackBtn from "../components/common/BackBtn";
import ModalBlackBg from "../components/common/ModalBlackBg";
import GuestBookModal from "../components/miniRoom/GuestBookModal";
import YoutubeBgm from "../components/miniRoom/YoutubeBgm";

import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userStatus, userToken } from "../recoil/userAtom";
import { useNavigate } from "react-router-dom";
import {
  getStateMessage,
  getLikes,
  getMiniRoom,
  getBGM,
} from "../api/miniRoom";
import { getMyCustomInfo, getMyPageInfos } from "../api/myPage";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { Custom_dog } from "../assets/3DAvatar/Custom_dog";
import { Custom_cat } from "../assets/3DAvatar/Custom_cat";
import { Custom_dino } from "../assets/3DAvatar/Custom_dino";
import { Custom_fox } from "../assets/3DAvatar/Custom_fox";
import { Custom_bear } from "../assets/3DAvatar/Custom_bear";
import { Custom_rabbit } from "../assets/3DAvatar/Custom_rabbit";

export default function MiniRoomPage() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/main");
  };

  // BGM 설정 모달
  const [isMusic, setIsMusic] = useState(false);
  const closeMusic = () => {
    setIsMusic(false);
  };

  // 닉네임 조회
  const memberId = useRecoilValue(userStatus).id;
  const miniRoomId = useParams().id;
  const [nickName, setNickName] = useState("Cutie");

  useQuery("info", () => getMyPageInfos(Number(miniRoomId)), {
    onSuccess(data) {
      setNickName(data.data.member.nickname);
      // takeBGM.mutate(data.data.miniRoomId);
    },
    staleTime: 0,
  });

  // Youtube 확인용 노래 제목
  const [bgm, setBgm] = useState("hype boy");

  const { refetch: bgmRefetch } = useQuery(
    "setbgm",
    () => getBGM(Number(miniRoomId)),
    {
      onSuccess(data) {
        console.log(data.data);
        setBgm(data.data.title + " - " + data.data.singer);
      },
      staleTime: 0,
      // refetchOnMount: false,
    }
  );

  // 방명록 모달
  const [isGuestBook, setIsGuestBook] = useState(false);
  const closeGuestBook = () => {
    setIsGuestBook(false);
  };
  const openGuestBook = () => {
    setIsGuestBook(true);
  };

  // 상태 메세지 조회
  const [message, setMessage] = useState("");
  const handleMessage = (e: any) => {
    setMessage(e.target.value);
  };

  useQuery("statemessage", () => getStateMessage(String(miniRoomId)), {
    onSuccess(data) {
      const msg = data.data.stateMessage;
      if (msg == null) setMessage(" . . . ");
      else setMessage(msg);
    },
    staleTime: 0,
  });

  // 미니룸 불러오기
  const [itemStatus, setItemStatus] = useState<{ [key: string]: string }>({
    bed: "0",
    table: "0",
    lamp: "0",
    drawer: "0",
    clock: "0",
    sofa: "0",
  });

  useQuery(
    ["miniRoomInfo", miniRoomId],
    () => getMiniRoom(Number(miniRoomId)),
    {
      onSuccess(data) {
        console.log(data.data);

        const existingMiniRoom: { [key: string]: string } = {};
        for (const custom of data.data) {
          console.log(custom.name);
          existingMiniRoom[custom.name] = custom.state.toString();
        }
        setItemStatus(existingMiniRoom);
        console.log(existingMiniRoom);
      },
      staleTime: 0,
    }
  );

  // 좋아요 기능
  const [heart, setHeart] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const { refetch } = useQuery(
    "likes",
    () => getLikes(Number(miniRoomId), Number(memberId)),
    {
      onSuccess(data) {
        setHeart(data.data.likes);
        setIsLiked(data.data.isLiked);
      },
    }
  );

  useEffect(() => {
    refetch();
  }, []);

  const [animal, setAnimal] = useState("");

  const [customStatus, setCustomStatus] = useState<{ [key: string]: number }>({
    hat: 0,
    glasses: 0,
    wing: 0,
  });

  useQuery(
    ["customUpdate", miniRoomId],
    () => getMyCustomInfo(Number(miniRoomId)),
    {
      onSuccess(data) {
        setAnimal(data.data.faceName);
        const existingCustom: { [key: string]: number } = {};
        for (const custom of data.data.items) {
          existingCustom[custom.name] = custom.state;
        }
        setCustomStatus(existingCustom);
      },
      staleTime: 0,
    }
  );

  const showAvatar = () => {
    switch (animal) {
      case "토끼":
        return <Custom_rabbit position={[0, 0, 0]} itemStatus={customStatus} />;
      case "곰":
        return <Custom_bear position={[0, 0.3, 0]} itemStatus={customStatus} />;
      case "여우":
        return <Custom_fox position={[0, 0.3, 0]} itemStatus={customStatus} />;
      case "공룡":
        return <Custom_dino position={[0, 0.3, 0]} itemStatus={customStatus} />;
      case "고양이":
        return <Custom_cat position={[0, 0.3, 0]} itemStatus={customStatus} />;
      case "강아지":
        return <Custom_dog position={[0, 0.3, 0]} itemStatus={customStatus} />;
    }
  };

  return (
    <div className=" w-full flex flex-col items-center">
      {isMusic && (
        <ModalBlackBg
          closeModal={closeMusic}
          modal={
            <MusicModal
              message={message}
              closeMusic={closeMusic}
              bgmRefetch={bgmRefetch}
            />
          }
        />
      )}
      {isGuestBook && (
        <ModalBlackBg
          closeModal={closeGuestBook}
          modal={<GuestBookModal closeGuestBook={closeGuestBook} />}
        />
      )}
      <div className="flex w-11/12 justify-between items-center p-2.5 mt-2 ">
        <div className="flex items-center">
          <img
            src={images.mini_room_img}
            alt=""
            className="h-12 aspect-square mr-4"
          />
          <p className="font-bold text-xl">{nickName}</p>
          <p className="title text-xl"> 's MiniRoom</p>
        </div>
        <div className="w-10 h-10 flex content-center">
          <BackBtn goBack={goBack} />
        </div>
      </div>
      <div className="w-full max-w-3xl flex flex-col items-center mt-2.5 px-4">
        <div className="flex gap-8">
          <Heart heart={heart} isLiked={isLiked} refetch={refetch} />
          <BottomBar openGuestBook={openGuestBook} />
        </div>
        <div className="mt-5 w-10/12">
          <StateMessage handleMessage={handleMessage} message={message} />
        </div>
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 place-content-center gap-3 w-full">
          <div className="gap-5 mt-5 flex flex-col items-center justify-center">
            <div className="relative">
              <img
                src={images.player_img}
                alt=""
                className="w-72 rounded-xl drop-shadow-2xl"
              />
              <div className="absolute top-3 bottom-0 opacity-75">
                <YoutubeBgm title={bgm} />
              </div>
            </div>
            <div
              onClick={() => setIsMusic(true)}
              className="text-center hover:scale-105 cursor-pointer gap-3 py-2 w-72 rounded-[10px] bg-white/50 border border-black px-10 mt-1 flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faMusic} className="text-xl" />
              <p>bgm 추천</p>
              <FontAwesomeIcon icon={faMusic} className="text-xl" />
            </div>
          </div>
          <div className="h-96 w-96 aspect-square mt-5">
            <Camera3D
              Avatar={showAvatar()}
              MiniRoom={
                <MiniroomFinal
                  position={[20, -25, -20]}
                  itemStatus={itemStatus}
                />
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

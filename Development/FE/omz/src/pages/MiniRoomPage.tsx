import { MiniRoom } from "../assets/3DMiniRoom/MiniRoom";
import Camera3D from "../components/common/Camera3D";
import BottomBar from "../components/miniRoom/BottomBar";
import Heart from "../components/miniRoom/Heart";
import MusicModal from "../components/miniRoom/MusicModal";
import StateMessage from "../components/miniRoom/StateMessage";
import { useEffect, useState } from "react";
import { images } from "../assets/images";
import { MiniroomBeta2 } from "../assets/3DMiniRoom/MiniroomBeta2";
// import TitleBar from "../components/common/TitleBar";
import BackBtn from "../components/common/BackBtn";
import ModalBlackBg from "../components/common/ModalBlackBg";
import GuestBookModal from "../components/miniRoom/GuestBookModal";
import YoutubeBgm from "../components/miniRoom/YoutubeBgm";
import { getMemberInfo } from "../api/member";
import { useMutation, useQuery } from "react-query";
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
import { getMyPageInfos } from "../api/myPage";
// import { Scene } from "../assets/3DMiniRoom/Scene";
// import { MiniroomBeta3 } from "../assets/3DMiniRoom/MiniroomBeta3";
import { MiniroomBeta4 } from "../assets/3DMiniRoom/MiniroomBeta4";

export default function MiniRoomPage() {
  const goBack = () => {
    const navigate = useNavigate();
    navigate("/");
  };

  // BGM 설정 모달
  const [isMusic, setIsMusic] = useState(false);
  const closeMusic = () => {
    setIsMusic(false);
  };

  // 닉네임 조회
  const id = useParams().id;
  const memberId = useRecoilValue(userStatus).id;
  // const access_token = useRecoilValue(userToken).access_token;
  const [nickName, setNickName] = useState("Cutie BBatie");
  const [miniRoomId, setMiniRoomId] = useState(0);

  useQuery("info", () => getMyPageInfos(Number(memberId)), {
    onSuccess(data) {
      setNickName(data.data.member.nickname);
      console.log(data.data.member.nickname, " : 닉넴 성공");
      setMiniRoomId(data.data.miniRoomId);
      // takeBGM.mutate(data.data.miniRoomId);
      console.log(data.data.miniRoomId, "미니룸아이디 성공");
    },
    staleTime: 0,
  });

  // BGM 조회
  // const ["title", setTitle] = useState("");
  // const takeBGM = useMutation((id) => getBGM(Number(id)), {
  //   onSuccess(data, variables, context) {
  //     console.log(data);
  //   },
  // });

  // Youtube 확인용 노래 제목
  const [bgm, setBgm] = useState("hype boy");
  useQuery("setbgm", () => getBGM(Number(memberId)), {
    onSuccess(data) {
      // console.log(data.data);
      setBgm(data.data.title + " - " + data.data.singer);
    },
    staleTime: 0,
    // refetchOnMount: false,
  });

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

  useQuery("statemessage", () => getStateMessage(String(id)), {
    onSuccess(data) {
      const msg = data.data.stateMessage;
      // console.log("상메 조회 성공  ", msg);
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

  useQuery(["customUpdate", id], () => getMiniRoom(Number(id)), {
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
  });

  // 좋아요 기능
  const [heart, setHeart] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const { refetch } = useQuery(
    "likes",
    () => getLikes(Number(id), Number(memberId)),
    {
      onSuccess(data) {
        // console.log("좋아요 수 조회 성공 >> " + data.data.likes + " " + data.data.isLiked);
        setHeart(data.data.likes);
        setIsLiked(data.data.isLiked);
      },
    }
  );

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div className=" w-full flex flex-col items-center">
      {/* <div className=" w-full h-25 sm:h-5 flex flex-col items-center "> */}
      {isMusic && (
        <ModalBlackBg
          modal={<MusicModal message={message} closeMusic={closeMusic} />}
        />
      )}
      {isGuestBook && (
        <ModalBlackBg
          modal={<GuestBookModal closeGuestBook={closeGuestBook} />}
        />
      )}
      {/* <TitleBar icon={images.mini_room_img} title={nickName} goto={"/"} /> */}
      <div className="flex w-11/12 justify-between items-center p-2.5 mt-2 ">
        <div className="flex items-center">
          <img
            src={images.mini_room_img}
            alt=""
            className="h-12 aspect-square mr-4"
          />
          <p className="font-bold text-xl">{nickName}</p>
          <p className="title font-bold text-xl"> 's MiniRoom</p>
        </div>
        <div className="w-10 h-10 flex content-center">
          <BackBtn goBack={goBack} />
        </div>
      </div>
      <div className="w-full flex flex-col items-center px-4">
        <div className="mt-8 w-full">
          <StateMessage handleMessage={handleMessage} message={message} />
        </div>
        <button
          onClick={() => setIsMusic(true)}
          className="bg-pink-300 rounded-md w-40 h]-10 font-bold text-white mt-4 shadow-xl"
        >
          BGM 선택
        </button>
        <div className="relative">
          <img
            src={images.player_img}
            alt=""
            className="w-72 pt-5 rounded-xl drop-shadow-2xl"
          />
          <div className="absolute top-10 bottom-0 left-10 opacity-75">
            <YoutubeBgm title={bgm} />
          </div>
        </div>
        <div className="mt-8">
          <Heart heart={heart} isLiked={isLiked} refetch={refetch} />
        </div>
        <div className="h-10/12 w-2/3 aspect-square">
          <Camera3D
            MiniRoom={
              <MiniroomBeta4
                position={[20, -25, -20]}
                // itemStatus={{ table: "2" }}
                itemStatus={itemStatus}
              />
            }
          />
          {/* <Camera3D MiniRoom={<Scene position={[20, -25, -20]} />} /> */}
          {/* <Camera3D MiniRoom={<MiniRoom position={[15, -15, -15]} />} /> */}
        </div>
        <div className="mt-8">
          <BottomBar openGuestBook={openGuestBook} />
        </div>
      </div>
    </div>
  );
}

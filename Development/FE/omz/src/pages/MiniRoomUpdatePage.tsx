import { images } from "../assets/images";
import Camera3D from "../components/common/Camera3D";
import TitleBar from "../components/common/TitleBar";
import ItemBox from "../components/miniRoom/ItemBox";
import NextBtn from "../components/signUp/NextBtn";
import { useState } from "react";
import { MiniroomBeta4 } from "../assets/3DMiniRoom/MiniroomBeta4";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import { getMemberInfo } from "../api/member";
import { userStatus, userToken } from "../recoil/userAtom";
import { useMutation, useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { updateMiniRoom, getMiniRoom } from "../api/miniRoom";

export default function MiniRoomUpdatePage() {
  const navigate = useNavigate();
  const memberId = useRecoilValue(userStatus).id;

  const [itemStatus, setItemStatus] = useState<{ [key: string]: string }>({
    table: "0",
    lamp: "0",
    bed: "0",
    drawer: "0",
    sofa: "0",
  });

  // 미니룸 불러오기
  useQuery(["customUpdate", memberId], () => getMiniRoom(Number(memberId)), {
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

  // 닉네임 조회
  const access_token = useRecoilValue(userToken).access_token;
  const [nickName, setNickName] = useState("Cutie");
  useQuery("nickname", () => getMemberInfo(String(access_token)), {
    onSuccess(data) {
      // console.log(data.data.nickname);
      setNickName(data.data.nickname + " ");
    },
    staleTime: 0,
  });

  const submitChange = () => {
    const data = [];
    const itemNames = Object.keys(itemStatus);
    for (const name of itemNames) {
      data.push({ name: name, state: parseInt(itemStatus[name], 10) });
    }
    console.log(data);
    // TODO 여기 이거 제출하면 댐
    changeMiniRoom.mutate(data);
  };

  const changeMiniRoom = useMutation(
    (body: { name: string; state: number }[]) => updateMiniRoom(memberId, body),
    {
      onSuccess() {
        alert("미니룸 수정 성공");
        navigate("/miniroom/" + memberId);
      },
    }
  );

  const handleItems = (item: string) => {
    const variety = item.split("_")[0];
    const num = item.split("_")[1];
    console.log(itemStatus);
    setItemStatus({ ...itemStatus, [variety]: num });
  };

  return (
    <div className="w-full px-4 flex flex-col items-center">
      {/* <TitleBar
        icon={images.mini_room_img}
        title={"000님의 MiniRoom"}
        goto={`/miniroom/${memberId}`}
      /> */}
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
          {/* <BackBtn goBack={goBack} /> */}
        </div>
      </div>
      <div className="h-72 w-72 aspect-square">
        {/* <Camera3D
          MiniRoom={
            <MiniroomBeta position={[20, -25, -20]} itemStatus={itemStatus} />
          }
        /> */}
        {/* <Camera3D
          MiniRoom={
            <MiniroomBeta2 position={[20, -25, -20]} itemStatus={itemStatus} />
          }
        /> */}
        <Camera3D
          MiniRoom={
            <MiniroomBeta4 position={[20, -25, -20]} itemStatus={itemStatus} />
          }
        />
      </div>
      <NextBtn comment="저장" logic={() => submitChange()} />
      <div className="w-full h-1/4 mt-8">
        <ItemBox handleItems={handleItems} />
      </div>
    </div>
  );
}

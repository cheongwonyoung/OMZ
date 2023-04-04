import UpdateItem from "./UpdateItem";
import { useState } from "react";
import UpdateAnimal from "./UpdateAnimal";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useMutation, useQuery } from "react-query";
import {
  getMyUserInfo,
  updateMyMbti,
  updateMyName,
  updateMyPreference,
} from "../../api/myPage";
import { useRecoilValue } from "recoil";
import { userStatus } from "../../recoil/userAtom";
import { data } from "@tensorflow/tfjs";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const mbtiList = [
  "INFP",
  "INFJ",
  "INTP",
  "INTJ",
  "ISFP",
  "ISFJ",
  "ISTP",
  "ISTJ",
  "ENFP",
  "ENFJ",
  "ENTP",
  "ENTJ",
  "ESFP",
  "ESFJ",
  "ESTP",
  "ESTJ",
];

export default function MyPageUpdateForm() {
  const [name, setName] = useState("");
  const handleName = (e: any) => {
    setName(e.target.value);
  };
  const [mbti, setMbti] = useState("");
  const handleMbti = (e: any) => {
    setMbti(e.target.value);
  };

  interface AnimalPrefer {
    [key: string]: number;
  }
  const [animalPrefer, setAnimalPrefer] = useState<AnimalPrefer>({
    dog: 0,
    cat: 0,
    bear: 0,
    fox: 0,
    rabbit: 0,
    dino: 0,
  });

  const changePrefer = (e: any) => {
    const name = e.target.id;
    const value = Number(e.target.value);
    setAnimalPrefer({ ...animalPrefer, [name]: value });
  };

  const memberId = useRecoilValue(userStatus).id;

  useQuery("mypageUpdate", () => getMyUserInfo(memberId), {
    onSuccess(data) {
      setName(data.data.nickname);
      setMbti(data.data.mbti);
      setAnimalPrefer(data.data.preferFace);
    },
    staleTime: 0,
  });

  // useEffect(() => {
  //   refetch();
  // }, []);

  const nameInp = (
    <input
      type="text"
      className=" focus:outline-none bg-transparent"
      name="name"
      value={name}
      onChange={(e) => handleName(e)}
      maxLength={10}
    />
  );

  const [isDrop, setIsDrop] = useState(false);

  const mbtiInp = (
    <div className="relative w-full">
      <div className="flex w-full justify-between items-center">
        <p>{mbti}</p>
        <FontAwesomeIcon
          icon={faChevronDown}
          onClick={() => setIsDrop((prev) => !prev)}
        />
      </div>
      {isDrop && (
        <div className="w-full top-9 px-4 py-2 gap-1 flex flex-col absolute border border-solid border-purple-200 bg-white rounded-xl h-96 overflow-y-scroll">
          {mbtiList.map((item) => (
            <button
              key={uuidv4()}
              className="hover:bg-red-300 rounded-xl p-4"
              value={item}
              name="mbti"
              onClick={(e) => {
                handleMbti(e);
                setIsDrop((prev) => !prev);
              }}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );

  const animalInp = <p>선호하는 동물상</p>;

  const changeName = useMutation(() => updateMyName(memberId, name), {
    onSuccess: () => {
      toast.success("닉네임이 수정되었습니다.", {
        autoClose: 3000,
        position: toast.POSITION.TOP_RIGHT,
      });
    },
  });
  const updateName = changeName.mutate;
  const changeMbti = useMutation(() => updateMyMbti(memberId, mbti), {
    onSuccess: () => {
      toast.success("MBTI가 수정되었습니다.", {
        autoClose: 3000,
        position: toast.POSITION.TOP_RIGHT,
      });
    },
  });
  const updateMbti = changeMbti.mutate;
  const changePreference = useMutation(
    () => updateMyPreference(memberId, animalPrefer),
    {
      onSuccess: () => {
        toast.success("선호하는 동물상이 수정되었습니다.", {
          autoClose: 3000,
          position: toast.POSITION.TOP_RIGHT,
        });
      },
    }
  );
  const updatePreference = changePreference.mutate;
  return (
    <div className="max-w-3xl p-8">
      <ToastContainer />
      <p className="font-bold text-2xl mb-8 ml-1">회원 정보 수정</p>
      <div className="flex flex-col gap-4">
        <UpdateItem tag={nameInp} logic={updateName} />
        <UpdateItem tag={mbtiInp} logic={updateMbti} />
        <UpdateItem tag={animalInp} logic={updatePreference} />
      </div>
      <UpdateAnimal animalPrefer={animalPrefer} changePrefer={changePrefer} />
    </div>
  );
}

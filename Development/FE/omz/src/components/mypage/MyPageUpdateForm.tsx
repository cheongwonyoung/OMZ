import UpdateItem from "./UpdateItem";
import { useState } from "react";
import UpdateAnimal from "./UpdateAnimal";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useMutation, useQuery } from "react-query";
import {
  getMyUserInfo,
  updateMyMbti,
  updateMyName,
  updateMyPreference,
} from "../../api/myPage";
import { useRecoilValue } from "recoil";
import { userStatus } from "../../recoil/userAtom";
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
  });

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

  const changeName = useMutation(() => updateMyName(memberId, name));
  const updateName = changeName.mutate;
  const changeMbti = useMutation(() => updateMyMbti(memberId, mbti));
  const updateMbti = changeMbti.mutate;
  const changePreference = useMutation(() =>
    updateMyPreference(memberId, animalPrefer)
  );
  const updatePreference = changePreference.mutate;
  return (
    <div className="w-full p-8">
      <p className="font-bold text-2xl mb-8">내 정보 수정</p>
      <UpdateItem tag={nameInp} logic={updateName} />
      <UpdateItem tag={mbtiInp} logic={updateMbti} />
      <UpdateItem tag={animalInp} logic={updatePreference} />
      <UpdateAnimal animalPrefer={animalPrefer} changePrefer={changePrefer} />
    </div>
  );
}

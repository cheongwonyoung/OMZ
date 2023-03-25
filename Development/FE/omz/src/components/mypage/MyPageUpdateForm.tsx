import UpdateItem from "./UpdateItem";
import { useState } from "react";
import UpdateAnimal from "./UpdateAnimal";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faChevronDown } from "@fortawesome/free-solid-svg-icons";
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
  const [myInfos, setMyInfos] = useState<{ [key: string]: string }>({
    name: "최윾태",
    mbti: "ISFP",
  });

  const handleMyInfos = (e: any) => {
    e.preventDefault();
    setMyInfos({ ...myInfos, [e.target.name]: e.target.value });
    console.log(e.target.value);
    console.log(e.target.name);
  };

  const nameInp = (
    <input
      type="text"
      className=" focus:outline-none bg-transparent"
      name="name"
      value={myInfos.name}
      onChange={(e) => handleMyInfos(e)}
      maxLength={10}
    />
  );

  const [isDrop, setIsDrop] = useState(false);

  const mbtiInp = (
    <div className="relative w-full">
      <div className="flex w-full justify-between items-center">
        <p>{myInfos.mbti}</p>
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
                handleMyInfos(e);
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

  return (
    <div className="w-full p-8">
      <p className="font-bold text-2xl mb-8">내 정보 수정</p>
      <UpdateItem tag={nameInp} />
      <UpdateItem tag={mbtiInp} />
      <UpdateItem tag={animalInp} />
      <UpdateAnimal />
    </div>
  );
}

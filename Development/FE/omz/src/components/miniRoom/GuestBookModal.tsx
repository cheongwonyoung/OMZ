import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

type Props = {
  closeGuestBook(): void;
};

const dummy = [
  "재밌당 요기 어케했니",
  "난 이쪽으로 가겠어",
  "난 저쪽으로 가겠어",
  "찍먹하고 갑니다 ",
  "재밌당 요기 어케했니",
  "난 이쪽으로 가겠어",
  "난 저쪽으로 가겠어",
  "찍먹하고 갑니다 ",
  "재밌당 요기 어케했니",
  "난 이쪽으로 가겠어",
  "난 저쪽으로 가겠어",
  "찍먹하고 갑니다 ",
];

export default function GuestBookModal({ closeGuestBook }: Props) {
  const letter = dummy.map((talk, index) => {
    switch (index % 2) {
      case 1:
        return (
          <div className="flex w-full justify-end" key={uuidv4()}>
            <button className="bg-purple-500 mr-8">삭제</button>
            <span>{talk}</span>
          </div>
        );
      default:
        return (
          <div className="flex w-full" key={uuidv4()}>
            <p>{talk}</p>
            <button className="bg-purple-500 ml-8">삭제</button>
          </div>
        );
    }
  });

  return (
    <div className="w-full h-3/4 flex flex-col items-center pt-8">
      <FontAwesomeIcon
        icon={faXmark}
        className="absolute right-4 top-4"
        onClick={closeGuestBook}
      />
      <p className="text-2xl text-purple-500">방명록</p>
      <div className="flex flex-col p-4 gap-8 max-h-96 sm:max-h-full overflow-scroll">
        {letter}
      </div>
    </div>
  );
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faTrashCan,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState, useRef } from "react";
import { useMutation, useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userStatus } from "../../recoil/userAtom";
import { images } from "../../assets/images";
import { v4 as uuidv4 } from "uuid";
import {
  getGuestBooks,
  deleteGuestBook,
  writeGuestBook,
} from "../../api/miniRoom";

type GuestBook = {
  [key: string]: any;
};

type Props = {
  closeGuestBook(): void;
};

// const IMAGE_ROOT = import.meta.env.VITE_APP_IMAGE_ROOT;

export default function GuestBookModal({ closeGuestBook }: Props) {
  const friendId = useParams().id;
  const myId = useRecoilValue(userStatus).id;

  // 방명록 조회
  const [list, setList] = useState([{}]);
  const { refetch } = useQuery(
    "guestbooks",
    () => getGuestBooks(Number(friendId)),
    {
      onSuccess(data) {
        setList([...data.data]);
      },
    }
  );

  // 방명록 삭제
  const deleteTalk = async (guestBookId: Number) => {
    clickDelete.mutate(guestBookId);
  };

  const clickDelete = useMutation(
    (guestBookId: Number) => deleteGuestBook(Number(guestBookId)),
    {
      onSuccess: () => {
        console.log("삭제 성공");
        refetch();
      },
    }
  );

  // 방명록 등록
  const [content, setContent] = useState("");

  const handleWrite = () => {
    const memberId = myId;
    writeContent.mutate({ content, friendId, memberId });
  };

  const writeContent = useMutation(
    (item: { content: string; friendId: number; memberId: number }) =>
      writeGuestBook(item),
    {
      onSuccess: () => {
        console.log("등록 성공");
        setContent("");
        refetch();
      },
    }
  );

  useEffect(() => {
    refetch();
  }, []);

  const letter = list.map((talk: GuestBook, index: number) => {
    switch (index % 2) {
      case 1:
        return (
          <div className="flex justify-end " key={uuidv4()}>
            <div className="foot-print flex flex-col justify-self-start pt-5">
              <span className="flex justify-center my-auto">
                {talk.content}
              </span>
              {myId === talk.memberId && (
                <button
                  className="mb-7"
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteTalk(talk.guestBookId);
                  }}
                >
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    style={{ color: "#99a6bd" }}
                    className="cursor-pointer"
                  />
                </button>
              )}
            </div>
          </div>
        );
      default:
        return (
          <div className="flex" key={uuidv4()}>
            <div className="foot-print flex flex-col justify-self-start pt-5">
              <span className="flex justify-center my-auto">
                {talk.content}
              </span>
              {myId === talk.memberId && (
                <button className="mb-7" onClick={() => handleWrite()}>
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    style={{ color: "#99a6bd" }}
                    className="cursor-pointer"
                  />
                </button>
              )}
            </div>
          </div>
        );
    }
  });

  return (
    <div className="bg-gray-900/0 w-96 h-[70vh] flex flex-col items-center pt-8">
      {/* // <div className="bg-gray-900/0 w-96 h-[60vh] flex flex-col items-center pt-8"> */}
      <FontAwesomeIcon
        icon={faXmark}
        className="absolute right-4 top-4"
        onClick={closeGuestBook}
      />
      {/* <p className="text-2xl text-purple-500">방명록</p> */}

      <div className="flex flex-col p-5 gap-8 w-full xl:max-h-96 sm:max-h-full overflow-y-scroll scroll-bar">
        <div className="flex">
          <div className="foot-print flex flex-col justify-center">
            <span className="flex justify-center my-auto ">
              <input
                type="text"
                className="focus:outline-none bg-transparent text-center"
                placeholder="발자국을 남겨보세요"
                maxLength={140}
                // ref={guestBookInputRef}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </span>
            <button
              className="flex justify-center mb-10"
              onClick={() => handleWrite()}
            >
              <FontAwesomeIcon
                icon={faPaperPlane}
                beatFade
                className="cursor-pointer pt-1"
                style={{ color: "gray" }}
              />
            </button>
          </div>
        </div>
        {letter}
        {/* 방명록 등록하기 start*/}
        {/* 방명록 등록하기 end*/}
      </div>
    </div>
  );
}

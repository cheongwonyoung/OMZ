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
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import {
  getGuestBooks,
  deleteGuestBook,
  writeGuestBook,
} from "../../api/miniRoom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";

type GuestBook = {
  [key: string]: any;
};

type Props = {
  closeGuestBook(): void;
};

// const IMAGE_ROOT = import.meta.env.VITE_APP_IMAGE_ROOT;

export default function GuestBookModal({ closeGuestBook }: Props) {
  const navigate = useNavigate();

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
        toast.success("방명록이 삭제되었습니다.", {
          autoClose: 3000,
          position: toast.POSITION.TOP_RIGHT,
        });
        refetch();
      },
    }
  );

  // 방명록 등록
  const [content, setContent] = useState("");

  const handleWrite = () => {
    const memberId = myId;
    if (friendId && content.length > 0) {
      writeContent.mutate({ content, friendId: Number(friendId), memberId });
    } else {
      toast.warn("내용을 작성해주세요.", {
        autoClose: 3000,
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const writeContent = useMutation(
    (item: { content: string; friendId: number; memberId: number }) =>
      writeGuestBook(item),
    {
      onSuccess: () => {
        toast.success("방명록이 작성되었습니다.", {
          autoClose: 3000,
          position: toast.POSITION.TOP_RIGHT,
        });
        setContent("");
        refetch();
      },
    }
  );

  const clickHandle = (memberId: number) => {
    navigate(`/miniroom/${memberId}`, { state: { memberId } });
    closeGuestBook();
  };

  useEffect(() => {
    refetch();
  }, []);

  const letter = list.map((talk: GuestBook, index: number) => {
    switch (index % 2) {
      case 1:
        return (
          <div
            className="flex w-full justify-end cursor-pointer"
            key={uuidv4()}
          >
            <ToastContainer />
            <div
              className="foot-print flex flex-col flex pt-5  cursor-pointer"
              onClick={() => clickHandle(talk.memberId)}
            >
              <span className="flex justify-center my-auto w-80">
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
                    className="text-gray-500 cursor-pointer hover:text-black"
                  />
                </button>
              )}
            </div>
          </div>
        );
      default:
        return (
          <div className="flex w-full " key={uuidv4()}>
            <ToastContainer />
            <div
              className="foot-print flex-col flex justify-around pt-5  cursor-pointer"
              onClick={() => clickHandle(talk.memberId)}
            >
              <span className="flex justify-center my-auto w-80">
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
                    className="text-gray-500 cursor-pointer hover:text-black"
                  />
                </button>
              )}
            </div>
          </div>
        );
    }
  });

  return (
    <div className="bg-gray-900/0 w-[80vw] max-w-[780px] h-[70vh] flex flex-col items-center pt-8">
      {/* // <div className="bg-gray-900/0 w-96 h-[60vh] flex flex-col items-center pt-8"> */}
      <div className="w-11/12 flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <img src={images.foot_print_img} alt="" className="w-10" />
          <p className="text-xl">방명록</p>
        </div>
        <FontAwesomeIcon
          icon={faXmark}
          onClick={closeGuestBook}
          className="hover:text-red-600 cursor-pointer text-xl"
        />
      </div>
      {/* <p className="text-2xl text-purple-500">방명록</p> */}

      <div className="flex flex-col items-center gap-8 w-full xl:max-h-96 sm:max-h-full overflow-y-scroll scroll-bar">
        <div className="foot-print flex flex-col justify-center">
          <span className="flex justify-center my-auto">
            <textarea
              className="focus:outline-none bg-transparent text-center mt-10"
              placeholder="발자국을 남겨보세요"
              maxLength={140}
              cols={30}
              rows={8}
              // ref={guestBookInputRef}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </span>
          <button className="flex justify-center" onClick={() => handleWrite()}>
            <FontAwesomeIcon
              icon={faPaperPlane}
              beatFade
              className="cursor-pointer pt-2"
              style={{ color: "black" }}
            />
          </button>
        </div>
        {letter}
        {/* 방명록 등록하기 start*/}
        {/* 방명록 등록하기 end*/}
      </div>
    </div>
  );
}

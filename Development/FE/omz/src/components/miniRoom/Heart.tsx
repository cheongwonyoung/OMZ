import { images } from "../../assets/images";
import { useMutation, useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userStatus } from "../../recoil/userAtom";
import { likeMiniroom } from "../../api/miniRoom";

type Props = {
  heart: number;
  isLiked: boolean;
  refetch: () => Promise<any>;
};

export default function Heart({ heart, isLiked, refetch }: Props) {
  const friendId = useParams().id;
  const myId = parseInt(useRecoilValue(userStatus).id);

  // 좋아요 클릭
  const handleClick = async () => {
    clickLike.mutate({ isLiked, friendId, myId });
  };

  const clickLike = useMutation(
    (likes: { isLiked: boolean; friendId: number; myId: number }) =>
      likeMiniroom(likes.isLiked, likes.friendId, likes.myId),
    {
      onSuccess: () => {
        refetch();
      },
    }
  );

  return (
    <div
      className="flex items-center"
      onClick={(e) => {
        e.stopPropagation();
        handleClick();
      }}
    >
      <button className="cursor-pointer hover:scale-105 flex items-center">
        <img
          src={images.heart_img}
          alt=""
          className="h-8 w-8 first-letter"
        />
      <p className="ml-2">{heart}</p>
      </button>
    </div>
  );
}

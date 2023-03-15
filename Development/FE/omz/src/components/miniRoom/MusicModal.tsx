import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
type Props = {
  closeMusic(): void;
};
export default function MusicModal({ closeMusic }: Props) {
  return (
    <div className="w-11/12 h-1/2 z-50 border-solid border border-gray-500 rounded-lg absolute bg-white  ">
      <div className="relative w-full h-full flex flex-col items-center pt-8">
        <FontAwesomeIcon
          icon={faXmark}
          className="absolute right-4 top-4"
          onClick={closeMusic}
        />
        <p className="text-2xl text-purple-500 font-bold">추천 BGM</p>
      </div>
    </div>
  );
}

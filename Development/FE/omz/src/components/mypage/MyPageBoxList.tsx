import { div } from "@tensorflow/tfjs";
import { images } from "../../assets/images";

type Props = {
  showedItem: string;
  handleItems(v: any): void;
};

export default function MyPageBoxList({ showedItem, handleItems }: Props) {
  const hatList = ["hat_0", "hat_1", "hat_2", "hat_3", "hat_4", "hat_5"];
  const glassesList = [
    "glasses_0",
    "glasses_1",
    "glasses_2",
    "glasses_3",
    "glasses_4",
    "glasses_5",
  ];
  const wingList = ["wing_0", "wing_1", "wing_2", "wing_3", "wing_4", "wing_5"];

  const itemList = () => {
    const structrue = () => {
      switch (showedItem) {
        case "안경":
          return glassesList;
        case "날개":
          return wingList;
        default:
          return hatList;
      }
    };
    return structrue().map((item) => (
      <div
        key={item}
        id={item}
        onClick={() => handleItems(item)}
        className="cursor-pointer hover:scale-105 w-full flex justify-center"
      >
        <img src={images[item]} alt="" id={item} className="w-[70%]"/>
        {/* <img src={`/images.${item}`} alt="" /> */}
      </div>
    ));
  };
  return (
    <div className="flex items-center justify-center">
      <div className="w-11/12 grid grid-cols-3 gap-4 mb-4">{itemList()}</div>
    </div>
  );
}

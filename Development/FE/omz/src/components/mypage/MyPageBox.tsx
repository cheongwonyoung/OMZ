import { useState } from "react";
import MyPageBoxList from "./MyPageBoxList";

type Props = {
  handleItems(v: any): void;
};

export default function MyPageBox({ handleItems }: Props) {
  const itemNames: string[] = ["모자", "안경", "날개"];
  const [showedItem, setShowedItem] = useState("모자");
  const handleShowedItem = (e: any) => {
    setShowedItem(e.target.id);
  };

  const titleColor = (name: string): string => {
    return showedItem === name
      ? "text-xl font-bold text-purple-400"
      : "text-xl font-bold";
  };

  const itemTitle = (
    <div className="flex justify-around">
      {itemNames.map((item) => (
        <div
          className={titleColor(item)}
          id={item}
          onClick={(e) => handleShowedItem(e)}
          key={item}
        >
          {item}
        </div>
      ))}
    </div>
  );
  return (
    <div className="w-full h-full bg-slate-100/50 flex flex-col items-center">
      <div className="w-11/12 mt-2">{itemTitle}</div>
      <div className="w-11/12 bg-purple-500 h-0.5 my-2"></div>
      <MyPageBoxList showedItem={showedItem} handleItems={handleItems} />
    </div>
  );
}

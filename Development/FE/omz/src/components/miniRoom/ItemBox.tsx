import { useState } from "react";
import ItemList from "./ItemList";

type Props = {
  handleItems(v: any): void;
};
export default function ItemBox({ handleItems }: Props) {
  const itemNames: string[] = ["침대", "책상", "조명", "기타"];
  const [showedItem, setShowedItem] = useState("침대");
  const handleShowedItem = (e: any) => {
    setShowedItem(e.target.id);
  };

  const titleColor = (name: string): string => {
    return showedItem === name
      ? "text-xl font-bold text-blue-500 cursor-pointer"
      : "text-xl font-bold hover:text-blue-500 cursor-pointer";
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
    <div className="w-full h-full min-h-fit bg-white bg-opacity-50 flex flex-col items-center">
      <div className="w-11/12 border-b border-black py-5 mb-5">{itemTitle}</div>
      <ItemList showedItem={showedItem} handleItems={handleItems} />
    </div>
  );
}

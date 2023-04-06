import { images } from "../../assets/images";

type Props = {
  showedItem: string;
  handleItems(v: any): void;
};
export default function ItemList({ showedItem, handleItems }: Props) {
  const bedList = ["bed_0", "bed_1", "bed_2", "bed_3"];
  const tableList = ["table_0", "table_1", "table_2", "table_3"];
  const lampList = ["lamp_0", "lamp_1", "lamp_2"];
  const etcList = ["etc_0", "etc_1", "etc_2", "etc_3", "etc_4"];

  const itemList = () => {
    const structure = () => {
      switch (showedItem) {
        case "침대":
          return bedList;
        case "책상":
          return tableList;
        case "조명":
          return lampList;
        default:
          return etcList;
      }
    };

    return structure().map((item) => (
      <div
        key={item}
        id={item}
        onClick={() => handleItems(item)}
        className="cursor-pointer hover:scale-105 w-full flex justify-center"
      >
        <img src={images[item + "_img"]} alt="" id={item} className="w-[70%]" />
      </div>
    ));
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-11/12 grid grid-cols-3 gap-4 mb-4">{itemList()}</div>
    </div>
  );
}

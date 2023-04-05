import { images } from "../../assets/images";

type Props = {
  showedItem: string;
  handleItems(v: any): void;
};
export default function ItemList({ showedItem, handleItems }: Props) {
  const bedList = ["bed_0", "bed_1", "bed_2", "bed_3", "bed_4"];
  const tableList = ["table_0", "table_1", "table_2", "table_3", "table_4"];
  const lampList = ["lamp_0", "lamp_1", "lamp_2"];
  const etcList = ["etc_0", "etc_1", "etc_2", "etc_3", "etc_4", "etc_5"];

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
      <div key={item} id={item} onClick={() => handleItems(item)}>
        <img src={images[item + "_img"]} alt="" id={item} />
      </div>
    ));
  };

  return (
    <div className="w-11/12 grid grid-cols-3 gap-4 mb-4">{itemList()}</div>
  );
}

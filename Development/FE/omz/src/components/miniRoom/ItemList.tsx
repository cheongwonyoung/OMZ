import { images } from "../../assets/images";

type Props = {
  showedItem: string;
  handleItems(v: any): void;
};
export default function ItemList({ showedItem, handleItems }: Props) {
  const bedList = ["bed_1", "bed_2", "bed_3"];
  const tableList = ["table_1", "table_2", "table_3"];
  const lampList = ["lamp_1", "lamp_2", "lamp_3"];
  const drawerList = ["drawer_1", "drawer_2"];
  const clockList = ["clock_1", "clock_2"];

  const itemList = () => {
    const structure = () => {
      switch (showedItem) {
        case "침대":
          return bedList;
        case "책상":
          return tableList;
        case "서랍":
          return drawerList;
        case "조명":
          return lampList;
        default:
          return clockList;
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

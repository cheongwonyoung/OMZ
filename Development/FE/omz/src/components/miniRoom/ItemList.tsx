import { images } from "../../assets/images";

type Props = {
  showedItem: string;
  handleItems(v: any): void;
};
export default function ItemList({ showedItem, handleItems }: Props) {
  const bedList = ["bed_0", "bed_1", "bed_2"];
  const tableList = ["table_0", "table_1", "table_2"];
  const lampList = ["lamp_0", "lamp_1", "lamp_2"];
  const drawerList = ["drawer_0", "drawer_1", "drawer_2"];
  const sofaList = ["sofa_0", "sofa_1", "sofa_2"];

  const itemList = () => {
    const structure = () => {
      switch (showedItem) {
        case "침대":
          return bedList;
        case "책상":
          return tableList;
        case "조명":
          return lampList;
        case "소파":
          return sofaList;
        default:
          return drawerList;
      }
    };

    return structure().map((item) => (
      <div key={item} id={item} onClick={() => handleItems(item)}>
        <img src={images[item + "_img"]} alt="" id={item} />
      </div>
    ));
  };

  return <div className="w-11/12 grid grid-cols-3 gap-4 mb-4">{itemList()}</div>;
}

type Props = {
  showedItem: string;
  handleItems(v: any): void;
};

export default function MyPageBoxList({ showedItem, handleItems }: Props) {
  const capList = ["cap_1", "cap_2", "cap_3"];
  const glassesList = ["glasses_1", "glasses_2", "galsses_3"];
  const wingList = ["wing_1", "wing_2", "wing_3"];

  const itemList = () => {
    const structrue = () => {
      switch (showedItem) {
        case "안경":
          return glassesList;
        case "날개":
          return wingList;
        default:
          return capList;
      }
    };
    return structrue().map((item) => (
      <div key={item} id={item} onClick={() => handleItems(item)}>
        <p>item</p>
      </div>
    ));
  };
  return (
    <div className="w-11/12 grid grid-cols-3 gap-4 mb-4">{itemList()}</div>
  );
}

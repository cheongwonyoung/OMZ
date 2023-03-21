type Props = {
  modal: any;
};
export default function ModalBlackBg({ modal }: Props) {
  return (
    <div className="w-screen h-screen absolute bg-black/80 z-50 flex justify-center items-center">
      {modal}
    </div>
  );
}

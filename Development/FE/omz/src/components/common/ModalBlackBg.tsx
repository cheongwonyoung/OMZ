type Props = {
  modal: any;
};
export default function ModalBlackBg({ modal }: Props) {
  return (
    <div className="w-screen h-full absolute bg-black/80 z-50 flex justify-center items-center">
      <div className="w-10/12 h-auto z-50 border-solid border border-gray-500 rounded-lg absolute bg-white mt-8 pb-8 px-4">
        {modal}
      </div>
    </div>
  );
}

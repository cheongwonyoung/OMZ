type Props = {
  modal?: any;
  closeModal?(): void;
};
export default function ModalBlackBg({ modal, closeModal }: Props) {
  return (
    <div
      onClick={closeModal}
      className="w-screen h-full absolute bg-black/80 z-50 flex justify-center items-center"
    >
      <div
        onClick={(e: any) => e.stopPropagation()}
        className="w-fit h-auto z-50 border-solid border border-gray-500 rounded-lg absolute bg-white mt-8 pb-8 px-4"
      >
        {modal}
      </div>
    </div>
  );
}

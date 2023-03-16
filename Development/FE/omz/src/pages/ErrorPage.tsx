import { Link } from 'react-router-dom'; 

export default function ErrorPage() {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <img src="" alt="" />
      <p className='text-center'>찾을 수 없는 페이지입니다.</p>
      <p className="pb-10"> 요청하신 페이지가 사라졌거나 잘못된 경로를 이용하셨어요.</p>
      <Link to="/" className=" border-black border-4 px-6 py-3">홈으로 이동</Link>
    </div>
  );
}


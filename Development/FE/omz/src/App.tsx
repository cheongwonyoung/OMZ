import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import KakaoRedirectPage from "./pages/KakaoRedirectPage";
import LoginPage from "./pages/LoginPage";
import Root from "./pages/Root";
import NewFriendsPage from "./pages/NewFriendsPage";
import MyPage from "./pages/MyPage";
import MyFriendsPage from "./pages/MyFriendsPage";
import MiniRoomPage from "./pages/MiniRoomPage";
import CommunityPage from "./pages/CommunityPage";
import ChattingPage from "./pages/ChattingPage";
import ErrorPage from "./pages/ErrorPage";
import SignUpPage from "./pages/SignUpPage";
import CommunityLikePage from "./pages/CommunityLikePage";
import CommunityMyPage from "./pages/CommunityMyPage";
import MainPage from "./pages/MainPage";
import "./App.css";
import CommunitySearchPage from "./pages/CommunitySearchPage";
import CommunityCreatePage from "./pages/CommunityCreatePage";
import ChattingDetailPage from "./pages/ChattingDetailPage";
import MiniRoomUpdatePage from "./pages/MiniRoomUpdatePage";
import CommunityDetailPage from "./pages/CommunityDetailPage";
import MyPageUpdatePage from "./pages/MyPageUpdatePage";
import MyPageCustomPage from "./pages/MyPageCustomPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 3,
      refetchOnWindowFocus: false,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <MainPage />,
      },
      {
        path: "/newfriends",
        element: <NewFriendsPage />,
      },
      // TODO 나중에 path 뒤에 /:id 추가
      {
        path: "mypage/:id",
        element: <MyPage />,
      },
      {
        path: "myfriends",
        element: <MyFriendsPage />,
      },
      // TODO 나중에 path 뒤에 /:id 추가
      {
        path: "miniroom/:id",
        element: <MiniRoomPage />,
      },
      {
        path: "community",
        element: <CommunityPage />,
      },
      {
        // 아마 useId
        path: "chatting/1",
        element: <ChattingPage />,
      },
      {
        // 나중에 룸 넘버로?
        path: "chatting/1/1",
        element: <ChattingDetailPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "redirect",
        element: <KakaoRedirectPage />,
      },
      {
        path: "signup",
        element: <SignUpPage />,
      },
      {
        path: "community/like",
        element: <CommunityLikePage />,
      },
      {
        path: "community/mypage/:memberId",
        element: <CommunityMyPage />,
      },
      {
        path: "community/search",
        element: <CommunitySearchPage />,
      },
      {
        path: "community/create",
        element: <CommunityCreatePage />,
      },
      {
        path: "miniroom/update",
        element: <MiniRoomUpdatePage />,
      },
      {
        path: "community/:board_id",
        element: <CommunityDetailPage />,
      },
      {
        path: "mypage/update",
        element: <MyPageUpdatePage />,
      },
      {
        path: "mypage/custom",
        element: <MyPageCustomPage />,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </div>
    </QueryClientProvider>
  );
}

export default App;

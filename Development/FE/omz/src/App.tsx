import { QueryClient, QueryClientProvider } from "react-query";
// import { ReactQueryDevtools } from "react-query/devtools";
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
import SignUpEndPage from "./pages/SignUpEndPage";
import CheckIsLoginPage from "./pages/CheckIsLoginPage";
import LogoutRedirectPage from "./pages/LogoutRedirectPage";
import EnterPage from "./pages/EnterPage";

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
        element: <CheckIsLoginPage component={<EnterPage />} />,
      },
      {
        path: "/main",
        element: <CheckIsLoginPage component={<MainPage />} />,
      },
      {
        path: "/newfriends",
        element: <CheckIsLoginPage component={<NewFriendsPage />} />,
      },
      {
        path: "mypage/:id",
        element: <CheckIsLoginPage component={<MyPage />} />,
      },
      {
        path: "myfriends",
        element: <CheckIsLoginPage component={<MyFriendsPage />} />,
      },
      {
        path: "miniroom/:id",
        element: <CheckIsLoginPage component={<MiniRoomPage />} />,
      },
      {
        path: "community",
        element: <CheckIsLoginPage component={<CommunityPage />} />,
      },
      {
        path: "chatting/:id",
        element: <CheckIsLoginPage component={<ChattingPage />} />,
      },
      {
        path: "chatting/:id/:roomId",
        element: <CheckIsLoginPage component={<ChattingDetailPage />} />,
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
        element: <CheckIsLoginPage component={<CommunityLikePage />} />,
      },
      {
        path: "community/mypage/:memberId",
        element: <CheckIsLoginPage component={<CommunityMyPage />} />,
      },
      {
        path: "community/search",
        element: <CheckIsLoginPage component={<CommunitySearchPage />} />,
      },
      {
        path: "community/create",
        element: <CheckIsLoginPage component={<CommunityCreatePage />} />,
      },
      {
        path: "miniroom/update",
        element: <CheckIsLoginPage component={<MiniRoomUpdatePage />} />,
      },
      {
        path: "community/:board_id",
        element: <CheckIsLoginPage component={<CommunityDetailPage />} />,
      },
      {
        path: "mypage/update",
        element: <CheckIsLoginPage component={<MyPageUpdatePage />} />,
      },
      {
        path: "mypage/custom",
        element: <CheckIsLoginPage component={<MyPageCustomPage />} />,
      },
      {
        path: "signup/end",
        element: <CheckIsLoginPage component={<SignUpEndPage />} />,
      },
      {
        path: "logout",
        element: <LogoutRedirectPage />,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <RouterProvider router={router} />
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </div>
    </QueryClientProvider>
  );
}

export default App;

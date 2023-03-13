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
import LikeCommunityPage from "./pages/LikeCommunityPage";
import CommunityMyPage from "./pages/CommunityMyPage";
import MainPage from "./pages/MainPage";
import "./App.css";

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
      {
        path: "mypage",
        element: <MyPage />,
      },
      {
        path: "myfriends",
        element: <MyFriendsPage />,
      },
      {
        path: "miniroom",
        element: <MiniRoomPage />,
      },
      {
        path: "community",
        element: <CommunityPage />,
      },
      {
        path: "chatting",
        element: <ChattingPage />,
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
        path: "community/like/",
        element: <LikeCommunityPage />,
      },
      {
        path: "community/mypage",
        element: <CommunityMyPage />,
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

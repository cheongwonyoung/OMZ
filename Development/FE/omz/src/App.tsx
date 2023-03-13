import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";

import NewFriendsPage from "./pages/NewFriendsPage";
import MyPage from "./pages/MyPage";
import MyFriendsPage from "./pages/MyFriendsPage";
import MiniRoomPage from "./pages/MiniRoomPage";
import CommunityPage from "./pages/CommunityPage";
import ChattingPage from "./pages/ChattingPage";
import ErrorPage from "./pages/ErrorPage";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/newfriends",
        element: <NewFriendsPage />,
      },
      {
        path: "/mypage",
        element: <MyPage />,
      },
      {
        path: "/myfriends",
        element: <MyFriendsPage />,
      },
      {
        path: "/miniroom",
        element: <MiniRoomPage />,
      },
      {
        path: "/community",
        element: <CommunityPage />,
      },
      {
        path: "/chatting",
        element: <ChattingPage />,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;

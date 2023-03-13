import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import KakaoRedirectPage from "./pages/KakaoRedirectPage";
import LoginPage from "./pages/LoginPage";
import Root from "./pages/Root";
import Test from "./pages/Test";
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
    children: [
      {
        path: "test",
        element: <Test />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "redirect",
        element: <KakaoRedirectPage />,
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

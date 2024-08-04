import { io } from "socket.io-client";
const host = "http://localhost:3000/api";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage";
import ChatPage from "./components/ChatPage";
function App() {
  const socket = io(host);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage socket={socket} />,
    },
    {
      path: "/chat",
      element: <ChatPage socket={socket} />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

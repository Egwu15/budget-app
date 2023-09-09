import { NavbarDefault } from "./layouts/NavList";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import { SignUp } from "./pages/auth/Signup";
import { initializeApp } from "firebase/app";
import { config } from "./config/config";

export const app = initializeApp(config);
export default function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/signUp", element: <SignUp /> },
  ]);

  return (
    <>
      <NavbarDefault isLoggedIn={true} />
      <RouterProvider router={router} />
    </>
  );
}

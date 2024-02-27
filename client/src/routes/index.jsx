
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage"
import LoginPage from "../pages/LoginPage/_user"



const router = createBrowserRouter([{
    path: "/",
    element: <MainLayout />,
    children: [
        {
            element: <HomePage />,
            index: true,
        },
        {
            path: "/register",
            element: <RegisterPage />
        },
        {
            path: "/login",
            element: <LoginPage />,
        }
    ],
},])
export default router;
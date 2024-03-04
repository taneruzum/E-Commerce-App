
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import UserRegisterPage from "../pages/RegisterPage";
import UserLoginPage from "../pages/LoginPage/_user";
import AdminLoginPage from "../pages/LoginPage/_admin";



const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                element: <HomePage />,
                index: true,
            },
            {
                path: "/about",
                element: <AboutPage />
            },


        ],

    },
    {
        path: "/register",
        element: <UserRegisterPage />
    },
    {
        path: "/login",
        element: <UserLoginPage />,
    },
    {
        path: "/admin/login",
        element: <AdminLoginPage />,
    },
])
export default router;
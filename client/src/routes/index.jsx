
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage/_user";
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
        element: <RegisterPage />
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/admin/login",
        element: <AdminLoginPage />,
    },
])
export default router;
import HomePage from "../pages/HomePage";
import { SlHome, SlSupport } from "react-icons/sl";


const navbarRouter = [
    {
        name: "ANASAYFA",
        icon: <SlHome size={20} />,
        path: "/",
        element: <HomePage />,
    },
    {
        name: "HAKKIMIZDA",
        path: "/about",
        // element: < />,
    },
    {
        name: "YENİ ÜRÜNLER",
        path: "/",
        // element: < />,
    },
    {
        name: "ÖNERİLEN ÜRÜNLER",
        path: "/",
        // element: < />,
    },
    {
        name: "YORUMLAR",
        path: "/",
        // element: < />,
    },
    {
        name: "YARDIM VE DESTEK",
        icon: <SlSupport size={20} />,
        path: "/",
        // element: < />,
    },
]
export default navbarRouter;
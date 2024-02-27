import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import { SlHome, SlSupport, SlBubble, SlInfo } from "react-icons/sl";
import { MdOutlineWhatshot } from "react-icons/md";

const navbarRouter = [
    {
        name: "ANASAYFA",
        icon: <SlHome size={24} />,
        path: "/",
    },
    {
        name: "HAKKIMIZDA",
        icon: <SlInfo size={24} />,
        path: "/about",
    },
    {
        name: "YENİ ÜRÜNLER",
        icon: <MdOutlineWhatshot size={24} />,
        path: "/",
    },
    {
        name: "ÖNERİLEN ÜRÜNLER",
        path: "/",
    },
    {
        name: "YORUMLAR",
        icon: <SlBubble size={24} />,
        path: "/",
    },
    {
        name: "YARDIM VE DESTEK",
        icon: <SlSupport size={24} />,
        path: "/",
    },
]
export default navbarRouter;
import HomePage from "../pages/HomePage";
import { SlHome, SlSupport, SlBubble, SlInfo } from "react-icons/sl";
import { MdOutlineWhatshot } from "react-icons/md";

const navbarRouter = [
    {
        name: "ANASAYFA",
        icon: <SlHome size={24} />,
        path: "/",
        element: <HomePage />,
    },
    {
        name: "HAKKIMIZDA",
        icon: <SlInfo size={24} />,
        path: "/about",
        // element: < />,
    },
    {
        name: "YENİ ÜRÜNLER",
        icon: <MdOutlineWhatshot size={24} />,
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
        icon: <SlBubble size={24} />,
        path: "/",
        // element: < />,
    },
    {
        name: "YARDIM VE DESTEK",
        icon: <SlSupport size={24} />,
        path: "/",
        // element: < />,
    },
]
export default navbarRouter;
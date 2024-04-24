import {
    MdEmail,
    MdMap,
    MdOutlineMiscellaneousServices,
    MdPhone,
} from "react-icons/md";
import { LiaTelegram } from "react-icons/lia";
import { FaCar, FaInfinity, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";

export const contactsData = [
    {
        icon: <MdPhone className="h-7 w-7" />,
        href: "tel:+995596000770",
        text: "+995596000770",
    },
    {
        icon: <MdEmail className="h-7 w-7" />,
        href: "mailto:vit_86@list.ru",
        text: "vit_86@list.ru",
    },
    {
        icon: <MdMap className="h-7 w-7" />,
        href: "https://maps.app.goo.gl/KHRfz2bMBB5XSSLf9",
        text: "Batumi st. Rustaveli 13",
    },
];

export const socialMedia = [
    {
        icon: <LiaTelegram className="h-9 w-9" />,
        href: "https://t.me/kealem777",
    },
    {
        icon: <FaInstagram className="h-9 w-9" />,
        href: "https://www.instagram.com/import_autorent_ge/",
    },
    {
        icon: <FaWhatsapp className="h-9 w-9" />,
        href: "https://api.whatsapp.com/send/?phone=995596000770&text&type=phone_number&app_absent=0",
    },
];

export const advantages = [
    {
        icon: <FaCar size={50} />,
    },
    {
        icon: <FaInfinity size={50} />,
    },
    {
        icon: <MdOutlineMiscellaneousServices size={50} />,
    },
    {
        icon: <IoDocumentText size={50} />,
    },
];

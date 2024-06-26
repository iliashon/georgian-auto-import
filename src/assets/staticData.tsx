import {
    MdEmail,
    MdMap,
    MdOutlineMiscellaneousServices,
    MdPhone,
} from "react-icons/md";
import { LiaSignatureSolid, LiaTelegram } from "react-icons/lia";
import {
    FaCar,
    FaInfinity,
    FaInstagram,
    FaRegSmile,
    FaWhatsapp,
} from "react-icons/fa";
import { IoDocumentText, IoPeopleSharp } from "react-icons/io5";
import { HiCash } from "react-icons/hi";
import { FaListCheck } from "react-icons/fa6";

export const contactsData = [
    {
        icon: <MdPhone size={20} />,
        href: "tel:+995596000770",
        text: "+995596000770",
    },
    {
        icon: <MdEmail size={20} />,
        href: "mailto:vit_86@list.ru",
        text: "vit_86@list.ru",
    },
    {
        icon: <MdMap size={20} />,
        href: "https://maps.app.goo.gl/KHRfz2bMBB5XSSLf9",
        text: "Batumi st. Rustaveli 13",
    },
];

export const socialMedia = [
    {
        icon: <LiaTelegram size={40} />,
        href: "https://t.me/kealem777",
    },
    {
        icon: <FaInstagram size={40} />,
        href: "https://www.instagram.com/import_autorent_ge/",
    },
    {
        icon: <FaWhatsapp size={40} />,
        href: "https://api.whatsapp.com/send/?phone=995596000770&text&type=phone_number&app_absent=0",
    },
];

export const advantages = [
    {
        icon: <FaCar size={60} />,
    },
    {
        icon: <FaInfinity size={60} />,
    },
    {
        icon: <MdOutlineMiscellaneousServices size={60} />,
    },
    {
        icon: <IoDocumentText size={60} />,
    },
    {
        icon: <HiCash size={60} />,
    },
    {
        icon: <IoPeopleSharp size={60} />,
    },
];

export const rentStep = [
    {
        icon: <MdPhone size={50} />,
    },
    {
        icon: <FaListCheck size={50} />,
    },
    {
        icon: <LiaSignatureSolid size={50} />,
    },
    {
        icon: <FaRegSmile size={50} />,
    },
];

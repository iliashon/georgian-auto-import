import { useTranslations } from "next-intl";
import { advantages } from "@/assets/staticData";

export default function Advantages() {
    const t = useTranslations("advantages");

    return (
        <section className="container mx-auto px-5 py-10">
            <h2 className="text-5xl font-semibold font-oswald text-center">
                {t("title")}
            </h2>
            <ul className="flex justify-center gap-14 mt-14">
                {advantages.map((item, index) => {
                    return (
                        <li className="flex flex-col items-center gap-5 text-lg font-medium text-black/50 hover:text-black/100 duration-300 cursor-pointer">
                            {item.icon}
                            {t(`${index}`)}
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}

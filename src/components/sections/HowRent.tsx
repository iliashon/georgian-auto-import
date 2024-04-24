import LightLink from "@/components/buttons/LightLink";
import generateLocaleHref from "@/utils/generateLocaleHref";
import { MdPhone } from "react-icons/md";
import { FaListCheck } from "react-icons/fa6";
import { LiaSignatureSolid } from "react-icons/lia";
import { FaRegSmile } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { rentStep } from "@/assets/staticData";

export default function HowRent() {
    const t = useTranslations("how-rent");

    return (
        <section className="w-full bg-black text-white">
            <div className="container mx-auto px-5 py-10 grid grid-cols-4 gap-10 items-center">
                <div className="flex flex-col gap-9 items-start">
                    <h3 className="font-oswald text-5xl">{t("title")}</h3>
                    <div className="flex flex-col gap-2 text-white/70">
                        <p>{t("age")}</p>
                        <p>{t("experience")}</p>
                        <p>{t("deposit")}</p>
                    </div>
                    <LightLink href={generateLocaleHref("/cars")}>
                        {t("button")}
                    </LightLink>
                </div>
                <div className="col-span-3 grid grid-cols-4 gap-10">
                    {rentStep.map((item, index) => {
                        return (
                            <div className="flex flex-col gap-5 items-center text-white/50 hover:text-white/90 duration-300">
                                {item.icon}
                                <h5 className="text-lg font-semibold">
                                    {`${index + 1} ${t(`step.${index}.title`)}`}
                                </h5>
                                <p className="text-sm text-center">
                                    {t(`step.${index}.description`)}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

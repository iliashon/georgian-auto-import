import Image from "next/image";
import mustang from "@/assets/images/mustangs.webp";
import DarkLink from "@/components/buttons/DarkLink";
import { useTranslations } from "next-intl";

export default function About() {
    const t = useTranslations("about");

    return (
        <section className="container mx-auto px-5 py-10 grid grid-cols-2 gap-32 items-center">
            <Image src={mustang} alt="Mustang" />
            <div className="flex flex-col gap-10">
                <h3 className="font-oswald text-6xl font-semibold">
                    {t("title")}
                </h3>
                <p className="text-black/60 font-medium">{t("description")}</p>
                <div className="flex gap-5">
                    <DarkLink href={""} className="text-lg">
                        {t("button-advantages")}
                    </DarkLink>
                    <DarkLink href={""} className="text-lg">
                        {t("button-cars")}
                    </DarkLink>
                </div>
            </div>
        </section>
    );
}

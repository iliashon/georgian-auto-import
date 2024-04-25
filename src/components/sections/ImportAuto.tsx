import Image from "next/image";
import photoContainer from "@/assets/images/container.webp";
import DarkLink from "@/components/buttons/DarkLink";
import { useTranslations } from "next-intl";

export default function ImportAuto() {
    const t = useTranslations("import");
    return (
        <section className="container mx-auto px-5 py-10 grid grid-cols-2 gap-32 items-center">
            <Image src={photoContainer} alt="Mustang" className="rounded-lg" />
            <div className="flex flex-col gap-10">
                <h3 className="font-oswald text-6xl font-semibold">
                    {t("title")}
                </h3>
                <p className="text-black/60 font-medium">{t("description")}</p>
                <div className="flex gap-5">
                    <DarkLink href={""} className="text-lg">
                        {t("button")}
                    </DarkLink>
                </div>
            </div>
        </section>
    );
}

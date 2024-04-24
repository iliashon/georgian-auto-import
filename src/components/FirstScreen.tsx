import Image from "next/image";
import GirlImage from "@/assets/images/girl-car.webp";
import MBImage from "@/assets/images/mb.webp";
import LightLink from "@/components/buttons/LightLink";
import { useTranslations } from "next-intl";

export default function FirstScreen() {
    const t = useTranslations("first_screen");

    return (
        <section className="grid md:grid-cols-2 h-[100vh]">
            <div className="h-full relative">
                <Image
                    src={GirlImage}
                    alt=""
                    className="h-full w-full absolute object-cover object-bottom"
                />
                <div className="absolute bg-black/40 z-20 w-full h-full hover:bg-black/25 duration-300">
                    <div className="absolute bottom-[30%] right-0 mr-10 w-1/2">
                        <h1 className="text-white text-5xl font-oswald font-semibold text-end">
                            {t("import.title")}
                        </h1>
                        <p className="text-white text-end text-sm mt-3 font-medium">
                            {t("import.description")}
                        </p>
                        <LightLink href={""} className="float-right mt-3">
                            {t("import.button")}
                        </LightLink>
                    </div>
                </div>
            </div>
            <div className="h-full relative">
                <Image
                    src={MBImage}
                    alt=""
                    className="h-full w-full absolute object-cover object-bottom"
                />
                <div className="absolute bg-black/40 z-20 w-full h-full hover:bg-black/25 duration-300">
                    <div className="absolute bottom-[50%] ml-10 w-1/2">
                        <h1 className="text-white text-5xl font-oswald font-semibold">
                            {t("rent.title")}
                        </h1>
                        <p className="text-white text-sm mt-3 font-medium">
                            {t("rent.description")}
                        </p>
                        <LightLink href={""} className="float-left mt-3">
                            {t("rent.button")}
                        </LightLink>
                    </div>
                </div>
            </div>
        </section>
    );
}

import { useLocale } from "next-intl";

export default function generateLocaleHref(href: string) {
    const locale = useLocale();

    return `/${locale}${href}`;
}

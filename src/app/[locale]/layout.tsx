import type { Metadata } from "next";
import { Montserrat, Prompt, Oswald } from "next/font/google";
import "../globals.css";
import { redirect } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" });
const prompt = Prompt({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-prompt",
});
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

const locales: string[] = ["en", "ru"];

export default function RootLayout({
    children,
    params: { locale },
}: Readonly<{
    children: React.ReactNode;
    params: { locale: string };
}>) {
    if (!locales.includes(locale)) redirect("/");

    return (
        <html lang={locale}>
            <body
                className={`${montserrat.variable} ${oswald.variable} ${prompt.variable} font-mont`}
            >
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}

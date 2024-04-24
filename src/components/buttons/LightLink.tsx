import { ReactNode } from "react";
import Link from "next/link";

export default function LightLink({
    children,
    className,
    href,
}: {
    children: ReactNode;
    className?: string;
    href: string;
}) {
    return (
        <Link
            href={href}
            className={`${className} bg-white text-black font-medium px-3 py-1 rounded-lg border-2 border-white hover:bg-transparent hover:text-white duration-300`}
        >
            {children}
        </Link>
    );
}

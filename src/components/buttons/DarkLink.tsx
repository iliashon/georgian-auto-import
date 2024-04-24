import { ReactNode } from "react";
import Link from "next/link";

export default function DarkLink({
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
            className={`${className} bg-transparent font-medium px-3 py-1 rounded-lg border-2 border-black hover:bg-black hover:text-white duration-300`}
        >
            {children}
        </Link>
    );
}

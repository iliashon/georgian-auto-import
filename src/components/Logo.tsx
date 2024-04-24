import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/" className="bg-white px-2">
            <span className="">Georgian</span>
            <span className="">Auto Import</span>
        </Link>
    );
}

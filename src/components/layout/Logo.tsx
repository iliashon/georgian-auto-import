import Link from "next/link";

export default function Logo() {
    return (
        <Link
            href="/"
            className="bg-white px-4 py-1 rounded-lg font-prompt text-red-500 font-bold"
        >
            <h2 className="text-3xl">Georgian</h2>
            <h3 className="text-lg -mt-2">Auto Import</h3>
        </Link>
    );
}

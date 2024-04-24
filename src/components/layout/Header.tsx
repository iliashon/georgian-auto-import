import Logo from "@/components/layout/Logo";

export default function Header() {
    return (
        <header className="py-5 px-5 w-full absolute z-50 left-1/2 -translate-x-1/2 flex justify-between">
            <Logo />
        </header>
    );
}

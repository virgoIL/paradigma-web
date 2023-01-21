import Link from "next/link";

export function Navbar() {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <Link href={"/"} className="font-semibold text-xl tracking-tight">PARADIGMA</Link>
            </div>
            <div className="w-full hidden md:block flex-grow lg:flex lg:items-center lg:w-auto">
                <Link
                    href={"/"}
                    className="text-teal-200 hover:text-white mr-4 cursor-pointer">
                    Home
                </Link>
                <Link
                    href={"/contact"}
                    className="text-teal-200 hover:text-white mr-4 cursor-pointer">
                    Contact
                </Link>
                <Link
                    href={"/how-it-works"}
                    className="text-teal-200 hover:text-white mr-4 cursor-pointer">
                    How it works
                </Link>
            </div>
        </nav>
    );
}

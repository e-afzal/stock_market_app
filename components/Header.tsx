import Link from "next/link";
import Image from "next/image";

// LOCAL COMPONENT
import NavItems from "@/components/NavItems";
import UserDropdown from "@/components/UserDropdown";

export default function Header(){
    return (
        <header className="sticky top-0 header">
            <div className="container header-wrapper">
                <Link href="/">
                    <Image src="/assets/icons/logo.svg" alt="Signals List logo" width={140} height={32} className="h-8 w-auto cursor-pointer"/>
                </Link>
                <nav className="hidden sm:block">
                    {/* Nav items*/}
                    <NavItems/>
                </nav>
                {/* User dropdown*/}
                <UserDropdown/>
            </div>
        </header>
    );
}

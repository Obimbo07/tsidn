import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link";
import { useState } from "react";

const MobileNav = ({ links, slides }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            <Sheet isOpen={isOpen} onOpenChange={toggleMenu}>
                <SheetTrigger asChild>
                    <button className="md:hidden" onClick={toggleMenu}>
                        {isOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        )}
                    </button>
                </SheetTrigger>

                <SheetContent className="opacity-70">
                    <nav className="bg-gray-100 p-4 text-dark-600">
                        <ul className="flex flex-col md:flex-row gap-6">
                            {links.map((link) => (
                                <li key={link.id} className="relative group">
                                    <div className="flex items-center">
                                        <Link href={link.url} className="block font-bold px-4 py-2 text-4xl">
                                            {link.text}
                                        </Link>
                                        <span className="ml-2 font-bold md:hidden text-white bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center">
                                            +
                                        </span>
                                    </div>
                                    <div className="w-max hidden md:absolute z-50 group-hover:block bg-white shadow-lg rounded">
                                        <ul>
                                            {link.dropdown.map((item) => (
                                                <li key={item.id} className="px-4 py-2 hover:bg-gray-200 text-3xl">
                                                    <Link href={`${link.url}${item.url}`}>
                                                        {item.text}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </nav>


                    <div>
                        SLIDES
                    </div>





                </SheetContent>
            </Sheet>
        </>
    )
}

export default MobileNav

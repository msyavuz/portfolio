import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <nav className="flex place-content-end items-center w-full h-12 lg:h-24 p-4 lg:p-8 font-bold lg:text-2xl text-center text-white sticky top-0">
            <ul className={`${isOpen ? "visible" : "hidden"} p-2`}>
                <div className="flex justify-end gap-2 lg:gap-12 p-2">
                    <li className="px-4 py-2 hover:bg-slate-400 hover:text-black rounded">
                        <a href="#about">About</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-slate-400 hover:text-black rounded">
                        <a href="#">Tech</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-slate-400 hover:text-black rounded">
                        <a href="#">Projects</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-slate-400 hover:text-black rounded">
                        <a href="#">Contact</a>
                    </li>
                </div>
            </ul>
            <button
                className="ml-8 hover:bg-slate-400 hover:text-black rounded"
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
            >
                <GiHamburgerMenu />
            </button>
        </nav>
    );
}

export default Navbar;

import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <nav className="flex place-content-end items-center w-full h-12 lg:h-24 p-4 lg:p-8 font-bold text-sm lg:text-2xl text-center text-white sticky top-0 shadow bg-slate-800">
            <ul className={`${isOpen ? "visible" : "hidden"} lg:p-2`}>
                <div className="flex justify-end gap-1 lg:gap-12 p-2">
                    <li className="px-2 lg:px-4 py-2 hover:bg-slate-400 hover:text-black rounded">
                        <a href="#about">About</a>
                    </li>
                    <li className="px-2 lg:px-4 py-2 hover:bg-slate-400 hover:text-black rounded">
                        <a href="#tech">Tech</a>
                    </li>
                    <li className="px-2 lg:px-4 py-2 hover:bg-slate-400 hover:text-black rounded">
                        <a href="#projects">Projects</a>
                    </li>
                    <li className="px-2 lg:px-4 py-2 hover:bg-slate-400 hover:text-black rounded">
                        <a href="#">Contact</a>
                    </li>
                </div>
            </ul>
            <button
                className=" lg:ml-8 hover:text-black rounded"
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

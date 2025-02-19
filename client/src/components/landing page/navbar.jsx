import { useState } from "react";
import { TbLogin } from "react-icons/tb";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { SiTrendmicro } from "react-icons/si";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-slate-600 text-white p-4 flex justify-between items-center">
            {/* Logo */}
         
            <h1 className="text-3xl font-bold flex gap-2">   <SiTrendmicro className="mt-1" />Trendz</h1>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-6">
                <li><a href="#home" className="hover:text-gray-400">Home</a></li>
                <li><a href="#about" className="hover:text-gray-400">About</a></li>
                <li><a href="#products" className="hover:text-gray-400">Products</a></li>
                <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
            </ul>
            {/* Icons - Only for larger screens */}
            <div className="hidden md:flex flex-row space-x-4">
                <a href="/auth/login" className="flex p-1 bg-black/20 rounded-lg hover:bg-slate-900">Login <span><TbLogin className="mt-1 ml-1"/></span></a>
                <a href="/auth/login" className="flex p-1 bg-black/20 rounded-lg hover:bg-slate-900">Shop <span><FaShoppingCart className="mt-1 ml-1"/></span></a>
            </div>


            {/* Mobile Menu Button */}
            <button
                className="md:hidden text-2xl"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Mobile Menu */}
            {isOpen && (
                <ul className="absolute top-16 left-0 w-full bg-slate-700 p-4 flex flex-col items-center space-y-4 md:hidden">
                    <li><a href="#home" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Home</a></li>
                    <li><a href="#about" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>About</a></li>
                    <li><a href="#products" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Products</a></li>
                    <li><a href="#contact" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Contact</a></li>
                    <li> <a href="/auth/login" className="flex hover:bg-slate-900">login<span><TbLogin className="mt-1 ml-1"/></span></a></li>
                    <li> <a href="#products" className="flex hover:bg-slate-900">shop<span><FaShoppingCart className="mt-1 ml-1"/></span></a></li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;

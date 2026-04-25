"use client";

import { useState } from "react";
import { IoBookOutline } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";

export default function NewNavbar(){

    const [isOpen, setIsOpen] = useState(false);
    
    

    return(

< header  className="sticky top-0 z-50 bg-white/80 backdrop-blur-md">
    <nav className="flex flex-wrap md:flex-nowrap justify-between items-center py-4 px-4 md:px-10 lg:px-20 shadow-md">

    {/* Logo */}
    <div className="flex flex-row items-center">
        <IoBookOutline className="text-green-500 text-2xl md:text-3xl font-bold mr-1" />
        <a href="" className="text-lg md:text-xl font-bold">NewLearning</a>
    </div>

    {/* Hamburger */}
    <div className="md:hidden">
        {isOpen ? (
            <HiX className="text-3xl cursor-pointer" onClick={() => setIsOpen(false)} />
        ) : (
            <HiMenu className="text-3xl cursor-pointer" onClick={() => setIsOpen(true)} />
        )}
    </div>

    {/* Links */}
    <div className={`w-full md:w-auto flex flex-col md:flex-row items-center gap-5 md:gap-10 text-gray-500 font-bold mt-4 md:mt-0
        ${isOpen ? "flex" : "hidden"} md:flex`}>
        
        <a className="hover:text-green-500 transition duration-300" href="#home">Home</a>
        <a className="hover:text-green-500 transition duration-300" href="#courses">Courses</a>
        <a className="hover:text-green-500 transition duration-300" href="#mentor">Mentor</a>
        <a className="hover:text-green-500 transition duration-300" href="#community">Group</a>
        <a className="hover:text-green-500 transition duration-300" href="#testimonials">Testimonials</a>
        <a className="hover:text-green-500 transition duration-300" href="#pricing">Pricing</a>
    </div>

    {/* Button */}
    <a className={`mt-4 md:mt-0 bg-green-500 rounded-full text-white font-bold py-2 px-5 hover:shadow-lg shadow-gray-300 transition duration-300 ease-in-out hover:scale-110
        ${isOpen ? "block" : "hidden"} md:block`} href="#pricing">
        Get Started
    </a>

    </nav>
</header>

    )}
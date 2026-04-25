import { IoBookOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { SiGithub } from "react-icons/si";
import { SiFacebook } from "react-icons/si";
import { CiLinkedin } from "react-icons/ci";



export default function FooterPage() {
    return (
        <main className="bg-gray-100 text-gray-700 py-10 sm:py-12 md:py-14 px-4 sm:px-10 lg:px-20 mt-20">
            
            {/* Top Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-10">
                
                {/* Brand */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2 text-white font-bold text-xl sm:text-2xl">
                        <IoBookOutline className="text-green-500" />
                        <span className="text-black">NewLearning</span>
                    </div>
                    <span className="text-xs sm:text-sm leading-relaxed">
                        Empowering millions of learners worldwide with
                        industry-leading courses and expert mentors.
                    </span>
                </div>

                {/* Product */}
                <div className="flex flex-col gap-3">
                    <span className="text-black font-semibold mb-2">Product</span>
                    <a href="#home" className="hover:text-green-500 cursor-pointer text-sm">Features</a>
                    <a href="#pricing" className="hover:text-green-500 cursor-pointer text-sm">Pricing</a>
                    <a href="#courses" className="hover:text-green-500 cursor-pointer text-sm">Courses</a>
                    <a href="#community" className="hover:text-green-500 cursor-pointer text-sm">Community</a>
                </div>

                {/* Company */}
                <div className="flex flex-col gap-3">
                    <span className="text-black font-semibold mb-2">Company</span>
                    <a href="" className="hover:text-green-500 cursor-pointer text-sm">About Us</a>
                    <a href="" className="hover:text-green-500 cursor-pointer text-sm">Careers</a>
                    <a href="" className="hover:text-green-500 cursor-pointer text-sm">Blog</a>
                    <a href="" className="hover:text-green-500 cursor-pointer text-sm">Press</a>
                </div>

                {/* Support */}
                <div className="flex flex-col gap-3">
                    <span className="text-black font-semibold mb-2">Support</span>
                    <a href="" className="hover:text-green-500 cursor-pointer text-sm">Help Center</a>
                    <a href="" className="hover:text-green-500 cursor-pointer text-sm">Contact Us</a>
                    <a href="" className="hover:text-green-500 cursor-pointer text-sm">Privacy Policy</a>
                    <a href="" className="hover:text-green-500 cursor-pointer text-sm">Terms Of Service</a>
                </div>

                {/* Categories */}
                <div className="flex flex-col gap-3">
                    <span className="text-black font-semibold mb-2">Help Center</span>
                    <a href="" className="hover:text-green-500 cursor-pointer text-sm">Web Development</a>
                    <a href="" className="hover:text-green-500 cursor-pointer text-sm">UI/UX Design</a>
                    <a href="" className="hover:text-green-500 cursor-pointer text-sm">Data Science</a>
                    <a href="" className="hover:text-green-500 cursor-pointer text-sm">Marketing</a>
                </div>
            </div>

            {/* Contact Row */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 py-6 text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                    <MdOutlineMailOutline className="text-green-500 text-lg" />
                    <span>newlearning@gmail.com</span>
                </div>

                <div className="flex items-center gap-2">
                    <LuPhone className="text-green-500 text-lg" />
                    <span>+92(123)789-078</span>
                </div>

                <div className="flex items-center gap-2">
                    <IoLocationOutline className="text-green-500 text-lg" />
                    <span>Pakistan</span>
                </div>
            </div>

            {/* Divider */}
            <div className="w-full border-t border-gray-300 my-4"></div>

            {/* Bottom */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-4 text-center md:text-left">
                
                <div className="text-xs sm:text-sm">
                    <span>
                        © 2026 NewLearning. All rights reserved.
                    </span>
                </div>

                <div className="flex gap-6 text-lg sm:text-xl">
                    <a href="https://github.com/">
                        <SiGithub className="hover:text-black cursor-pointer" />
                    </a> 

                    <a href="https://web.facebook.com/">
                        <SiFacebook className="hover:text-black cursor-pointer" />
                    </a>  

                    <a href="https://pk.linkedin.com/">
                        <CiLinkedin className="hover:text-black cursor-pointer" />
                    </a> 
                </div>

            </div>
        </main>
    );
}
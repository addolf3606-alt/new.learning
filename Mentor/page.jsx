import { VscGithub } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa6";
import { PiFacebookLogoBold } from "react-icons/pi";

export default function MentorPage(){
    return (
<main id="mentor">

    {/* Heading */}
    <div className="flex flex-col justify-center items-center py-12 md:py-16 gap-4 text-center px-4">
        <strong className="text-base md:text-lg text-green-600 font-bold">Mentors</strong>

        <strong className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Learn From Industry<span className="text-green-600"> Experts</span>
        </strong>

        <strong className="text-gray-600 text-sm sm:text-base max-w-xl">
            Our mentors are industry leaders with years of experience in their respective fields.
        </strong>
    </div>

    {/* Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-4 sm:mx-8 lg:mx-20 gap-6">

        {/* CARD 1 */}
        <div className="border border-gray-300 rounded-[30px] px-4 sm:px-5 py-5 flex flex-col gap-2 shadow-md transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
            <div className="flex flex-col justify-center items-center">
                <img className="rounded-full h-16 w-16 sm:h-20 sm:w-20 object-cover border-2 border-yellow-600" src="images (20).jpg" alt="" />
                <span className="text-white text-xs font-bold w-fit rounded-lg bg-yellow-500 px-2 mt-1">4.9★</span>
            </div>

            <div className="flex flex-col justify-center items-center gap-2 text-center">
                <strong>Ali Hader</strong>
                <strong className="text-white text-xs sm:text-sm bg-gray-500 rounded-lg px-2">Web Development Expert</strong>

                <strong className="text-gray-600 text-xs sm:text-sm">8+ years experience in data</strong> 
                <strong className="text-gray-600 text-xs sm:text-sm">analysis and machine</strong>
                <strong className="text-gray-600 text-xs sm:text-sm">learning. Former Data</strong> 
                <strong className="text-gray-600 text-xs sm:text-sm">Scientist at Facebook.</strong>

                <div className="flex mt-1 flex-row gap-2 text-xs sm:text-sm">
                    <strong>20k+ <span className="text-gray-600">Students.</span></strong>
                    <strong>10 <span className="text-gray-600">Courses.</span></strong>
                </div>

                <div className="flex flex-row gap-3 mt-2 text-lg">
                    <a href=""><VscGithub className="text-gray-600" /></a> 
                    <a href=""><FaLinkedin className="text-gray-600" /></a>
                    <a href=""><PiFacebookLogoBold className="text-gray-600" /></a>
                </div>
            </div>
        </div>

        {/* SAME structure for other cards (just responsive classes applied) */}

        <div className="border border-gray-300 rounded-[30px] px-4 sm:px-5 py-5 flex flex-col gap-2 shadow-md transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
            <div className="flex flex-col justify-center items-center">
                <img className="rounded-full h-16 w-16 sm:h-20 sm:w-20 object-cover border-2 border-yellow-600" src="image6.png" alt="" />
                <span className="text-white text-xs font-bold w-fit rounded-lg bg-yellow-500 px-2 mt-1">4.8★</span>
            </div>

            <div className="flex flex-col justify-center items-center gap-2 text-center">
                <strong>Moiz</strong> 
                <strong className="text-white text-xs sm:text-sm bg-gray-500 rounded-lg px-2">Digital Marketing Expert</strong>

                <strong className="text-gray-600 text-xs sm:text-sm">10+ years experience in</strong> 
                <strong className="text-gray-600 text-xs sm:text-sm">digital marketing</strong>
                <strong className="text-gray-600 text-xs sm:text-sm">Former Marketing</strong> 
                <strong className="text-gray-600 text-xs sm:text-sm">Manager at Google.</strong>

                <div className="flex mt-1 flex-row gap-2 text-xs sm:text-sm">
                    <strong>50k+ <span className="text-gray-600">Students.</span></strong>
                    <strong>8 <span className="text-gray-600">Courses.</span></strong>
                </div>

                <div className="flex flex-row gap-3 mt-2 text-lg">
                    <a href=""><VscGithub className="text-gray-600" /></a> 
                    <a href=""><FaLinkedin className="text-gray-600" /></a>
                    <a href=""><PiFacebookLogoBold className="text-gray-600" /></a>
                </div>
            </div>
        </div>

        <div className="border border-gray-300 rounded-[30px] px-4 sm:px-5 py-5 flex flex-col gap-2 shadow-md transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
            <div className="flex flex-col justify-center items-center">
                <img className="rounded-full h-16 w-16 sm:h-20 sm:w-20 object-cover border-2 border-yellow-600" src="image8.png" alt="" />
                <span className="text-white text-xs font-bold w-fit rounded-lg bg-yellow-500 px-2 mt-1">4.9★</span>
            </div>

            <div className="flex flex-col justify-center items-center gap-2 text-center">
                <strong>Abdullah</strong>
                <strong className="text-white text-xs sm:text-sm bg-gray-500 rounded-lg px-2">Data Science Specialist</strong>

                <strong className="text-gray-600 text-xs sm:text-sm">7+ years experience in data</strong> 
                <strong className="text-gray-600 text-xs sm:text-sm">analysis and machine</strong>
                <strong className="text-gray-600 text-xs sm:text-sm">learning. Former Data</strong> 
                <strong className="text-gray-600 text-xs sm:text-sm">Scientist at Facebook.</strong>

                <div className="flex mt-1 flex-row gap-2 text-xs sm:text-sm">
                    <strong>18K+ <span className="text-gray-600">Students.</span></strong>
                    <strong>12 <span className="text-gray-600">Courses.</span></strong>
                </div>

                <div className="flex flex-row gap-3 mt-2 text-lg">
                    <a href=""><VscGithub className="text-gray-600" /></a> 
                    <a href=""><FaLinkedin className="text-gray-600" /></a>
                    <a href=""><PiFacebookLogoBold className="text-gray-600" /></a>
                </div>
            </div>
        </div>

        <div className="border border-gray-300 rounded-[30px] px-4 sm:px-5 py-5 flex flex-col gap-2 shadow-md transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
            <div className="flex flex-col justify-center items-center">
                <img className="rounded-full h-16 w-16 sm:h-20 sm:w-20 object-cover border-2 border-yellow-600" src="image7.png" alt="" />
                <span className="text-white text-xs font-bold w-fit rounded-lg bg-yellow-500 px-2 mt-1">4.8★</span>
            </div>

            <div className="flex flex-col justify-center items-center gap-2 text-center">
                <strong>Hassan</strong>
                <strong className="text-white text-xs sm:text-sm bg-gray-500 rounded-lg px-2">Graphic Design Artist</strong>

                <strong className="text-gray-600 text-xs sm:text-sm">9+ years experience in</strong> 
                <strong className="text-gray-600 text-xs sm:text-sm">Graphic designing and</strong>
                <strong className="text-gray-600 text-xs sm:text-sm">Posters designing and</strong> 
                <strong className="text-gray-600 text-xs sm:text-sm">Expert in Adobe illustrator</strong>

                <div className="flex mt-1 flex-row gap-2 text-xs sm:text-sm">
                    <strong>22K+<span className="text-gray-600">Students.</span></strong>
                    <strong>9 <span className="text-gray-600">Courses.</span></strong>
                </div>

                <div className="flex flex-row gap-3 mt-2 text-lg">
                    <a href=""><VscGithub className="text-gray-600" /></a> 
                    <a href=""><FaLinkedin className="text-gray-600" /></a>
                    <a href=""><PiFacebookLogoBold className="text-gray-600" /></a>
                </div>
            </div>
        </div>

    </div>
</main>
    )}
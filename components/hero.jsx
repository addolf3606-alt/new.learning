import { FaYoutube } from "react-icons/fa";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { PiMedal } from "react-icons/pi";
import { IoBookOutline } from "react-icons/io5";


export default function HeroPage() {

  return (
    <main id="home">  
      <div className="flex flex-col lg:flex-row justify-between items-center py-8 md:py-12 lg:py-20 mx-4 sm:mx-6 md:mx-10 lg:mx-20 gap-10 lg:gap-0 mt-5 lg:mt-0">

        {/* LEFT */}
        <div className="flex flex-col gap-5 w-full lg:w-1/2 text-center lg:text-left">

          <a className="w-fit mx-auto lg:mx-0 bg-green-500/10 text-green-500 p-2 px-4 rounded-full border-2 border-green-500 hover:bg-green-500/20 transition-colors font-bold text-xs sm:text-sm md:text-base" href="#courses">
            . New Courses Available
          </a>

          <div className="flex flex-col gap-5">
            <strong className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Master New Skills<br className="hidden md:block" />
              <span className="text-green-500"> Online Anytime,</span><br className="hidden md:block" />
              Anywhere
            </strong>

            <strong className="text-gray-500 text-sm sm:text-base md:text-lg">
              Join over 50,000+ students learning from world-class <br className="hidden lg:block" />
              mentors. Transform your career with industry-leading <br className="hidden lg:block" /> courses.
            </strong>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <a className="bg-green-500 text-white text-sm sm:text-base md:text-lg rounded-full py-2 px-5 font-bold hover:shadow-lg shadow-gray-300 transition duration-300 ease-in-out hover:scale-110 text-center" href="#courses">
              Start Learning
            </a>

            <a
              className="inline-flex justify-center items-center gap-2 border border-black font-bold text-sm sm:text-base md:text-lg rounded-full py-2 px-4 w-full sm:w-fit bg-transparent text-black transition duration-300 hover:bg-black hover:text-white"
              href=""
            >
              <FaYoutube className="text-red-600" />
              <span>Youtube Channel</span>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-10 mt-4 justify-center lg:justify-start text-sm sm:text-base">
            <p className="inline-flex items-center gap-2">
              <MdOutlinePeopleAlt className="text-green-500 text-lg" />50k+ Students
            </p>
            <p className="inline-flex items-center gap-2">
              <IoBookOutline className="text-green-500 text-lg" />200+ Courses
            </p>
            <p className="inline-flex items-center gap-2">
              <PiMedal className="text-green-500 text-lg" />4.9 Rating
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0">

          <span className="absolute text-[10px] sm:text-xs md:text-sm -top-4 right-2 sm:right-5 lg:right-10 bg-white rounded-full text-gray-600 font-bold py-1 px-3 sm:py-2 sm:px-4 border-2 border-green-500 z-10 transition-transform hover:scale-105">
            Join 50k+ Students
          </span>

          <img
            className="rounded-lg border-4 border-green-500 w-full max-w-xs sm:max-w-sm md:max-w-md object-cover"
            src="teacher.jpg.webp"
            alt=""
          />

          <span className="absolute text-[10px] sm:text-xs md:text-sm -bottom-4 left-2 sm:left-5 lg:left-10 bg-white rounded-full text-gray-600 font-bold py-1 px-3 sm:py-2 sm:px-4 border-2 border-green-500 z-10 transition-transform hover:scale-105">
            200+ Courses Available
          </span>

        </div>

      </div>
    </main>
  )
}
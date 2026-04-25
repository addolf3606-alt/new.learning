import { RxPeople } from "react-icons/rx";
import { RiShoppingBag3Line } from "react-icons/ri";
import { TbWorldCode } from "react-icons/tb";
import { FiMessageCircle } from "react-icons/fi";
import { LuBellRing } from "react-icons/lu";
import { LuHandshake } from "react-icons/lu";

export default function GroupPage(){
    return(

<main id="community" className="py-16 md:py-24 lg:py-32">

  {/* Top Title */}
  <div className="flex justify-center">
    <a className="text-green-600 font-bold text-base sm:text-lg">
      Community
    </a>
  </div>

  {/* Main Section */}
  <div className="flex flex-col lg:flex-row justify-between items-center py-10 lg:py-16 mx-4 sm:mx-8 lg:mx-20 gap-10">

    {/* LEFT */}
    <div className="flex flex-col gap-5 w-full lg:w-1/2 text-center lg:text-left">

      <div className="flex flex-col gap-5">
        <strong className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Join Our Thriving<br/>
          <span className="text-green-500"> Learning Community</span>
        </strong>

        <strong className="text-gray-500 text-sm sm:text-base md:text-lg">
          Join over 50,000+ students learning from world-class <br className="hidden md:block" />
          mentors. Transform your career with industry-leading <br className="hidden md:block" /> courses.
        </strong>
      </div>

      <div className="flex justify-center lg:justify-start">
        <a className="bg-green-500 text-white text-sm sm:text-base md:text-lg rounded-full py-2 px-5 font-bold hover:shadow-lg transition duration-300 hover:scale-105">
          Join Community
        </a>
      </div>

    </div>

    {/* RIGHT IMAGE */}
    <div className="w-full lg:w-1/2 flex justify-center">
      <img className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg shadow-green-200 shadow-lg rounded-lg" src="Gemini.jpg" alt="" />
    </div>

  </div>

  {/* GRID */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-4 sm:px-8 lg:px-20 py-10">

    {/* CARD */}
    <div className="flex flex-col items-start p-5 shadow-md hover:shadow-xl transition duration-300 rounded-xl">
      <RxPeople className="text-green-600 bg-gray-200 rounded-full p-1 text-3xl mb-2" />
      <h6 className="text-gray-700 text-sm sm:text-base">
        <span className="text-base sm:text-lg font-bold text-black">Study Groups</span><br /> 
        Connect with like-minded learners and form study groups for collaborative learning.
      </h6>
    </div>

    <div className="flex flex-col items-start p-5 shadow-md hover:shadow-xl transition duration-300 rounded-xl">
      <RiShoppingBag3Line className="text-green-600 bg-gray-200 rounded-full p-1 text-3xl mb-2" />
      <h6 className="text-gray-700 text-sm sm:text-base">
        <span className="text-base sm:text-lg font-bold text-black">Live Sessions</span><br />
        Join live Q&A sessions and workshops with industry experts.
      </h6>
    </div>

    <div className="flex flex-col items-start p-5 shadow-md hover:shadow-xl transition duration-300 rounded-xl">
      <TbWorldCode className="text-green-600 bg-gray-200 rounded-full p-1 text-3xl mb-2" />
      <h6 className="text-gray-700 text-sm sm:text-base">
        <span className="text-base sm:text-lg font-bold text-black">Global Community</span><br />  
        Connect with students from 150+ countries worldwide.
      </h6>
    </div>

    <div className="flex flex-col items-start p-5 shadow-md hover:shadow-xl transition duration-300 rounded-xl">
      <FiMessageCircle className="text-green-600 bg-gray-200 rounded-full p-1 text-3xl mb-2" />
      <h6 className="text-gray-700 text-sm sm:text-base">
        <span className="text-base sm:text-lg font-bold text-black">Discussion Forums</span><br /> 
        Engage in meaningful discussion and get answers from peers and mentors.
      </h6>
    </div>

    <div className="flex flex-col items-start p-5 shadow-md hover:shadow-xl transition duration-300 rounded-xl">
      <LuBellRing className="text-green-600 bg-gray-200 rounded-full p-1 text-3xl mb-2"/>
      <h6 className="text-gray-700 text-sm sm:text-base">
        <span className="text-base sm:text-lg font-bold text-black">Peer Support</span><br />
        Get help and support from fellow learners anytime you need it.
      </h6>
    </div>

    <div className="flex flex-col items-start p-5 shadow-md hover:shadow-xl transition duration-300 rounded-xl">
      <LuHandshake className="text-green-600 bg-gray-200 rounded-full p-1 text-3xl mb-2"/>
      <h6 className="text-gray-700 text-sm sm:text-base">
        <span className="text-base sm:text-lg font-bold text-black">Project Collaboration</span><br />
        Work on real-world projects with your peers.
      </h6>
    </div>

  </div>

</main>

    )
}
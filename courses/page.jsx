

export default function CourseName() {
  return (

    <main id="courses">

      {/* Heading */}
      <div className="flex items-center justify-center py-10 lg:py-20 px-4 sm:px-6 text-center">
        <div className="flex flex-col items-center gap-2 max-w-2xl">
          <strong className="text-green-600 text-base sm:text-lg">Course</strong>

          <strong className="text-2xl sm:text-3xl md:text-4xl">
            Explore Our Popular <span className="text-green-600">Courses</span>
          </strong>

          <strong className="text-gray-600 text-xs sm:text-sm md:text-base">
            Choose from hundreds of courses designed by industry experts to help
            <br className="hidden md:block" /> you achieve your goals.
          </strong>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-20 py-10">

        {/* CARD */}
        <div className="border border-gray-300 rounded-[25px] px-4 sm:px-5 py-5 flex flex-col gap-2 shadow-md hover:shadow-xl transition duration-300 hover:scale-105 cursor-pointer">
          <p className="text-white bg-yellow-500 rounded-full px-3 py-1 text-xs sm:text-sm w-fit">Development</p>

          <img className="rounded-lg w-full h-40 object-cover" src="course-img-1.jpg" alt="" />

          <strong className="ml-1 sm:ml-2 text-sm sm:text-base">Web Development<br />Bootcamp</strong>

          <div className="flex items-center gap-3 ml-1 sm:ml-2 mt-2">
            <img src="images (20).jpg" alt="" className="h-6 w-6 sm:h-7 sm:w-7 rounded-full" />
            <strong className="text-gray-600 text-sm">moiz</strong>
          </div>

          <div className="flex justify-between text-xs sm:text-sm mx-1 sm:mx-2 mt-2">
            <span>⏱ 12 Weeks</span>
            <span>👥 2.4k</span>
            <span>⭐ 4.9</span>
          </div>

          <hr className="my-2 text-gray-400" />

          <div className="flex justify-between items-center">
            <strong className="text-lg sm:text-xl font-bold">
              <span className="text-xl">$</span> 49
            </strong>

            <a className="text-white text-xs sm:text-sm font-bold bg-green-600 rounded-full px-3 py-1.5 hover:shadow-md"
            href="#pricing">
              Enroll now
            </a>
          </div>
        </div>

        {/* Repeat same pattern for other cards */}

        <div className="border border-gray-300 rounded-[25px] px-4 sm:px-5 py-5 flex flex-col gap-2 shadow-md hover:shadow-xl transition duration-300 hover:scale-105 cursor-pointer">
          <p className="text-white bg-red-500 rounded-full px-3 py-1 text-xs sm:text-sm w-fit">Design</p>
          <img className="rounded-lg w-full h-40 object-cover" src="course-img-2.jpg" alt="" />
          <strong className="ml-1 sm:ml-2 text-sm sm:text-base">UI/UX Design Masterclass</strong>

          <div className="flex items-center gap-3 ml-1 sm:ml-2 mt-2">
            <img src="image7.png" alt="" className="h-6 w-6 sm:h-7 sm:w-7 rounded-full" />
            <strong className="text-gray-600 text-sm">Hader</strong>
          </div>

          <div className="flex justify-between text-xs sm:text-sm mx-1 sm:mx-2 mt-2">
            <span>⏱ 8 Weeks</span>
            <span>👥 1.8k</span>
            <span>⭐ 4.8</span>
          </div>

          <hr className="my-2 text-gray-400" />

          <div className="flex justify-between items-center">
            <strong className="text-lg sm:text-xl font-bold"><span>$</span> 79</strong>
            <a className="text-white text-xs sm:text-sm font-bold bg-green-600 rounded-full px-3 py-1.5"
             href="#pricing">Enroll now</a>
          </div>
        </div>

        <div className="border border-gray-300 rounded-[25px] px-4 sm:px-5 py-5 flex flex-col gap-2 shadow-md hover:shadow-xl transition duration-300 hover:scale-105 cursor-pointer">
          <p className="text-white bg-blue-500 rounded-full px-3 py-1 text-xs sm:text-sm w-fit">Data Science</p>
          <img className="rounded-lg w-full h-40 object-cover" src="course-img-3.jpg" alt="" />
          <strong className="ml-1 sm:ml-2 text-sm sm:text-base">Data Science & Analytics</strong>

          <div className="flex items-center gap-3 ml-1 sm:ml-2 mt-2">
            <img src="image8.png" alt="" className="h-6 w-6 sm:h-7 sm:w-7 rounded-full" />
            <strong className="text-gray-600 text-sm">Ali</strong>
          </div>

          <div className="flex justify-between text-xs sm:text-sm mx-1 sm:mx-2 mt-2">
            <span>⏱ 16 Weeks</span>
            <span>👥 3.4k</span>
            <span>⭐ 4.9</span>
          </div>

          <hr className="my-2 text-gray-400" />

          <div className="flex justify-between items-center">
            <strong className="text-lg sm:text-xl font-bold"><span>$</span> 129</strong>
            <a className="text-white text-xs sm:text-sm font-bold bg-green-600 rounded-full px-3 py-1.5"
            href="#pricing">Enroll now</a>
          </div>
        </div>

        <div className="border border-gray-300 rounded-[25px] px-4 sm:px-5 py-5 flex flex-col gap-2 shadow-md hover:shadow-xl transition duration-300 hover:scale-105 cursor-pointer">
          <p className="text-white bg-green-500 rounded-full px-3 py-1 text-xs sm:text-sm w-fit">Marketing</p>
          <img className="rounded-lg w-full h-40 object-cover" src="course-img-4.jpg" alt="" />
          <strong className="ml-1 sm:ml-2 text-sm sm:text-base">Digital Marketing Pro</strong>

          <div className="flex items-center gap-3 ml-1 sm:ml-2 mt-2">
            <img src="image9.png" alt="" className="h-6 w-6 sm:h-7 sm:w-7 rounded-full" />
            <strong className="text-gray-600 text-sm">Abdullah</strong>
          </div>

          <div className="flex justify-between text-xs sm:text-sm mx-1 sm:mx-2 mt-2">
            <span>⏱ 6 Weeks</span>
            <span>👥 1.5k</span>
            <span>⭐ 4.7</span>
          </div>

          <hr className="my-2 text-gray-400" />

          <div className="flex justify-between items-center">
            <strong className="text-lg sm:text-xl font-bold"><span>$</span> 69</strong>
            <a className="text-white text-xs sm:text-sm font-bold bg-green-600 rounded-full px-3 py-1.5"
            href="#pricing">Enroll now</a>
          </div>
        </div>

      </div>

      {/* Button */}
      <div className="flex justify-center mt-4">
        <a className="font-bold border border-black rounded-full py-2 px-4 text-sm sm:text-base transition duration-300 hover:bg-black hover:text-white">
          View All Courses ➔
        </a>
      </div>

    </main>
  )
}
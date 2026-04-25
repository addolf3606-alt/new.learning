export default function TestimonialPage(){
    return(
   
   <main id="testimonials" className="py-16 md:py-24">

   {/* Heading */}
   <div className="flex flex-col leading-6 items-center justify-center gap-3 text-center px-4">
        <span className="text-green-600 text-base md:text-lg font-bold">Testimonials</span>

        <span className="text-2xl sm:text-3xl md:text-4xl font-bold">
            What Our Students Say
        </span>

        <span className="text-gray-600 text-sm sm:text-base font-bold max-w-2xl">
            Join thousands of successful students who have transformed their careers with LearnHub.
        </span>
   </div> 


   {/* Grid */}
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-8 lg:px-20 py-10 md:py-16">

    {/* CARD */}
    <div className="flex flex-col items-start gap-2 border border-gray-300 rounded-[25px] px-5 sm:px-6 py-5 shadow-md">
        <span>⭐ ⭐ ⭐ ⭐ ⭐</span>
        <span className="text-green-600 font-bold text-base sm:text-lg">99</span>

        <h6 className="text-gray-600 text-xs sm:text-sm md:text-base font-bold">
        "LearnHub completely transformed my career.
        The web development bootcamp gave me the skills
        I needed to land my dream job at Meta. The mentors are
        incredible!"
        </h6>

        <hr className="w-full my-2 text-gray-400" />

        <div className="flex flex-row gap-2 items-center">
            <img src="image8.png" alt="" className="rounded-full h-6 w-6 sm:h-7 sm:w-7" />
            <div className="flex flex-col">
                <span className="font-bold text-sm">Moiz</span>
                <span className="text-gray-600 text-xs sm:text-sm font-bold">Software Developer at Meta</span>
            </div>
        </div>
    </div>

    {/* SAME STRUCTURE CARDS */}

    <div className="flex flex-col items-start gap-2 border border-gray-300 rounded-[25px] px-5 sm:px-6 py-5 shadow-md">
        <span>⭐ ⭐ ⭐ ⭐ ⭐</span>
        <span className="text-green-600 font-bold text-base sm:text-lg">99</span>

        <h6 className="text-gray-600 text-xs sm:text-sm md:text-base font-bold">
        "The UI/UX design course was exactly what I needed. The practical
        projects and mentor feedback helped me build a portfolio that got me hired at Spotify."
        </h6>

        <hr className="w-full my-2 text-gray-400" />

        <div className="flex flex-row gap-2 items-center">
            <img src="image7.png" alt="" className="rounded-full h-6 w-6 sm:h-7 sm:w-7" />
            <div className="flex flex-col">
                <span className="font-bold text-sm">Ali</span>
                <span className="text-gray-600 text-xs sm:text-sm font-bold">UX Designer at Spotify</span>
            </div>
        </div>
    </div>

    <div className="flex flex-col items-start gap-2 border border-gray-300 rounded-[25px] px-5 sm:px-6 py-5 shadow-md">
        <span>⭐ ⭐ ⭐ ⭐ ⭐</span>
        <span className="text-green-600 font-bold text-base sm:text-lg">99</span>

        <h6 className="text-gray-600 text-xs sm:text-sm md:text-base font-bold">
        "I switched careers from marketing to data science thanks to LearnHub. The structured 
        curriculum and supportive community made the transition seamless."
        </h6>

        <hr className="w-full my-2 text-gray-400" />

        <div className="flex flex-row gap-2 items-center">
            <img src="image6.png" alt="" className="rounded-full h-6 w-6 sm:h-7 sm:w-7" />
            <div className="flex flex-col">
                <span className="font-bold text-sm">Hader</span>
                <span className="text-gray-600 text-xs sm:text-sm font-bold">Data Analyst at Amazon</span>
            </div>
        </div>
    </div>

    <div className="flex flex-col items-start gap-2 border border-gray-300 rounded-[25px] px-5 sm:px-6 py-5 shadow-md">
        <span>⭐ ⭐ ⭐ ⭐ ⭐</span>
        <span className="text-green-600 font-bold text-base sm:text-lg">99</span>

        <h6 className="text-gray-600 text-xs sm:text-sm md:text-base font-bold">
        "As a freelancer, I needed flexible learning. LearnHub's self-paced
        courses fit perfectly into my schedule. Highly recommend!"
        </h6>

        <hr className="w-full my-2 text-gray-400" />

        <div className="flex flex-row gap-2 items-center">
            <img src="images (20).jpg" alt="" className="rounded-full h-6 w-6 sm:h-7 sm:w-7" />
            <div className="flex flex-col">
                <span className="font-bold text-sm">Hassan</span>
                <span className="text-gray-600 text-xs sm:text-sm font-bold">Freelance Designer</span>
            </div>
        </div>
    </div>

    <div className="flex flex-col items-start gap-2 border border-gray-300 rounded-[25px] px-5 sm:px-6 py-5 shadow-md">
        <span>⭐ ⭐ ⭐ ⭐ ⭐</span>
        <span className="text-green-600 font-bold text-base sm:text-lg">99</span>

        <h6 className="text-gray-600 text-xs sm:text-sm md:text-base font-bold">
        "The marketing course helped me understand how to grow my startup. The ROI has been
        incredible - best investment in my education."
        </h6>

        <hr className="w-full my-2 text-gray-400" />

        <div className="flex flex-row gap-2 items-center">
            <img src="image9.png" alt="" className="rounded-full h-6 w-6 sm:h-7 sm:w-7" />
            <div className="flex flex-col">
                <span className="font-bold text-sm">Abdullah</span>
                <span className="text-gray-600 text-xs sm:text-sm font-bold">Startup Founder</span>
            </div>
        </div>
    </div>

    <div className="flex flex-col items-start gap-2 border border-gray-300 rounded-[25px] px-5 sm:px-6 py-5 shadow-md">
        <span>⭐ ⭐ ⭐ ⭐ ⭐</span>
        <span className="text-green-600 font-bold text-base sm:text-lg">99</span>

        <h6 className="text-gray-600 text-xs sm:text-sm md:text-base font-bold">
        "The combination of technical and business courses gave me
        a unique edge. I've recommended LearnHub to all my colleagues."
        </h6>

        <hr className="w-full my-2 text-gray-400" />

        <div className="flex flex-row gap-2 items-center py-2">
            <img src="images (21).jpg" alt="" className="rounded-full h-6 w-6 sm:h-7 sm:w-7" />
            <div className="flex flex-col">
                <span className="font-bold text-sm">Hader</span>
                <span className="text-gray-600 text-xs sm:text-sm font-bold">Product Manager at Google</span>
            </div>
        </div>
    </div>

   </div>

   </main>
    )
}
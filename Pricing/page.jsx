
export default function PricePage(){
    return(
     <main id="pricing">

       {/* Heading */}
       <div className="flex flex-col gap-3 justify-center items-center text-center px-4 py-10">
          <span className="text-green-600 font-bold text-base sm:text-lg">Pricing</span>

          <span className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Simple, Transparent <span className="text-green-600">Pricing</span>
          </span>

          <span className="text-gray-700 font-bold text-sm sm:text-base max-w-xl">
            Choose the plan that fits your learning goals.
            No hidden fees, cancel anytime.
          </span>
       </div>

       {/* Cards */}
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-4 sm:p-6 mx-2 sm:mx-10 lg:mx-20 py-10 sm:py-16 lg:py-20 gap-6">

        {/* Starter */}
        <div className="flex flex-col p-4 sm:p-5 gap-2 border border-gray-300 rounded-[30px] mx-2 sm:mx-3 lg:mx-5 px-4 sm:px-5 py-5 shadow-lg">
          
          <div className="flex flex-col gap-2 items-center justify-center py-3">
            <span className="text-lg sm:text-xl font-bold">Starter</span>
            <span className="text-gray-500 font-bold text-sm">Perfect for beginners</span>
            <span className="text-2xl sm:text-3xl font-bold">Free</span>
          </div>

          <div className="flex flex-col py-5 gap-3 text-gray-600 font-bold text-xs sm:text-sm">
            <span>✅ Access to 10 free courses</span>
            <span>✅ Basic community access</span>
            <span>✅ Email support</span>
            <span>✅ Mobile app access</span>
            <span>✅ Course completion certificates</span>
          </div>

          <div className="flex items-center justify-center">
            <a className="bg-gray-200 p-2 px-6 sm:px-10 rounded-full font-bold my-5 text-gray-700 text-sm sm:text-base" href="">
              Get Started
            </a>
          </div>
        </div>

        {/* Pro */}
        <div className="relative flex flex-col p-4 sm:p-5 gap-2 border-2 border-green-500 rounded-[30px] mx-2 sm:mx-3 lg:mx-5 px-4 sm:px-5 py-5 shadow-lg">

          <span className="absolute -top-3 right-5 sm:right-10 bg-green-500 text-white px-2 py-1 text-xs sm:text-sm font-bold rounded-full">
            Most Popular
          </span>

          <div className="flex flex-col gap-2 items-center justify-center py-3">
            <span className="text-lg sm:text-xl font-bold">Pro</span>
            <span className="text-gray-500 font-bold text-sm">Most popular choice</span>
            <span className="text-2xl sm:text-3xl font-bold">
              $29<span className="text-sm sm:text-lg text-gray-600">/month</span>
            </span>
          </div>

          <div className="flex flex-col py-5 gap-3 text-gray-600 font-bold text-xs sm:text-sm">
            <span>✅ Unlimited course access</span>
            <span>✅ Full community features</span>
            <span>✅ Priority support 24/7</span>
            <span>✅ Downloadable resources</span>
            <span>✅ Live Q&A sessions</span>
            <span>✅ Project reviews</span>
            <span>✅ Career coaching</span>
          </div>

          <div className="flex items-center justify-center">
            <a className="bg-green-500 p-2 px-6 sm:px-10 rounded-full font-bold my-5 text-white text-sm sm:text-base" href="">
              Start Pro Trial
            </a>
          </div>
        </div>

        {/* Enterprise */}
        <div className="flex flex-col p-4 sm:p-5 gap-2 border border-gray-300 rounded-[30px] mx-2 sm:mx-3 lg:mx-5 px-4 sm:px-5 py-5 shadow-lg">

          <div className="flex flex-col gap-2 items-center justify-center py-3">
            <span className="text-lg sm:text-xl font-bold">Enterprise</span>
            <span className="text-gray-500 font-bold text-sm">For teams & organizations</span>
            <span className="text-2xl sm:text-3xl font-bold">
              $99<span className="text-sm sm:text-lg text-gray-600">/month</span>
            </span>
          </div>

          <div className="flex flex-col py-5 gap-3 text-gray-600 font-bold text-xs sm:text-sm">
            <span>✅ Everything in Pro</span>
            <span>✅ Custom learning paths</span>
            <span>✅ Team analytics dashboard</span>
            <span>✅ Dedicated success manager</span>
            <span>✅ Custom integrations</span>
            <span>✅ SSO authentication</span>
            <span>✅ Invoice billing</span>
          </div>

          <div className="flex items-center justify-center">
            <a className="bg-gray-200 p-2 px-6 sm:px-10 rounded-full font-bold my-5 text-gray-700 text-sm sm:text-base" href="">
              Contact Sales
            </a>
          </div>
        </div>

       </div>

       {/* Bottom Text */}
       <div className="flex flex-row justify-center px-4 text-center">
        <span className="text-gray-700 text-xs sm:text-sm font-bold">
          All plans include a 14-day money-back guarantee. No questions asked.
        </span>
       </div>

     </main>
    )
}
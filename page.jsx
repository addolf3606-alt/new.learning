import CourseName from "./courses/page";
import HeroPage from "./components/hero";
import NewNavbar from "./components/nav";
import MentorPage from "./Mentor/page";
import GroupPage from "./Group/page";
import TestimonialPage from "./Testimonials/page";
import PricePage from "./Pricing/page";
import FooterPage from "./components/footer";





export default function Home() {
  return (
    
 <main>
<NewNavbar/>
<HeroPage/>
<CourseName/>
<MentorPage />
<GroupPage/>
<TestimonialPage/>
<PricePage/>
<FooterPage/>
 </main>
   
  );
}
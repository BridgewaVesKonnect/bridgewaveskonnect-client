import {
   AboutUs,
   BookConsultation,
   Footer,
   Heading,
   HowItWorks,
   OurService,
   WhyChooseUs,
} from "@/src/components";
import { Semantic } from "@/src/layout";

const Home = () => {
   return (
      <Semantic>
         <Heading />
         <WhyChooseUs />
         <OurService />
         <HowItWorks />
         <AboutUs />
         <BookConsultation />
         <Footer />
      </Semantic>
   );
};

export default Home;

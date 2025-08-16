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
import { useRef } from "react";

const Home = () => {
   const headingRef = useRef<HTMLDivElement>(null);
   return (
      <Semantic
         data={{
            headingRef: headingRef,
         }}
      >
         <Heading ref={headingRef} />
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

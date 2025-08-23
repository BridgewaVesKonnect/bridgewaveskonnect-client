import {
   AboutUs,
   BookConsultation,
   Footer,
   Heading,
   HowItWorks,
   OurService,
   SplashScreen,
   WhyChooseUs,
} from "@/src/components";
import { Semantic } from "@/src/layout";
import { State } from "@/src/state/store/store";
import { useSelector } from "react-redux";

const Home = () => {
   const { innerHeight } = useSelector((state: State) => state.ui);
   return innerHeight ? (
      <Semantic>
         <Heading />
         <WhyChooseUs />
         <OurService />
         <HowItWorks />
         <AboutUs />
         <BookConsultation />
         <Footer />
      </Semantic>
   ) : (
      <SplashScreen />
   );
};

export default Home;

import Banner from "../../components/Banner/Banner";
import Contact from "../../components/Contact/Contact";
import Faq from "../../components/FAQ/FAQ";
import Features from "../../components/Features/Features";
import Offer from "../../components/Offer/Offer";
import Review from "../../components/Review/Review";
import Advertisements from "./Advertisements/Advertisements";

const Home = () => {
  return (
    <div className="my-10 space-y-6">
      <Banner />
      <Advertisements />
      <Offer />
      <Features />
      <Faq />
      <Review />
      <Contact />
    </div>
  );
};

export default Home;

import Hero from '../sections/Hero';
import Problem from '../sections/Problem';
import Solution from '../sections/Solution';
import ServicesPreview from '../sections/ServicesPreview';
import Offer from '../sections/Offer';
import Testimonials from '../sections/Testimonials';
import FinalCTA from '../sections/FinalCTA';

const Home = () => {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <ServicesPreview />
      <Offer />
      <Testimonials />
      <FinalCTA />
    </>
  );
};

export default Home;
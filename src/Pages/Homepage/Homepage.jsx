import Growth from './Sections/Growth';
import Hero from './Sections/Hero';
import HowItWorks from './Sections/HowItWorks';
import PlansSection from './Sections/PlansSection';
import PowerfulPlatform from './Sections/PowerfulPlatform';
import ReviewSection from './Sections/ReviewSection';

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Growth />
      <HowItWorks />
      <PowerfulPlatform />
      <ReviewSection />
      <PlansSection />
    </div>
  );
};

export default Homepage;

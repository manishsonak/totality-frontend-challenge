import HeroSection from "./HeroSection";
import Listing from "./Listing";
import Locations from "./Locations";


function Home() {
  return (
    <>
    <div className="container mx-auto">

      <HeroSection />
      <Listing/>
      <Locations />
    </div>
    
    </>
  );
}

export default Home;

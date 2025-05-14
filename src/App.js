import Navbar from "./components/core/Navbar";
import HeroSection from "./components/core/HeroSection";
import BannerSection from "./components/core/BannerSection";
import Testimonials from "./components/core/testimonials";
import HeroSplitSection from "./components/core/HeroSplitSection";
import Footer from "./components/core/Footer";


function App() {
  return (
    <div className="App">

      <Navbar/>
      <HeroSection/>
      <BannerSection/>
      <Testimonials/>
      <HeroSplitSection/>
      <Footer/>

    </div>
  );
}

export default App;

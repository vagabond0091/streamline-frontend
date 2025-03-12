import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Hero from "../components/hero-banner/hero";
import BannerWithImage from "../components/utilities/BannerWithImage";
import Collection from "../components/utilities/Collections";
import NewArrival from "../components/utilities/NewArrival";
import Testimonial from "../components/utilities/Testimonial";

 function LandingPage() {


  return (
    <div  className="bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 min-h-screen font-sans">
       <Header/>
       <Hero/>
       <NewArrival/>
       <BannerWithImage left={false}/>
       <Collection/>
       <BannerWithImage left={true}/>
       <Testimonial/>
       <Footer/>
    </div>
    
  )
}
export default LandingPage;

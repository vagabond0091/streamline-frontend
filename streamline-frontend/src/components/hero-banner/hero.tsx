import { useState } from "react";
import assets from '../../assets/laptopbanner.jpg'
function Hero() {
    const slides = [
        { text: "Welcome to Our Store", subtext: "Exclusive discounts and premium products waiting for you.",image: assets},
        { text: "Limited Time Offer!", subtext: "Get up to 50% off on select items.", image: assets },
        { text: "New Arrivals", subtext: "Check out the latest trends and styles.", image: assets }
      ];
    
      const [currentSlide, setCurrentSlide] = useState(0);
    
      const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      };
    
      const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      };
    return (
       <section className="relative text-white text-center py-14 shadow-lg rounded-lg mx-4  overflow-hidden">
            <div className="relative w-full h-96">
                <img src={slides[currentSlide].image} alt="Slide" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center px-6 rounded-lg">
                    <h2 className="text-5xl font-bold">{slides[currentSlide].text}</h2>
                    <p className="mt-4 text-lg">{slides[currentSlide].subtext}</p>
                    <button className="mt-6 px-6 py-3 bg-white text-purple-600 rounded-full font-semibold shadow-md hover:bg-gray-200 transition">Shop Now</button>
                </div>
            </div>
            <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-purple-600 px-4 py-2 rounded-full shadow-md hover:bg-gray-200 transition">&#8592;</button>
            <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-purple-600 px-4 py-2 rounded-full shadow-md hover:bg-gray-200 transition">&#8594;</button>
        </section>
    );

}
  
export default Hero;
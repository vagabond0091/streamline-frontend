import { useState } from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import assets from '../assets/laptopbanner.jpg'
import assets1 from '../assets/front.jpg'
import assets2 from '../assets/back.jpg'
import assets3 from '../assets/left.jpg'
import { ShoppingCart, CreditCard } from "lucide-react";
import Collection from "../components/utilities/Collections";
function ProductView (){
    const product = {
        name: "Kimono Jacket",
        description: "A stylish kimono jacket perfect for any occasion. Proudly produced from japan stitching company that will help them revitalize their economy through our modern shopping site.",
        price: "$119.99",
        sold: 234,
        images: [
            assets,
            assets1,
            assets2,
            assets3,
        ],
      };
    
      const [mainImage, setMainImage] = useState(product.images[0]);
    return (
        <div className="bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 min-h-screen font-sans">
            <Header />
            <section className="bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 min-h-screen font-sans flex items-center justify-center p-6">
                <div className="container mx-auto  bg-white rounded-lg shadow-lg p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Side: Product Images */}
                    <div>
                        <img
                        src={mainImage}
                        alt={product.name}
                        className="w-full h-96 object-cover rounded-lg shadow-md"
                        />
                        <div className="flex mt-4 gap-2 justify-center">
                        {product.images.map((img, index) => (
                         
                            <img
                            key={index}
                            src={img}
                            alt={product.name}
                            className={`w-16 h-16 object-cover rounded-lg cursor-pointer border-2 transition-all duration-300 ${mainImage === img ? "border-indigo-600 scale-105" : "border-gray-300 hover:scale-105"}`}
                            onClick={() => setMainImage(img)}
                            />
                        ))}
                        </div>
                    </div>

                    {/* Right Side: Product Details */}
                    <div className="flex flex-col gap-4 text-center md:text-left">
                        <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                        <p className="text-gray-600">{product.description}</p>
                        <p className="text-2xl font-semibold text-indigo-600">{product.price}</p>
                        <p className="text-gray-500">Sold: {product.sold}</p>
                        <div className="flex gap-3 mt-4">
                            <button className="flex items-center justify-center gap-2 w-1/2 px-5 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition">
                                <ShoppingCart size={20} /> Add to Cart
                            </button>
                            <button className="flex items-center justify-center gap-2 w-1/2 px-5 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition">
                                <CreditCard size={20} /> Proceed to Checkout
                            </button>
                            </div>
                    </div>
                    </div>
                </div>
                </section>
                <Collection isFromProductView={true} productViewText={"You might also like"}/>
        <Footer />
        </div>
    );
}
export default ProductView;
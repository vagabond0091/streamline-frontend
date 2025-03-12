import { useState } from "react";
import assets from '../../assets/laptopbanner.jpg'
function NewArrival(){
    const newArrivals = [
        { id: 1, name: "New Arrival 1", price: "$119.99", image: assets },
        { id: 2, name: "New Arrival 2", price: "$129.99", image: assets },
        { id: 3, name: "New Arrival 3", price: "$139.99", image: assets },
        { id: 4, name: "New Arrival 4", price: "$149.99", image:assets },
        { id: 5, name: "New Arrival 5", price: "$149.99", image: assets },
        { id: 6, name: "New Arrival 6", price: "$149.99", image:assets }
      ];

    const [currentProduct, setCurrentProduct] = useState(0);
    const nextProduct = () => {
        if (currentProduct + 4 >= newArrivals.length) {
          setCurrentProduct(0);
        } else {
          setCurrentProduct((prev) => prev + 1);
        }
      };
      const prevProduct = () => {
        if (currentProduct === 0) {
          setCurrentProduct(Math.max(newArrivals.length - 4, 0));
        } else {
          setCurrentProduct((prev) => prev - 1);
        }
      };
    return (
        <section className="text-gray-900 py-12 px-6 rounded-lg shadow-lg mt-10 mx-4">
            <h2 className="text-3xl font-bold text-center mb-6 text-black">New Arrivals</h2>
            <div className="relative text-center">
            <div className="flex justify-center gap-4">
                {newArrivals.slice(currentProduct, currentProduct + 4).map((product) => (
                <div key={product.id} className="w-64 p-6 shadow-xl rounded-2xl bg-white">
                    <div className="image w-full ">
                    <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-xl" />
                    </div>
                    <div>   
                    <h3 className="mt-4 text-xl font-semibold text-indigo-800">{product.name}</h3>
                    <p className="text-gray-500">{product.price}</p>
                    </div>
                    
                </div>
                ))}
            </div>
            <button onClick={prevProduct} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-indigo-600 px-4 py-2 rounded-full shadow-md hover:bg-gray-200 transition">&#8592;</button>
            <button onClick={nextProduct} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-indigo-600 px-4 py-2 rounded-full shadow-md hover:bg-gray-200 transition">&#8594;</button>
            </div>
        </section>
    );
}
export default NewArrival
import { useState } from "react";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import assets from '../assets/laptopbanner.jpg'
import Pagination from "../components/utilities/Pagination";
import { Link } from "react-router-dom";

function Product(){
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 5;
    const products = [
      { id: 1, name: "Kimono Jacket", price: "$119.99", image: assets, category: "Men" },
      { id: 2, name: "Sakura Dress", price: "$129.99", image: assets, category: "Women" },
      { id: 3, name: "Origami Necklace", price: "$139.99",image: assets, category: "Accessories" },
      { id: 4, name: "Tatami Sandals", price: "$149.99", image: assets, category: "Footwear" },
      { id: 5, name: "Samurai Tee", price: "$159.99", image: assets, category: "Men" },
      { id: 6, name: "Kawaii Hoodie", price: "$169.99", image: assets, category: "Women" },
      { id: 7, name: "Furoshiki Wrap", price: "$179.99", image: assets, category: "Accessories" },
      { id: 8, name: "Geta Wooden Clogs", price: "$189.99", image: assets, category: "Footwear" },
      
      { id: 9, name: "Kimono Jacket", price: "$119.99", image: assets, category: "Men" },
      { id: 10, name: "Sakura Dress", price: "$129.99", image: assets, category: "Women" },
      { id: 11, name: "Origami Necklace", price: "$139.99",image: assets, category: "Accessories" },
      { id: 12, name: "Tatami Sandals", price: "$149.99", image: assets, category: "Footwear" },
      { id: 13, name: "Samurai Tee", price: "$159.99", image: assets, category: "Men" },
      { id: 14, name: "Kawaii Hoodie", price: "$169.99", image: assets, category: "Women" },
      { id: 15, name: "Furoshiki Wrap", price: "$179.99", image: assets, category: "Accessories" },
      { id: 16, name: "Geta Wooden Clogs", price: "$189.99", image: assets, category: "Footwear" },
      { id: 17, name: "Geta Wooden Clogs", price: "$189.99", image: assets, category: "Footwear" },
      { id: 18, name: "Geta Wooden Clogs", price: "$189.99", image: assets, category: "Footwear" }
    ];
  
    const filteredProducts = selectedCategory === "All" ? products : products.filter(product => product.category === selectedCategory);
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    const displayedProducts = filteredProducts.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);
    return (
        <div className="bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 min-h-screen font-sans">
            <Header/>
            <section className="mx-4 mt-16 grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
                <div className="bg-gray-100 shadow-lg rounded-lg xl:min-h-[600px] xl:w-64 xl:sticky xl:top-20 h-auto p-6 md:col-span-1 md:relative md:top-0 md:h-full   ">
                    <h3 className="text-xl font-bold mb-4 text-gray-900">Filter by Category</h3>
                    <ul>
                    {["All", "Men", "Women", "Accessories", "Footwear"].map((category) => (
                        <li
                        key={category}
                        className={`cursor-pointer p-2 rounded ${selectedCategory === category ? "bg-indigo-600 text-white" : "hover:bg-gray-200"}`}
                        onClick={() => {
                            setSelectedCategory(category)
                            setCurrentPage(1)
                        }}
                        >
                        {category}
                        </li>
                    ))}
                    </ul>
                </div>
    
            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:col-span-3 ">
                {displayedProducts.length > 0 ? (
                displayedProducts.map((product) => (
                   
                        <div key={product.id} className="bg-gray-100 shadow-lg rounded-lg overflow-hidden h-full md:h-80">
                           <Link to={`/product/${product.id}`} className="block">
                                <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
                                <div className="p-4 text-left">
                                <h5 className="text-lg font-bold text-gray-900">{product.name}</h5>
                                <p className="text-gray-700 mb-3">{product.price}</p>
                                </div>
                            </Link>
                            <div className="p-4">
                                <button className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition flex items-center text-sm">
                                Add to Cart
                                </button>
                            </div>
                        </div>
                    
                    
                ))
                ) : (
                <p className="col-span-4 text-center text-gray-500">No products found in this category.</p>
                )}
            </div>
            </section>
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
            <Footer/>
      </div>
    );
}

export default Product;
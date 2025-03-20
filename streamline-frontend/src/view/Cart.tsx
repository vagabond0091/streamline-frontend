import { useState } from "react";
import { Link } from "react-router-dom";
import { CreditCard, Trash2 } from "lucide-react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

function Cart() {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: "Product 1", price: 29.99, quantity: 1, image: "https://via.placeholder.com/100" },
        { id: 2, name: "Product 2", price: 19.99, quantity: 2, image: "https://via.placeholder.com/100" },
        { id: 3, name: "Product 3", price: 29.99, quantity: 1, image: "https://via.placeholder.com/100" },
        { id: 4, name: "Product 4", price: 19.99, quantity: 2, image: "https://via.placeholder.com/100" },
        { id: 5, name: "Product 5", price: 29.99, quantity: 1, image: "https://via.placeholder.com/100" },
        { id: 6, name: "Product 6", price: 19.99, quantity: 2, image: "https://via.placeholder.com/100" }
    ]);

    const updateQuantity = (id: number, quantity: number) => {
        setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity } : item));
    };

    const removeItem = (id: number) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

    return (
        <div  className="bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 min-h-screen font-sans">
            <Header/>
            <div className="min-h-screen  flex justify-center items-center p-8">
                <div className="bg-white p-8 shadow-xl rounded-lg w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Product Details */}
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Shopping Cart</h2>
                        {cartItems.length > 0 ? (
                            <div className="space-y-6">
                                {cartItems.map(item => (
                                    <div key={item.id} className="flex items-center border border-gray-300  pb-4 shadow-md p-4 rounded-lg">
                                        <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg mr-4" />
                                        <div className="flex-1">
                                            <h3 className="text-lg font-medium text-gray-700">{item.name}</h3>
                                            <p className="text-gray-500 text-sm">${item.price.toFixed(2)}</p>
                                        </div>
                                        <input 
                                            type="number" 
                                            min="1" 
                                            value={item.quantity} 
                                            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))} 
                                            className="w-14 p-2 border rounded-lg text-center text-sm bg-gray-100"
                                        />
                                        <button onClick={() => removeItem(item.id)} className="text-gray-400 hover:text-red-500 ml-4">
                                            <Trash2 size={20} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-center text-gray-500">Your cart is empty.</p>
                        )}
                        <Link to="/products" className="block text-center text-blue-600 hover:underline mt-6 font-medium">
                            Continue Shopping
                        </Link>
                    </div>

                    {/* Order Summary */}
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md h-fit">
                        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                        <div className="flex justify-between font-medium text-gray-800 mb-2">
                            <span>Subtotal:</span>
                            <span>${totalAmount}</span>
                        </div>
                        <div className="flex justify-between text-sm text-gray-600 mb-4">
                            <span>Shipping:</span>
                            <span>Free</span>
                        </div>
                        <div className="border-t pt-4 flex justify-between font-bold text-xl">
                            <span>Total:</span>
                            <span>${totalAmount}</span>
                        </div>
                        <button className="flex items-center justify-center gap-2 px-3 py-3 mt-5 w-full  bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium">
                            <CreditCard size={20} />Proceed to Checkout
                        </button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Cart;

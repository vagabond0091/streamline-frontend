import { useState } from "react";
import Dashboard from "./Dashboard";

function AddProductView(){
    const [products, setProducts] = useState([]);
    const addProduct = (newProduct: { name: FormDataEntryValue | null; description: FormDataEntryValue | null; price: FormDataEntryValue | null; quantity: FormDataEntryValue | null; image: string; }) => {
        // setProducts([...products, newProduct]);
    };

    return ( 
        <><h2 className="text-2xl font-semibold text-gray-800 mb-4  pb-2 ">
            Add Product
        </h2>
        <div className="p-6 bg-white rounded-lg shadow-md border border-gray-300">

            <form className="space-y-4" onSubmit={(e) => {
                e.preventDefault();
                // const formData = new FormData(e.target);
                // const newProduct = {
                //     name: formData.get("name"),
                //     description: formData.get("description"),
                //     price: formData.get("price"),
                //     quantity: formData.get("quantity"),
                //     image: URL.createObjectURL(formData.get("image")),
                // };
                // addProduct(newProduct);
            } }>
                <label className="block">Product Name</label>
                <input type="text" name="name" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" required />

                <label className="block">Description</label>
                <textarea name="description" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" required></textarea>

                <label className="block">Price</label>
                <input type="number" name="price" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" required />

                <label className="block">Quantity</label>
                <input type="number" name="quantity" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" required />

                <label className="block">Product Image</label>
                <input type="file" name="image" accept="image/*" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" required />

                <button type="submit" className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition">Add Product</button>
            </form>
        </div></>
    );
}

export default AddProductView;

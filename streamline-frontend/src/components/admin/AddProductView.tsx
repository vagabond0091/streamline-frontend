import { ChangeEvent, SetStateAction, useState } from "react";
import { UploadCloud, XCircle } from "lucide-react";
import { Editor } from "@tinymce/tinymce-react";

type ImagePositions = "front" | "back" | "left" | "right";

function AddProductView() {
    const [description, setDescription] = useState("");
    const [images, setImages] = useState<Record<ImagePositions, string | null>>({
        front: null,
        back: null,
        left: null,
        right: null
    });

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>, position: ImagePositions) => {
        const file = e.target.files?.[0];
        if (file) {
            setImages(prev => ({ ...prev, [position]: URL.createObjectURL(file) }));
        }
    };

    const removeImage = (position: ImagePositions) => {
        setImages(prev => ({ ...prev, [position]: null }));
    };

    return (
        <>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 pb-2">
                Add Product
            </h2>
            <div className="p-6 bg-white rounded-lg shadow-md border border-gray-300">
                <form className="space-y-4" onSubmit={(e) => {
                    e.preventDefault();
                    console.log("Product Description:", description);
                }}>
                    
                    {/* Product Name */}
                    <label className="block text-gray-700 font-medium">Product Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" 
                        required 
                    />

                    {/* Product Description - TinyMCE */}
                    <label className="block text-gray-700 font-medium">Description</label>
                    <div className="rounded-lg p-2">
                        <Editor
                            apiKey="ah1059p66t12xs6ooovolzj1klw1tlhz2eddco68hg89wysv"
                            init={{
                                height: 300,
                                menubar: false,
                                branding: false,
                                statusbar: false,
                                plugins: [
                                    "advlist autolink lists link image charmap print preview anchor",
                                    "searchreplace visualblocks code fullscreen",
                                    "insertdatetime media table paste code help wordcount"
                                ],
                                toolbar:
                                    "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
                                tinycomments_mode: "", 
                            }}
                            onEditorChange={(content: SetStateAction<string>) => setDescription(content)}
                        />
                    </div>

                    {/* Product Price */}
                    <label className="block text-gray-700 font-medium">Price</label>
                    <input 
                        type="number" 
                        name="price" 
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" 
                        required 
                    />

                    {/* Product Quantity */}
                    <label className="block text-gray-700 font-medium">Quantity</label>
                    <input 
                        type="number" 
                        name="quantity" 
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" 
                        required 
                    />

                    {/* Image Upload Grid */}
                    <label className="block text-gray-700 font-medium">Product Images</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {(["front", "back", "left", "right"] as const).map((position) => (
                            <div key={position} className="border border-gray-300 p-4 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100 transition relative w-full h-40">
                                {images[position] ? (
                                    <div className="relative w-full h-full">
                                        <img 
                                            src={images[position] || ""} 
                                            alt={`${position} view`} 
                                            className="w-full h-full object-cover rounded-lg border border-gray-300"
                                        />
                                        
                                        <XCircle 
                                            size={24} 
                                            className="absolute top-2 right-2 text-red-500 cursor-pointer" 
                                            onClick={() => removeImage(position)}
                                        />
                                    </div>
                                ) : (
                                    <>
                                        <UploadCloud size={30} className="text-gray-500 mb-2" />
                                        <p className="text-gray-600 text-sm capitalize">Upload {position} image</p>
                                        <input 
                                            type="file" 
                                            accept="image/*" 
                                            className="absolute inset-0 opacity-0 cursor-pointer"
                                            onChange={(e) => handleImageChange(e, position)} 
                                        />
                                    </>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Submit Button */}
                    <button 
                        type="submit" 
                        className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition"
                    >
                        Add Product
                    </button>
                </form>
            </div>
        </>
    );
}

export default AddProductView;

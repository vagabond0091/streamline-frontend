import { ProductData } from "../types/ProductTypes";
import { ProductValidator } from "../validator/ProductValidator";

const ProductController = {
    createProduct: (productData: ProductData): Record<string, string | Record<string, string>> | null => {
       
        const price = parseFloat(productData.price); // Convert to number
        const quantity = parseInt(productData.quantity, 10); 
        const rawErrors: Record<string, string | Record<string, string> | null> = {
            title: ProductValidator.validateName(productData.title || ""),
            description: ProductValidator.validateDescription(productData.description || ""),
            price: ProductValidator.validatePrice(price),
            quantity: ProductValidator.validateQuantity(quantity),
            images: ProductValidator.validateImages(productData.images),
        };
        
        // Remove null values (valid fields)
        const errors: Record<string, string | Record<string, string>> = Object.fromEntries(
            Object.entries(rawErrors).filter(([key, value]) => key === "images" || value !== null)
        ) as Record<string, string | Record<string, string>>;

       
        if (Object.keys(errors).length > 0 && errors.images != null) {
           
            return errors;
        }
        console.log("Product added asd:", productData); 
        return null;
    }
}

export default ProductController
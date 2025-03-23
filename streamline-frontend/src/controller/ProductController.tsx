
import ProductService from "../service/ProductService";
import { ProductData } from "../types/ProductTypes";
import { ProductValidator } from "../validator/ProductValidator";
const ProductController = {
    createProduct: async (productData: ProductData):Promise<Record<string, string> | null> => {

        try {
            const price = parseFloat(productData.price); 
            const quantity = parseInt(productData.quantity, 10); 
            const rawErrors: Record<string, string | Record<string, string> | null> = {
                title: ProductValidator.validateName(productData.title || ""),
                description: ProductValidator.validateDescription(productData.description || ""),
                price: ProductValidator.validatePrice(price),
                quantity: ProductValidator.validateQuantity(quantity),
                images: ProductValidator.validateImages(productData.images),
            };
            const errors = ProductController.flattenErrors(rawErrors)

            if (Object.keys(errors).length > 0) {
                return errors; 
                
            }

            const response = await ProductService.createProduct(productData);

            if (response.status === 200) {
                return null; 
            } else {
                return { internalServerERR: "Unexpected response from server." };
            }
        } catch (error) {
            return { internalServerERR: "Failed to create product. Please try again." };
        
        }
    },

    flattenErrors(errors: Record<string, any>): Record<string, string> {
        const flattenedErrors: Record<string, string> = {};

        Object.entries(errors).forEach(([key, value]) => {
            if (typeof value === "string") {
                flattenedErrors[key] = value;
            } else if (typeof value === "object" && value !== null) {
                Object.entries(value).forEach(([subKey, subValue]) => {
                    if (typeof subValue === "string") {
                        flattenedErrors[`${key}.${subKey}`] = subValue;
                    }
                });
            }
        });

        return flattenedErrors;
    }
}

export default ProductController

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
            const product = new FormData();
            product.append("title", productData.title);
            product.append("description", productData.description);
            product.append("price", productData.price);
            product.append("quantity", productData.quantity);
            const imageEntries = Object.entries(productData.images);
            if(imageEntries != null){
                for (const [key, file] of imageEntries) {
                    if (typeof file === "string" && file.startsWith("blob:")) {
                        try {
                            const response = await fetch(file);
                            const blob = await response.blob();
                            const fileName = `${key}.jpg`; 
                            const convertedFile = new File([blob], fileName, { type: blob.type });
                            product.append(key, convertedFile);
                        } catch (error) {
                            console.error(`Error converting blob URL (${key}):`, error);
                        }
                    } else if (file instanceof File) {
                        product.append(key, file);
                    } else {
                        console.warn(`Skipping: ${key} is neither a File nor a valid blob URL`, file);
                    }
                }
            }
            const response = await ProductService.createProduct(product);
            
            if (response.status === 200) {
                return null; 
            } else {
                return { internalServerERR: "Unexpected response from server." };
            }
        } catch (error) {
            return { internalServerERR: "Failed to create product. Please try again." };
        
        }
    },
    getAllProduct: async () => { 
        const response = ProductService.getAllProduct()
        .then((res)=>{
            

        }).catch((error)=>{

        });

    },

    /*
    *   Helper method to map the value to its key value pairs.
    */
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


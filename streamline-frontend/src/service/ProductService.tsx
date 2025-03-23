
import API from "./API";
const ProductService = {
    createProduct: async (product:any) => await API.post( "/create",product),
    

}
export default ProductService
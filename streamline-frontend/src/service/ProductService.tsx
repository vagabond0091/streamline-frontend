

import API from "./API";
import CookieService from "./CookieService";
const token = CookieService.getToken()?.trim();
const ProductService = {
  
    createProduct: async (product:any) => await API.post( "/create",product,{
        headers: { Authorization: `Bearer ${token}`,"Content-Type": "application/json" },}),
    

}
export default ProductService
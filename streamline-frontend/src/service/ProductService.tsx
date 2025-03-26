

import API from "./API";
import CookieService from "./CookieService";
const token = CookieService.getToken()?.trim();
const ProductService = {
    // createProduct: async (product: any) => {
    //     const token = localStorage.getItem("jwt_token"); // Ensure token is retrieved here
    //     if (!token) {
    //         console.error("No token found! User may not be authenticated.");
    //         return;
    //     }
    //     console.log(token);
    // }
    createProduct: async (product:any) => await API.post( "/create",product,{
        headers: { Authorization: `Bearer ${token}`,"Content-Type": "application/json" },}),
    

}
export default ProductService
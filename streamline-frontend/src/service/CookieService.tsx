import Cookies from "js-cookie";

const COOKIE_NAME = "token";

const CookieSerive = {
    // Store the token in cookies
    setToken : (token: string, expiresInDays: number = 1): void => {
        Cookies.set(COOKIE_NAME, token, {
            expires: expiresInDays, // Expiration in days
            secure: false, // Only send cookies over HTTPS
            sameSite: "strict", // Mitigate CSRF attacks
        });
    },
  
    // Retrieve the token from cookies
    getToken : (): string | undefined => {
        return Cookies.get(COOKIE_NAME);
    },
  
    // Remove the token from cookies
    removeToken : (): void => {
        Cookies.remove(COOKIE_NAME);
    },
}

export default CookieSerive;
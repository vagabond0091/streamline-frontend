export interface ProductData {
    title: string;
    description: string;
    price: string;
    quantity: string;
    images: Record<string, string | null>;
}
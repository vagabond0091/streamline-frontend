export interface ProductData {
    name: string;
    description: string;
    price: number;
    quantity: number;
    images: Record<string, string | null>;
}
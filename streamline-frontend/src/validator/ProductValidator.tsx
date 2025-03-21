export const ProductValidator = {
    validateName(name: string): string | null {
        if (!name.trim()) return "Product name is required.";
        if (name.length < 3) return "Product name must be at least 3 characters long.";
        return null;
    },

    validateDescription(description: string): string | null {
        if (!description.trim()) return "Description is required.";
        return null;
    },

    validatePrice(price: number): string | null {
        if (price <= 0) return "Price must be greater than 0.";
        return null;
    },

    validateQuantity(quantity: number): string | null {
        if (quantity < 1) return "Quantity must be at least 1.";
        return null;
    },
     validateImages(images: (string | null)[]): string | null {
        if (images.every(image => !image)) return "At least one product image is required.";
        return null;
    }
};



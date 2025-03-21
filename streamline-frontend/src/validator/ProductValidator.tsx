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
        if(isNaN(Number(price))) return "Valid price is required";
        if (price <= 0) return "Price must be greater than 0.";
        return null;
    },

    validateQuantity(quantity: number): string | null {
        if(isNaN(Number(quantity))) return "Valid quantity is required";
        if (quantity < 1) return "Quantity must be at least 1.";
        return null;
    },
    validateImages(images: Record<string, string | null>): Record<string, string> | null {
        const errors: Record<string, string> = {};

        if (Object.values(images).every(image => !image)) {
            return { general: "At least one product image is required." };
        }

        Object.entries(images).forEach(([key, value]) => {
            if (!value) {
                errors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} image is required`;
            }
        });

        return Object.keys(errors).length ? errors : null;
    }
};



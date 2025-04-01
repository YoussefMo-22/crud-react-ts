export const vaildateProduct = (product: {title: string, description: string, price: string, imageUrl: string}) => {
    const errors: {title: string, description: string, price: string, imageUrl: string} = {
        title: "",
        description: "",
        imageUrl: "",
        price: "",
    };

    if (!product.title) {
        errors.title = "Title is required";
    } else if (product.title.length < 5 || product.title.length > 80) {
        errors.title = "Title must be between 5 and 80 characters long";
    }

    if (!product.description) {
        errors.description = "Description is required";
    } else if (product.description.length < 10 || product.description.length > 300) {
        errors.description = "Description must be between 10 and 300 characters long";
    }

    if (!product.price) {
        errors.price = "Price is required";
    } else if (isNaN(Number(product.price))) {
        errors.price = "Price must be a number";
    }

    if (!product.imageUrl) {
        errors.imageUrl = "Image URL is required";
    } else if (!/^https?:\/\/.+\.(jpg|jpeg|png|gif)$/.test(product.imageUrl)) {
        errors.imageUrl = "Image URL must be a valid image URL";
    }

    return errors;
}
export interface IProduct {
    id?: string | undefined;
    title: string;
    description: string;
    price: string;
    imageUrl: string;
    colors: string[];
    category: {
        name: string;
        imageUrl: string;
    };
}

export interface IFormInput {
    id: string;
    name: "title" | "description" | "price" | "imageUrl";
    label: string;
    type: string;
    placeholder: string;
}
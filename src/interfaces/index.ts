export interface IProduct {
    id?: string | undefined;
    title: string;
    description: string;
    price: number;
    imageUrl: string;
    colors: string[];
    category: {
        name: string;
        imageUrl: string;
    };
}

export interface IFormInput {
    id: string;
    name: string;
    label: string;
    type: string;
    placeholder: string;
}
import { IProduct } from "../interfaces/IProduct"

export const productList: IProduct[] = [
    {
        "id": "1",
        "title": "Wireless Bluetooth Headphones",
        "description": "High-quality noise-canceling headphones with deep bass and long battery life.",
        "price": 99.99,
        "imageUrl": "https://images.unsplash.com/photo-1511512578047-dfb367046420",
        "colors": ["Black", "Blue", "White"],
        "category": {
            "name": "Electronics",
            "imageUrl": "https://images.unsplash.com/photo-1511512578047-dfb367046420"
        }
    },
    {
        "id": "2",
        "title": "Smartphone",
        "description": "Latest model smartphone with a powerful processor and high-resolution camera.",
        "price": 799.99,
        "imageUrl": "https://images.unsplash.com/photo-1511512578047-dfb367046420",
        "colors": ["Black", "Silver", "Gold"],
        "category": {
            "name": "Mobile Phones",
            "imageUrl": "https://images.unsplash.com/photo-1511512578047-dfb367046420"
        }
    },
    {
        "id": "3",
        "title": "Gaming Laptop",
        "description": "A high-performance laptop with an RTX 4070 GPU, 32GB RAM, and 1TB SSD.",
        "price": 1499.99,
        "imageUrl": "https://images.unsplash.com/photo-1511512578047-dfb367046420",
        "colors": ["Black", "Red"],
        "category": {
            "name": "Computers",
            "imageUrl": "https://images.unsplash.com/photo-1511512578047-dfb367046420"
        }
    },
    {
        "id": "4",
        "title": "Running Shoes",
        "description": "Lightweight and comfortable running shoes with breathable mesh and great cushioning.",
        "price": 69.99,
        "imageUrl": "https://images.unsplash.com/photo-1511512578047-dfb367046420",
        "colors": ["Black", "White", "Blue", "Red"],
        "category": {
            "name": "Footwear",
            "imageUrl": "https://images.unsplash.com/photo-1511512578047-dfb367046420"
        }
    },
    {
        "id": "5",
        "title": "Smartwatch",
        "description": "Feature-packed smartwatch with heart rate monitoring and fitness tracking.",
        "price": 199.99,
        "imageUrl": "https://images.unsplash.com/photo-1511512578047-dfb367046420",
        "colors": ["Black", "Pink", "Silver"],
        "category": {
            "name": "Wearables",
            "imageUrl": "https://images.unsplash.com/photo-1511512578047-dfb367046420"
        }
    }
]

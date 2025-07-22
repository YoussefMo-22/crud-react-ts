import { v4 as uuid } from "uuid";
import { ICategory, IFormInput, IProduct } from "../interfaces";
import product from "./product.jpg"
import category from "./category.jpg"

export const products: IProduct[] = [
    // Phones & Tablets (6)
    {
      id: "1",
      title: "Apple iPhone 14 Pro",
      description: "6.1‑inch Super Retina XDR, A16 Bionic, triple‑camera + Dynamic Island.",
      imageURL: product,
      price: 1099,
      colors: ["#1C1C1E", "#C0C0C0", "#D4AF37", "#4B0082"],
      category: { name: "Phones & Tablets", imageURL: category },
    },
    {
      id: "2",
      title: "Samsung Galaxy S23 Ultra",
      description: "6.8‑inch QHD+ AMOLED, Snapdragon 8 Gen 2, 200 MP camera.",
      imageURL: product,
      price: 1199,
      colors: ["#000000", "#F5F5DC", "#2E8B57", "#E6E6FA"],
      category: { name: "Phones & Tablets", imageURL: category },
    },
    {
      id: "3",
      title: "Google Pixel 7 Pro",
      description: "6.7‑inch OLED, Google Tensor G2, triple camera.",
      imageURL: product,
      price: 899,
      colors: ["#0B0B0B", "#FFFFFF", "#808000"],
      category: { name: "Phones & Tablets", imageURL: category },
    },
    {
      id: "4",
      title: "OnePlus 11 5G",
      description: "Snapdragon 8 Gen 2, 120 Hz AMOLED, Hasselblad tuning.",
      imageURL: product,
      price: 799,
      colors: ["#2F2F2F", "#006400"],
      category: { name: "Phones & Tablets", imageURL: category },
    },
    {
      id: "5",
      title: "Apple iPad Pro 12.9\" (2022)",
      description: "12.9‑inch Liquid Retina XDR, M2 chip.",
      imageURL: product,
      price: 1399,
      colors: ["#C0C0C0", "#2F2F2F"],
      category: { name: "Phones & Tablets", imageURL: category },
    },
    {
      id: "6",
      title: "Samsung Galaxy Tab S8 Ultra",
      description: "14.6‑inch AMOLED, Snapdragon 8 Gen 1, S Pen.",
      imageURL: product,
      price: 1099,
      colors: ["#1C1C1C"],
      category: { name: "Phones & Tablets", imageURL: category },
    },
  
    // Laptops & Computers (5)
    {
      id: "7",
      title: "Apple MacBook Pro 16\" (M2 Pro)",
      description: "16.2‑inch Liquid Retina XDR, M2 Pro, up to 22 hr battery.",
        imageURL: product,
      price: 2499,
      colors: ["#C0C0C0", "#2F2F2F"],
      category: { name: "Laptops & Computers", imageURL: category },
    },
    {
      id: "8",
      title: "Dell XPS 13 Plus",
      description: "13.4‑inch InfinityEdge, Core i7, sleek design.",
      imageURL: product,
      price: 1499,
      colors: ["#E5E4E2", "#383838"],
      category: { name: "Laptops & Computers", imageURL: category },
    },
    {
      id: "9",
      title: "HP Spectre x360 14",
      description: "2‑in‑1 OLED, Intel Evo platform.",
      imageURL: product,
      price: 1399,
      colors: ["#0C090A", "#00416A"],
      category: { name: "Laptops & Computers", imageURL: category },
    },
    {
      id: "10",
      title: "Lenovo ThinkPad X1 Carbon Gen 11",
      description: "14‑inch WUXGA, Core i7, ThinkPad keyboard.",
      imageURL: product,
      price: 1599,
      colors: ["#000000"],
      category: { name: "Laptops & Computers", imageURL: category },
    },
    {
      id: "11",
      title: "Asus ROG Zephyrus G14",
      description: "Ryzen 9, RTX 4070, 165 Hz QHD display.",
      imageURL: product,
      price: 1799,
      colors: ["#F8F8FF", "#4B4B4B"],
      category: { name: "Laptops & Computers", imageURL: category },
    },
  
    // Audio (4)
    {
      id: "12",
      title: "Sony WH-1000XM5 Headphones",
      description: "Industry‑leading noise cancellation, 30 hr battery.",
      imageURL: product,
      price: 399,
      colors: ["#000000", "#D3D3D3"],
      category: { name: "Audio", imageURL: category },
    },
    {
      id: "13",
      title: "Apple AirPods Pro (2nd Gen)",
      description: "ANC, spatial audio, MagSafe case.",
      imageURL: product,
      price: 249,
      colors: ["#FFFFFF"],
      category: { name: "Audio", imageURL: category },
    },
    {
      id: "14",
      title: "Bose QuietComfort Earbuds II",
      description: "Superior noise cancellation, all‑day comfort.",
      imageURL: product,
      price: 299,
      colors: ["#141414", "#F5F5F5"],
      category: { name: "Audio", imageURL: category },
    },
    {
      id: "15",
      title: "JBL Charge 5 Speaker",
      description: "Portable, waterproof, 20 hr playtime.",
      imageURL: product,
      price: 179,
      colors: ["#000000", "#0000FF", "#FF0000", "#008080"],
      category: { name: "Audio", imageURL: category },
    },
  
    // Wearables (3)
    {
      id: "16",
      title: "Apple Watch Series 8",
      description: "Health sensors, crash detection, always‑on display.",
      imageURL: product,
      price: 399,
      colors: ["#1E1E1E", "#F8F8FF", "#C0C0C0", "#FF0000"],
      category: { name: "Wearables", imageURL: category },
    },
    {
      id: "17",
      title: "Samsung Galaxy Watch 5 Pro",
      description: "Fitness tracking, sapphire glass, 80 hr battery.",
      imageURL: product,
      price: 449,
      colors: ["#2F4F4F", "#708090"],
      category: { name: "Wearables", imageURL: category },
    },
    {
      id: "18",
      title: "Fitbit Charge 5",
      description: "Health tracker, built‑in GPS, stress tools.",
      imageURL: product,
      price: 149,
      colors: ["#000000", "#FAFAD2", "#4682B4"],
      category: { name: "Wearables", imageURL: category },
    },
  
    // Cameras & Video (3)
    {
      id: "19",
      title: "Canon EOS R6 Mark II",
      description: "24.2 MP, 4K60p, Dual Pixel AF II mirrorless.",
      imageURL: product,
      price: 2499,
      colors: ["#000000"],
      category: { name: "Cameras & Video", imageURL: category },
    },
    {
      id: "20",
      title: "Sony Alpha a7 IV",
      description: "33 MP full‑frame, 4K60, real‑time eye AF.",
      imageURL: product,
      price: 2699,
      colors: ["#000000"],
      category: { name: "Cameras & Video", imageURL: category },
    },
    {
      id: "21",
      title: "GoPro HERO11 Black",
      description: "5.3K, waterproof, HyperSmooth 5.0 stabilisation.",
      imageURL: product,
      price: 499,
      colors: ["#000000"],
      category: { name: "Cameras & Video", imageURL: category },
    },
  
    // Monitors & Accessories (3)
    {
      id: "22",
      title: "LG UltraGear 27\" QHD Gaming Monitor",
      description: "165 Hz, 1 ms, G‑Sync compatible.",
      imageURL: product,
      price: 349,
      colors: ["#000000"],
      category: { name: "Monitors & Accessories", imageURL: category },
    },
    {
      id: "23",
      title: "Dell UltraSharp 32\" 4K Monitor",
      description: "Factory‑calibrated, USB‑C hub.",
      imageURL: product,
      price: 899,
      colors: ["#000000"],
      category: { name: "Monitors & Accessories", imageURL: category },
    },
    {
      id: "24",
      title: "Logitech MX Master 3S Mouse",
      description: "8K DPI, ergonomic, silent clicks.",
      imageURL: product,
      price: 99,
      colors: ["#383838", "#CCCCCC"],
      category: { name: "Monitors & Accessories", imageURL: category },
    },
    {
      id: "25",
      title: "Anker PowerCore 20000mAh",
      description: "High‑capacity charger, dual USB, fast‑charge.",
      imageURL: product,
      price: 59,
      colors: ["#000000", "#FFFFFF"],
      category: { name: "Monitors & Accessories", imageURL: category },
    },
  ];
  

export const formInputsList: IFormInput[] = [
    {
        id: "title",
        name: "title",
        label: "Product Title",
        type: "text",
    },
    {
        id: "description",
        name: "description",
        label: "Product Description",
        type: "text",
    },
    {
        id: "image",
        name: "imageURL",
        label: "Product Image URL",
        type: "text",
    },
    {
        id: "price",
        name: "price",
        label: "Product Price",
        type: "text",
    },
];

export const colors: string[] = [
    "#a855f7",
    "#2563eb",
    "#84D2C5",
    "#13005A",
    "#A31ACB",
    "#FF6E31",
    "#3C2A21",
    "#6C4AB6",
    "#CB1C8D",
    "#000000",
    "#645CBB",
];

export const categories: ICategory[] = [
    {
      id: uuid(),
      name: "Phones & Tablets",
      imageURL: "https://images.unsplash.com/photo-1603899124025-76e2708e84e8?auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: uuid(),
      name: "Laptops & Computers",
      imageURL: "https://images.unsplash.com/photo-1611171711919-40e9a799e3d7?auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: uuid(),
      name: "Audio",
      imageURL: "https://images.unsplash.com/photo-1590650046871-92c887180603?auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: uuid(),
      name: "Wearables",
      imageURL: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: uuid(),
      name: "Cameras & Video",
      imageURL: "https://images.unsplash.com/photo-1612817159974-2162fdd3574a?auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: uuid(),
      name: "Monitors & Accessories",
      imageURL: "https://images.unsplash.com/photo-1587202372775-e4d84b93d58f?auto=format&fit=crop&w=1170&q=80",
    },
  ];
  

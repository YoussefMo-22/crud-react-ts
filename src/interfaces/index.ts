import { ProductNameTypes } from "../types";

export interface IProduct {
  id: string;
  title: string;
  description: string;
  imageURL: string;
  price: number;
  colors: string[];
  category: {
    name: string;
    imageURL: string;
  };
}

export interface IFormInput {
  id: string;
  name: ProductNameTypes;
  label: string;
  type: string;
}

export interface ICategory {
  id: string;
  name: string;
  imageURL: string;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  address?: string;
  isAdmin?: boolean;
}

export interface ICartItem {
  product: IProduct;
  quantity: number;
  selectedColor?: string;
}

export interface IOrderItem {
  product: IProduct;
  quantity: number;
  selectedColor?: string;
}

export interface IOrder {
  id: string;
  userId: string;
  items: IOrderItem[];
  total: number;
  createdAt: string;
  shippingAddress: string;
  status: "pending" | "paid" | "shipped" | "delivered";
}

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { ICartItem, IProduct } from "../interfaces";

interface CartContextType {
  cart: ICartItem[];
  addToCart: (product: IProduct, quantity?: number, selectedColor?: string) => void;
  removeFromCart: (productId: string, selectedColor?: string) => void;
  clearCart: () => void;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<ICartItem[]>(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: IProduct, quantity: number = 1, selectedColor?: string) => {
    setCart(prev => {
      const existing = prev.find(
        item => item.product.id === product.id && item.selectedColor === selectedColor
      );
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id && item.selectedColor === selectedColor
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity, selectedColor }];
    });
  };

  const removeFromCart = (productId: string, selectedColor?: string) => {
    setCart(prev => prev.filter(item => !(item.product.id === productId && item.selectedColor === selectedColor)));
  };

  const clearCart = () => setCart([]);

  const total = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, total }}>
      {children}
    </CartContext.Provider>
  );
}; 
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { IUser, IOrder } from "../interfaces";

interface UserContextType {
  user: IUser | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  register: (user: Omit<IUser, "id">) => boolean;
  placeOrder: (order: Omit<IOrder, "id" | "userId" | "createdAt" | "status">) => void;
  getOrders: () => IOrder[];
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within a UserProvider");
  return context;
};

const USERS_KEY = "users";
const USER_KEY = "user";
const ORDERS_KEY = "orders";

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(() => {
    const stored = localStorage.getItem(USER_KEY);
    return stored ? JSON.parse(stored) : null;
  });

  useEffect(() => {
    if (user) localStorage.setItem(USER_KEY, JSON.stringify(user));
    else localStorage.removeItem(USER_KEY);
  }, [user]);

  const login = (email: string, password: string) => {
    const users: IUser[] = JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
    const found = users.find(u => u.email === email && u.password === password);
    if (found) {
      setUser(found);
      return true;
    }
    return false;
  };

  const logout = () => setUser(null);

  const register = (newUser: Omit<IUser, "id">) => {
    const users: IUser[] = JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
    if (users.some(u => u.email === newUser.email)) return false;
    const userWithId = { ...newUser, id: Date.now().toString() };
    users.push(userWithId);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    setUser(userWithId);
    return true;
  };

  const placeOrder = (order: Omit<IOrder, "id" | "userId" | "createdAt" | "status">) => {
    if (!user) return;
    const orders: IOrder[] = JSON.parse(localStorage.getItem(ORDERS_KEY) || "[]");
    const newOrder: IOrder = {
      ...order,
      id: Date.now().toString(),
      userId: user.id,
      createdAt: new Date().toISOString(),
      status: "pending",
    };
    orders.push(newOrder);
    localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
  };

  const getOrders = () => {
    if (!user) return [];
    const orders: IOrder[] = JSON.parse(localStorage.getItem(ORDERS_KEY) || "[]");
    return orders.filter(o => o.userId === user.id);
  };

  return (
    <UserContext.Provider value={{ user, login, logout, register, placeOrder, getOrders }}>
      {children}
    </UserContext.Provider>
  );
}; 
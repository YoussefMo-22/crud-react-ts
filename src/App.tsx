import { BrowserRouter as Router, Routes, Route, Navigate, Link, useNavigate } from "react-router-dom";
import { type ReactNode } from "react";
import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import { useUser } from "./contexts/UserContext";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { user } = useUser();
  if (!user) return <Navigate to="/login" replace />;
  return <>{children}</>;
};

const Header = () => {
  const { user, logout } = useUser();
  const navigate = useNavigate();
  return (
    <header className="bg-white shadow mb-6 sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between py-4 px-2">
        <div className="flex items-center space-x-4">
          <Link to="/" className="font-bold text-xl text-indigo-700">ElectroShop</Link>
          <Link to="/shop" className="hover:underline">Shop</Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="hover:underline">Cart</Link>
          {user ? (
            <>
              <Link to="/profile" className="hover:underline">Profile</Link>
              <button onClick={() => { logout(); navigate("/login"); }} className="hover:underline">Logout</button>
            </>
          ) : (
            <Link to="/login" className="hover:underline">Login</Link>
          )}
        </div>
      </nav>
    </header>
  );
};

const Footer = () => (
  <footer className="bg-gray-900 text-gray-200 mt-10">
    <div className="container mx-auto py-8 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h2 className="text-xl font-bold mb-2 text-indigo-400">ElectroShop</h2>
        <p className="text-sm">Your one-stop shop for the latest electronics, gadgets, and accessories. Quality products, fast shipping, and great support.</p>
      </div>
      <div>
        <h3 className="font-semibold mb-2 text-indigo-300">Quick Links</h3>
        <ul className="space-y-1">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/shop" className="hover:underline">Shop</Link></li>
          <li><Link to="/cart" className="hover:underline">Cart</Link></li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-2 text-indigo-300">Contact</h3>
        <ul className="text-sm space-y-1">
          <li>Email: support@electroshop.com</li>
          <li>Phone: +1 800 123 4567</li>
          <li>123 Tech Avenue, Silicon Valley, CA</li>
        </ul>
      </div>
    </div>
    <div className="text-center text-xs text-gray-500 py-4 border-t border-gray-800">&copy; {new Date().getFullYear()} ElectroShop. All rights reserved.</div>
  </footer>
);

const App = () => {
  return (
    <Router>
      <Header />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<CatalogPage />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<ProtectedRoute><CartPage /></ProtectedRoute>} />
          <Route path="/checkout" element={<ProtectedRoute><CheckoutPage /></ProtectedRoute>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;

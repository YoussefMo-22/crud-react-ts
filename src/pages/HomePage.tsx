import { Link } from "react-router-dom";
import { categories } from "../data";

const HomePage = () => {
  return (
    <div className="container mx-auto px-2 py-8">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between bg-indigo-700 text-white rounded-lg p-8 mb-12 gap-8">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to ElectroShop</h1>
          <p className="text-lg mb-6">Your one-stop shop for the latest electronics, gadgets, and accessories. Shop the best brands at unbeatable prices!</p>
          <Link to="/shop" className="inline-block bg-white text-indigo-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-indigo-50 transition">Shop Now</Link>
        </div>
        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80" alt="Electronics" className="w-64 h-48 object-cover rounded-lg shadow-lg" />
      </section>

      {/* Featured Categories */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Featured Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
          {categories.slice(0, 6).map(cat => (
            <Link to="/shop" key={cat.id} className="flex flex-col items-center bg-indigo-50 rounded-lg shadow p-4 hover:shadow-lg transition">
              {/* <img src={cat.imageURL} alt={cat.name} className="w-16 h-16 object-cover rounded-full mb-2" /> */}
              <span className="font-semibold text-indigo-700">{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-indigo-50 rounded-lg p-8 text-center">
        <h3 className="text-xl font-bold mb-2">Ready to upgrade your tech?</h3>
        <p className="mb-4">Browse our full collection of electronics and find your next favorite gadget.</p>
        <Link to="/shop" className="inline-block bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-indigo-800 transition">Start Shopping</Link>
      </section>
    </div>
  );
};

export default HomePage; 
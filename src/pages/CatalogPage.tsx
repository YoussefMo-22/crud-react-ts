import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { products, categories } from "../data";


const CatalogPage = () => {
  const [category, setCategory] = useState<string>("All");
  const [sort, setSort] = useState<string>("default");
  const navigate = useNavigate();

  const filtered = category === "All"
    ? products
    : products.filter(p => p.category.name === category);

  const sorted = [...filtered].sort((a, b) => {
    if (sort === "price-asc") return a.price - b.price;
    if (sort === "price-desc") return b.price - a.price;
    return 0;
  });

  const handleProductClick = (id: string) => {
    navigate(`/product/${id}`);
  };

  return (
    <main className="container mx-auto px-2">
      {/* Featured Banner */}
      <div className="bg-indigo-700 text-white rounded-lg p-6 mb-8 flex flex-col md:flex-row items-center justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Welcome to ElectroShop!</h2>
          <p className="text-lg">Discover the latest electronics, gadgets, and accessories at unbeatable prices.</p>
        </div>
        <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80" alt="Featured" className="w-40 h-32 object-cover rounded-lg mt-4 md:mt-0 md:ml-8" />
      </div>

      {/* Filters & Sorting */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <div className="flex items-center gap-2">
          <label className="font-semibold">Category:</label>
          <select value={category} onChange={e => setCategory(e.target.value)} className="border rounded px-2 py-1">
            <option value="All">All</option>
            {categories.map(cat => (
              <option key={cat.name} value={cat.name}>{cat.name}</option>
            ))}
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label className="font-semibold">Sort by:</label>
          <select value={sort} onChange={e => setSort(e.target.value)} className="border rounded px-2 py-1">
            <option value="default">Default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sorted.map((product) => (
          <div key={product.id} onClick={() => handleProductClick(product.id)} style={{ cursor: 'pointer' }}>
            <ProductCard
              product={product}
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default CatalogPage; 
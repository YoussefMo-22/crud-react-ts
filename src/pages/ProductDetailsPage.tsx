import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data";
import { IProduct } from "../interfaces";
import Button from "../components/ui/Button";
import { useCart } from "../contexts/CartContext";
import { useState } from "react";
import { txtSlicer } from "../utils/functions";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product: IProduct | undefined = products.find(p => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState<string | undefined>(product?.colors[0]);
  const [mainImage, setMainImage] = useState(product?.imageURL);

  if (!product) {
    return <div>Product not found.</div>;
  }

  // Simulate a gallery with the main image and 2-3 more (for demo, repeat the main image)
  const galleryImages = [product.imageURL, product.imageURL, product.imageURL];

  // Simulate specs/features for electronics
  const specs = [
    { label: "Brand", value: product.category.name },
    { label: "Price", value: `$${product.price.toLocaleString()}` },
    { label: "Available Colors", value: product.colors.length },
    { label: "Warranty", value: "1 Year" },
  ];

  // Related products: same category, different id
  const related = products.filter(p => p.category.name === product.category.name && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor);
    navigate("/cart");
  };

  return (
    <div className="container max-w-4xl mx-auto p-4">
      <Button className="mb-4" onClick={() => navigate(-1)}>
        Back
      </Button>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Gallery */}
        <div className="flex flex-col items-center md:w-1/2">
          <img src={mainImage} alt={product.title} className="w-full h-80 object-cover rounded mb-4 border" />
          <div className="flex gap-2">
            {galleryImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={product.title + " gallery"}
                className={`w-16 h-16 object-cover rounded border cursor-pointer ${mainImage === img ? 'ring-2 ring-indigo-500' : ''}`}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>
        {/* Details */}
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <div className="mb-2 text-lg text-indigo-700 font-semibold">${product.price.toLocaleString()}</div>
          <p className="mb-4 text-gray-700">{product.description}</p>
          <div className="mb-4">
            <h3 className="font-semibold mb-1">Specs & Features</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              {specs.map((spec, idx) => (
                <li key={idx}><span className="font-medium text-gray-800">{spec.label}:</span> {spec.value}</li>
              ))}
            </ul>
          </div>
          <div className="flex items-center mb-4">
            <span className="mr-2 font-semibold">Color:</span>
            {product.colors.length ? product.colors.map(color => (
              <span
                key={color}
                className={`inline-block w-6 h-6 rounded-full mr-2 border-2 ${selectedColor === color ? 'border-indigo-700' : 'border-gray-300'}`}
                style={{ backgroundColor: color, cursor: 'pointer' }}
                onClick={() => setSelectedColor(color)}
              />
            )) : 'N/A'}
          </div>
          <div className="mb-4 flex items-center">
            <span className="mr-2 font-semibold">Quantity:</span>
            <input
              type="number"
              min={1}
              value={quantity}
              onChange={e => setQuantity(Number(e.target.value))}
              className="w-16 border rounded px-2 py-1"
            />
          </div>
          <Button className="bg-indigo-700 hover:bg-indigo-800 mt-2 w-full md:w-auto" onClick={handleAddToCart}>Add to Cart</Button>
        </div>
      </div>
      {/* Related Products */}
      {related.length > 0 && (
        <div className="mt-12">
          <h2 className="text-xl font-bold mb-4">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {related.map((rel) => (
              <div key={rel.id} onClick={() => navigate(`/product/${rel.id}`)} className="cursor-pointer">
                <div className="border rounded-lg p-2 hover:shadow-lg transition">
                  <img src={rel.imageURL} alt={rel.title} className="w-full h-32 object-cover rounded mb-2" />
                  <div className="font-semibold text-sm mb-1">{txtSlicer(rel.title, 20)}</div>
                  <div className="text-indigo-700 font-bold">${rel.price.toLocaleString()}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailsPage; 
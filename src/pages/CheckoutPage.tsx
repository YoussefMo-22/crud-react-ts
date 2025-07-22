import { useCart } from "../contexts/CartContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import { useUser } from "../contexts/UserContext";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const CheckoutPage = () => {
  const { cart, total, clearCart } = useCart();
  const [shipping, setShipping] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const navigate = useNavigate();
  const { placeOrder } = useUser();

  const handlePlaceOrder = () => {
    placeOrder({
      items: cart.map(item => ({
        product: item.product,
        quantity: item.quantity,
        selectedColor: item.selectedColor,
      })),
      total,
      shippingAddress: shipping,
    });
    clearCart();
    setOrderPlaced(true);
    setTimeout(() => navigate("/profile"), 2000);
  };

  if (orderPlaced) {
    return <div className="container max-w-2xl mx-auto p-4 text-green-700 font-bold">Order placed! Redirecting...</div>;
  }

  return (
    <div className="container max-w-2xl mx-auto p-4">
      <div className="flex items-center gap-2 mb-6">
        <ShoppingCartIcon className="w-7 h-7 text-indigo-700" />
        <h1 className="text-2xl font-bold">Checkout</h1>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Order Summary */}
        <div className="md:w-1/2 bg-gray-50 rounded-lg p-4 shadow mb-6 md:mb-0">
          <h2 className="font-semibold mb-2">Order Summary</h2>
          <ul className="mb-2 divide-y divide-gray-200">
            {cart.map((item, idx) => (
              <li key={item.product.id + (item.selectedColor || "") + idx} className="py-2 flex items-center gap-3">
                <img src={item.product.imageURL} alt={item.product.title} className="w-12 h-12 object-cover rounded border" />
                <div>
                  <div className="font-medium">{item.product.title}</div>
                  <div className="text-xs text-gray-500">{item.quantity} x ${item.product.price.toLocaleString()}</div>
                  {item.selectedColor && (
                    <div className="flex items-center text-xs">Color: <span className="inline-block w-4 h-4 rounded-full ml-1" style={{ backgroundColor: item.selectedColor }} /></div>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <div className="font-bold text-lg mt-2">Total: ${total.toLocaleString()}</div>
        </div>
        {/* Shipping & Place Order */}
        <div className="md:w-1/2 flex flex-col justify-between">
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Shipping Address</label>
            <input
              type="text"
              value={shipping}
              onChange={e => setShipping(e.target.value)}
              className="w-full border rounded px-2 py-2"
              placeholder="Enter your shipping address"
            />
          </div>
          <Button className="bg-indigo-700 hover:bg-indigo-800 w-full py-3 text-lg" onClick={handlePlaceOrder} disabled={!shipping || cart.length === 0}>
            Place Order
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage; 
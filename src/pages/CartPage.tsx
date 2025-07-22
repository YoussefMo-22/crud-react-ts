import { useCart } from "../contexts/CartContext";
import Button from "../components/ui/Button";
import { useNavigate } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const CartPage = () => {
  const { cart, removeFromCart, total, clearCart } = useCart();
  const navigate = useNavigate();

  return (
    <div className="container max-w-2xl mx-auto p-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <ShoppingCartIcon className="w-7 h-7 text-indigo-700" />
          Shopping Cart
        </h1>
        <span className="bg-indigo-700 text-white rounded-full px-3 py-1 text-sm font-semibold">{cart.length} items</span>
      </div>
      {cart.length === 0 ? (
        <div className="text-center text-gray-500 py-12">Your cart is empty.</div>
      ) : (
        <>
          <ul className="mb-4 divide-y divide-gray-200">
            {cart.map((item, idx) => (
              <li key={item.product.id + (item.selectedColor || "") + idx} className="flex flex-col sm:flex-row items-center justify-between py-4 gap-4">
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <img src={item.product.imageURL} alt={item.product.title} className="w-20 h-20 object-cover rounded border" />
                  <div>
                    <div className="font-semibold text-lg">{item.product.title}</div>
                    <div className="text-sm text-gray-500">${item.product.price.toLocaleString()} x {item.quantity}</div>
                    {item.selectedColor && (
                      <div className="flex items-center text-sm">Color: <span className="inline-block w-4 h-4 rounded-full ml-1" style={{ backgroundColor: item.selectedColor }} /></div>
                    )}
                  </div>
                </div>
                <Button className="bg-[#c2344d] hover:bg-red-800 text-xs px-2 py-1 w-full sm:w-auto mt-2 sm:mt-0" onClick={() => removeFromCart(item.product.id, item.selectedColor)}>
                  Remove
                </Button>
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row items-center justify-between mb-4 gap-4">
            <div className="font-bold text-xl">Total: ${total.toLocaleString()}</div>
            <div className="flex gap-2 w-full sm:w-2/3">
              <Button className="bg-indigo-700 hover:bg-indigo-800 flex-1" onClick={() => navigate("/checkout")}>Proceed to Checkout</Button>
              <Button className="bg-gray-300 text-black hover:bg-gray-400 flex-1" onClick={clearCart}>Clear Cart</Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage; 
import { useUser } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";

const ProfilePage = () => {
  const { user, logout, getOrders } = useUser();
  const navigate = useNavigate();

  if (!user) {
    navigate("/login");
    return null;
  }

  const orders = getOrders();

  return (
    <div className="container max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <div className="mb-2">Name: <span className="font-semibold">{user.name}</span></div>
      <div className="mb-2">Email: <span className="font-semibold">{user.email}</span></div>
      {user.address && <div className="mb-2">Address: <span className="font-semibold">{user.address}</span></div>}
      <Button className="bg-[#c2344d] hover:bg-red-800 mt-4" onClick={() => { logout(); navigate("/login"); }}>Logout</Button>
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-2">Order History</h2>
        {orders.length === 0 ? (
          <div>No orders yet.</div>
        ) : (
          <ul className="space-y-4">
            {orders.map(order => (
              <li key={order.id} className="border rounded p-3">
                <div className="text-sm text-gray-500 mb-1">{new Date(order.createdAt).toLocaleString()}</div>
                <div className="font-semibold mb-1">Total: ${order.total.toLocaleString()}</div>
                <div className="mb-1">Shipping: {order.shippingAddress}</div>
                <div className="mb-1">Status: {order.status}</div>
                <ul className="ml-4 list-disc">
                  {order.items.map((item, idx) => (
                    <li key={item.product.id + (item.selectedColor || "") + idx}>
                      {item.product.title} x {item.quantity}
                      {item.selectedColor && (
                        <span className="inline-block w-4 h-4 rounded-full ml-2" style={{ backgroundColor: item.selectedColor }} />
                      )}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProfilePage; 
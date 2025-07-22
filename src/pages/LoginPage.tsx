import { useState } from "react";
import { useUser } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";

const LoginPage = () => {
  const { login, register } = useUser();
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (isRegister) {
      const success = register({ name, email, password });
      if (success) navigate("/");
      else setError("Email already registered");
    } else {
      const success = login(email, password);
      if (success) navigate("/");
      else setError("Invalid credentials");
    }
  };

  return (
    <div className="container max-w-sm mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{isRegister ? "Register" : "Login"}</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        {isRegister && (
          <div>
            <label className="block mb-1">Name</label>
            <input type="text" value={name} onChange={e => setName(e.target.value)} className="w-full border rounded px-2 py-1" required />
          </div>
        )}
        <div>
          <label className="block mb-1">Email</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full border rounded px-2 py-1" required />
        </div>
        <div>
          <label className="block mb-1">Password</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full border rounded px-2 py-1" required />
        </div>
        {error && <div className="text-red-600 text-sm">{error}</div>}
        <Button className="bg-indigo-700 hover:bg-indigo-800 w-full">{isRegister ? "Register" : "Login"}</Button>
      </form>
      <div className="mt-4 text-center">
        <button className="text-indigo-700 underline" onClick={() => setIsRegister(r => !r)}>
          {isRegister ? "Already have an account? Login" : "Don't have an account? Register"}
        </button>
      </div>
    </div>
  );
};

export default LoginPage; 
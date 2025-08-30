import { useEffect, useState } from "react";
import { Mail, Lock, Linkedin, Github } from "lucide-react";
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import { toast } from "react-toastify";
import { BASE_URL } from "../utils/url";


export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login Data:", form);

    try {
      const res = await axios.post(`${BASE_URL}api/user/login`, form);

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
      }

      toast.success(res.data.message || "✅ Logged in successfully!");
      navigate("/"); // redirect to home
      window.location.reload(); // 🔄 force refresh after redirect
    } catch (err) {
      console.error("Error:", err.response ? err.response.data : err.message);
      toast.error(err.response?.data?.message || "❌ Login failed. Try again.");
    }
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-gradient-hero px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
          Login to Your Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-blue-500" size={20} />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-3 text-blue-500" size={20} />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition"
          >
            Login
          </button>
        </form>

        {/* Social logins */}
        <div className="mt-6">
          <p className="text-center text-gray-500 mb-3">Or continue with</p>
          <div className="flex justify-center gap-4">
            <button className="p-2 border rounded-lg hover:bg-gray-100">
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                alt="Google"
                className="h-6 w-6"
              />
            </button>
            <button className="p-2 border rounded-lg hover:bg-gray-100">
              <Linkedin size={24} className="text-blue-600" />
            </button>
            <button className="p-2 border rounded-lg hover:bg-gray-100">
              <Github size={24} />
            </button>
          </div>
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?{" "}
          <Link
            to={"/RegisterPage"}
            className="text-blue-600 font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

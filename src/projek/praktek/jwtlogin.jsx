import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const LoginMas = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://api.escuelajs.co/api/v1/auth/login", {
        email,
        password,
      })
      .then((response) => {
        // Simpan token ke localStorage jika login berhasil
        localStorage.setItem("authToken", response.data.access_token);

        // Redirect ke halaman produk
        navigate("/product");
      })
      .catch((error) => {
        setError("Login gagal! Silakan periksa username dan password Anda.");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-lg">
        <h1 className="text-3xl font-extrabold text-center mb-8 text-yellow-500">
          Welcome Back!
        </h1>
        <p className="text-center text-white mb-6">
          Silakan login untuk mengakses akun Anda
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              className="block text-sm font-semibold text-yellow-500 mb-2"
              htmlFor="email"
            >
              email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 border rounded-full text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-gray-800"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Masukkan Email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-sm font-semibold text-yellow-500 mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-3 border rounded-full text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-gray-800"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukkan password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 py-3 px-6 rounded-full shadow-lg hover:bg-yellow-600 transition duration-300"
          >
            Login
          </button>
          <div className="text-center mt-6">
            <p className="text-sm text-yellow-500 ">
              Belum memiliki akun?{" "}
              <Link to="/help">
                <a className="text-yellow-500 hover:underline">
                  Daftar Sekarang
                </a>
              </Link>
            </p>
          </div>
        </form>

        {error && (
          <div className="mt-4 text-center text-red-600">
            <p>{error}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginMas;


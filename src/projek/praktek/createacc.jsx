import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Create() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer",
    avatar: "https://i.imgur.com/LDOO4Qs.jpg",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreateUser = (e) => {
    e.preventDefault();

    const newUser = {
      ...formData,
      creationAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    axios
      .post("https://api.escuelajs.co/api/v1/users", newUser)
      .then((response) => setMessage(`User created: ${response.data.name}`))
      .catch((error) => setMessage(`Error: ${error.message}`));

    setFormData({
      name: "",
      email: "",
      password: "",
      role: "customer",
      avatar: "https://i.imgur.com/LDOO4Qs.jpg",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <Link
          to="/help"
          className="inline-block mb-4 text-yellow-500 hover:text-yellow-700"
        >
          &larr; Back
        </Link>
        <h2 className="text-2xl font-bold text-yellow-500 text-center mb-4">
          Create User
        </h2>

        <form onSubmit={handleCreateUser} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
            className="w-full p-3 border border-black rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full p-3 border border-black rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
            className="w-full p-3 border border-black rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />

          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded"
          >
            Create User
          </button>
        </form>

        {message && (
          <p className="text-center mt-4 text-sm font-semibold text-yellow-500">{message}</p>
        )}
      </div>
    </div>
  );
}


import React from "react";
import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

axios.defaults.withCredentials = true;
const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  async function onLogin(event) {
    event.preventDefault();

    try {
      // Request CSRF Token
      await axios.get("http://localhost:8000/sanctum/csrf-cookie");
      // Make Login Request
      const response = await axios.post("http://localhost:8000/login", {
        email: form.email,
        password: form.password,
      });
      const userData = await axios.get("http://localhost:8000/api/user");

      let user_id = userData.data.id;
      let user_name = userData.data.name;
      window.localStorage.setItem("user_id", user_id);
      window.localStorage.setItem("user_name", user_name);
      navigate("/user");
    } catch (error) {
      console.error("Login failed:", error);
    }
  }

  return (
    <>
      <div className="flex items-center justify-center ">
        <div className="bg-white p-8 rounded-lg shadow-xl w-96">
          <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>

          <form onSubmit={onLogin} className=" ">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-600 text-sm font-medium mb-2"
              >
                Email
              </label>
              <input
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                value={form.email}
                type="email"
                id="email"
                name="email"
                className="text-md w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div className="mb-4">
            <div class="flex items-center justify-between">
          <label for="password" class="block text-sm font-medium leading-6 text-gray-600">Password</label>
          <div class="text-sm">
            <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
          </div>
          </div>
              <input
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                value={form.password}
                type="password"
                id="password"
                name="password"
                className="text-md w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-indigo-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-500 text-white p-2 rounded hover:bg-indigo-600 focus:outline-none focus:ring focus:border-indigo-300"
            >
              Login
            </button>
          </form>
          <p class="mt-10 text-center text-sm text-gray-500">
      Not a member?
      <a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
    </p>
        </div>
      </div>
    </>
  );
};

export default Login;

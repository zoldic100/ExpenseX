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

      navigate("/user");
    } catch (error) {
      console.error("Login failed:", error);
    }
  }

  return (
    <>
      <form onSubmit={onLogin} className="flex justify-center  align-middle ">
        <div>
          {" "}
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </div>
        <div>
         
          <button>login</button>
        </div>
      </form>
    </>
  );
};

export default Login;

import { useState } from 'react'
import './App.css'
import axios from 'axios'
import MyRouter from './Router/MyRouter';

axios.defaults.withCredentials = true;

function App() {
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  async function onLogin(event) {
    event.preventDefault();
          


    try {
      // Request CSRF Token
      await axios.get('http://localhost:8000/sanctum/csrf-cookie');
      // Make Login Request
      const response = await axios.post('http://localhost:8000/login', {
        email: form.email,
        password: form.password,
      });
      
      // Fetch User Data
      const { data } = await axios.get('http://localhost:8000/api/user');
      
      // Update User State
      setUser(data);

      console.log(data);
    } catch (error) {
      console.error("Login failed:", error);
    }
  }

  return (
    <>
      {user && (
        <div>
          <p>Welcome, {user.name}!</p>
        </div>
      )}
      <form onSubmit={onLogin}>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <input type="submit" value="Login" />
      </form>
      <MyRouter/>
    </>
  )
}

export default App

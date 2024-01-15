import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function LogoutButton() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Clear any local storage data
      window.localStorage.removeItem("ACCESS_TOKEN");
      window.localStorage.removeItem("csrf");

      // Make a request to your server to perform the logout operation
      await axios.post("http://localhost:8000/logout");

      // Update any state or display a success message
      setMessage("Successfully logged out");
      localStorage.clear();
      navigate("/login");
    } catch (error) {
      // Handle errors, display error message, etc.
      setMessage(error+" => Logout failed. Please try again.");
    }
    console.log(message);
  };

  return (
    <div>
      <motion.button
        initial={{scale: 1  }}
        whileHover={{ scale: 1.05 }}
        className="nav-btn w-full"
        onClick={handleLogout}
      >
        Logout
      </motion.button>
    </div>
  );
}

export default LogoutButton;

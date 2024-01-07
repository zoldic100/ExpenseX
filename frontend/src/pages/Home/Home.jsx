import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import LogoutButton from "../../Logout";
import UserList from "../UserList/UserList";
const Home = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Fetch User Data
        const { data } = await axios.get("http://localhost:8000/api/user");

        // Update User State
        setUser(data);

        console.log(data);
      } catch (error) {
        // Handle errors more effectively
        if (axios.isCancel(error)) {
          // Request was canceled (if you use CancelToken)
          console.log("Request canceled", error.message);
        } else if (error.response) {
          // The request was made and the server responded with a status code
          console.log("Response error:", error.response.data);
          console.log("Status code:", error.response.status);
          console.log("Headers:", error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.log("No response received:", error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error:", error.message);
        }
      }
    };

    // Call the function to fetch user data
    fetchUserData();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <>

        <h3>{user && `welcome  ${user.name}`}</h3>


      <h2>All users</h2>
      <UserList />
    </>
  );
};

export default Home;

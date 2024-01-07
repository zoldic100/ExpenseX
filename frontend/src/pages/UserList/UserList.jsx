import React, { useState, useEffect } from "react";
import axios from "axios";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState("http://localhost:8000/get-all-users");
  const [links, setLinks] = useState("");
  const [pageLink, setPageLink] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(url);
      setUsers(response.data.data.data);
      setLinks(response.data.data.links);
    } catch (error) {
      setError("Error fetching users. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [url]);
  // Call the function to fetch users

  useEffect(() => {
    // Use a for loop to iterate over the array and add url values to pageLink
    const newPageLinks = [];
    for (let i = 1; i < links.length; i++) {
      //not add the last element
      if (!(i === links.length - 1)) {
        console.log(links.length - 1);
        newPageLinks.push(links[i].url);
      }
    }

    // Update the state with the new pageLink values
    setPageLink(newPageLinks);
  }, [links]); // Run the effect whenever links change
  
  function handleUrl(link) {
    setUrl(link);
  }
  return (
    <div className="text-center">
      <h2 className="text-4xl p-3 t"> User List</h2>
      {loading && <p>Loading...</p>}
      
     
      {error && <p className="text-red-500">{error}</p>}
     
      {users.length > 0 ? (
        <ul className="text-center font-light">
          {users.map((user) => (
            <li className="pb-4" key={user.id}>
              <strong>Name:</strong> {user.name}, <strong>Email:</strong>{" "}
              {user.email}
            </li>
          ))}
        </ul>
      ) : (
        <p>No users available.</p>
      )}
      <div className="text-center">
        <h3>Page Links:</h3>

        {pageLink.map((link, index) => (
          <button key={index} onClick={() => handleUrl(link)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default UserList;

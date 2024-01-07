import React, { useEffect, useState } from "react";
import axios from "axios";
 
const FetchExpenses = () => {
const [loading, setLoading] = useState(true);

  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const  {data}  = await axios.get('http://localhost:8000/expenses');
        console.log(data);

        setExpenses(data);

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
      } finally {
        setLoading(false);
      }
    };

    // Call the function to fetch user data
    fetchProductData();
  }, []); // Empty dependency array means this effect runs once on mount
    const xmen = ['ee']
    xmen.length
  return (
    <div>
        {loading && <p>Loading...</p>}
<div>

{expenses.length > 0 ? (
<ul>

  {expenses.map((expense) => (
    
    <li key={expense.id}>

      <strong>Name:</strong> {expense.name},
      <strong>Descreption:</strong>{" "}
      {expense.description}
      <strong>Price:</strong>{" "}
      {expense.price}
    </li>
    
  ))}
</ul>

) : (
<p>No expenses available.</p>
)}
</div>
    </div>
  )
}

export default FetchExpenses

 
 
 

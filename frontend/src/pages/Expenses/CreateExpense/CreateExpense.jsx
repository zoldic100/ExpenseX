import React, { useEffect, useState } from "react";
import axios from "axios";

import ExpenseForm from "./ExpenseForm/ExpenseForm";
const CreateExpense = () => {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/user");
        setUserId(response.data.id);
      } catch (error) {
        // Handle error, e.g., user not authenticated
        console.error("Error fetching user ID:", error);
      }
    };

    fetchUserId();
 
}, []);
  return (
    <div>
      <h1>Create Expense</h1>
      {userId !== null && <ExpenseForm userId={userId} />}
    </div>
  );
};

export default CreateExpense;

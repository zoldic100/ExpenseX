import React, { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineDelete } from "react-icons/ai";
import { LuClipboardEdit } from "react-icons/lu";
import { Link } from "react-router-dom";
const FetchExpenses = () => {
  const [loading, setLoading] = useState(true);

  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const { data } = await axios.get("http://localhost:8000/expenses");

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

  
    
      const hundleDelete = async (id) => {
        try {
          await axios.delete(`http://localhost:8000/expenses/${id}`);

          let li = document.getElementById(id)
          li.remove()

          let expenseList = document.getElementById('expense-list')

          if(expenseList.childNodes.length === 0){
            expenseList.innerHTML='<li class=" text-center pt-5 text-4xl font-bold">No expenses available.</li>'
          }

        } catch (error) {
          console.error('Error deleting expense:', error);
          // Handle the error as needed
        }
      };
  return (
    <div>
    {loading && <p className="text-4xl font-semibold">
      Loading...
      </p>
    }
    <div>
      {expenses.length > 0 ? (
        <ul id="expense-list">
          {expenses.map((expense) => (
            <li
              className="bg-white rounded-xl shadow-xl px-4 py-5 mb-4"
              key={expense.id}
              id={expense.id}
            >
              <ul className="flex justify-between items-center">
                <li className="li ">
                  <div className="font-bold text-lg">{expense.name}</div>
                  <div className=" max-w-64 text-gray-500 text-xs">
                    {expense.description.length > 60
                      ? expense.description.slice(0, 60) + "..."
                      : expense.description}
                  </div>
                </li>
                <li className="flex justify-between items-center ">
                  <span className="mr-5 font-semibold text-xl">{expense.price}</span>
                  <span className="mx-3">
                      <button  
                      onClick={()=>{hundleDelete(expense.id)}}
                      className=" bg-transparent hover:bg-transparent ">
                      <AiOutlineDelete 
                      className="text-xl font-md text-gray-500 hover:text-red-400" />
                      </button>
                  </span>
                  <span className="mr-5">
                    <Link to={`expense/${expense.id}/edit`}>
                      <LuClipboardEdit className="text-xl font-md text-gray-500 hover:text-indigo-400" />
                    </Link>
                  </span>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center pt-5 text-4xl font-bold">No expenses available.</p>
      )}
    </div>
  </div>
  )
}

export default FetchExpenses


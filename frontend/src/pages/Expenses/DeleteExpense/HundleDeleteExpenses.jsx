import axios from "axios";

export const hundleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/expenses/${id}`);

      let li = document.getElementById(id);
      li.remove();

      let expenseList = document.getElementById("expense-list");

      if (expenseList.childNodes.length === 0) {
        expenseList.innerHTML =
          '<li class=" text-center pt-5 text-4xl font-bold">No expenses available.</li>';
      }
    } catch (error) {
      console.error("Error deleting expense:", error);
      // Handle the error as needed
    }
  };
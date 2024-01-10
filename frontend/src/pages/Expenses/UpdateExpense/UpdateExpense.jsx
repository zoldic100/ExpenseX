import { useEffect, useState } from "react";
import axios from "axios";
axios.defaults.withCredentials = true;
import { useNavigate, useParams } from "react-router-dom";
const UpdateExpense = () => {

  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const navigate = useNavigate();

  
    let param = useParams()
   const expenseId = param.id;
   useEffect(()=>{
  const fetchExpenseById = async(id)=>{

    axios({
      method: "get",
      url: `http://localhost:8000/expenses/${id}/edit`,
    })
      .then(function (response) {
        setDescription(response.data.description)
        setName(response.data.name)
        setPrice(response.data.price)
      })
      .catch(function (error) {
        console.error("Error:", error);

        if (error.response) {
          const errfn = error.response.data.errors;

          console.log(errfn);
        } else if (error.request) {
          // The request was made but no response was received
          console.error(
            "No response received. Request details:",
            error.request
          );
        }
      });
  }
  fetchExpenseById(expenseId)
},[]) 


  const handleSubmit = async (e) => {
    e.preventDefault();

 
    axios({
      method: "put",
      url: `http://localhost:8000/expenses/${expenseId}`,
      data: {
        name:name,
        description: description,
        price: price,

      },
    })
      .then(function (response) {
        console.log('response :'+response);
        navigate("/user");
      })
      .catch(function (error) {
        console.error("Error:", error);

        if (error.response) {
          const errfn = error.response.data.errors;

          console.log(errfn);
        } else if (error.request) {
          // The request was made but no response was received
          console.error(
            "No response received. Request details:",
            error.request
          );
        }
      });
  };
  return (
    <>
     <div className="flex items-center justify-center mb-5">
      <div className="bg-white p-8 rounded-xl shadow-xl w-96">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Update Expense
        </h2>

        <form onSubmit={handleSubmit} >
        <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600 text-sm mb-2 ">
              Name:
            </label>
            <input
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="text-md w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-600 text-sm mb-2"
            >
              Description:
            </label>
            <textarea
            name="description"
              className="w-full text-gray-500 text-xs resize-none border border-gray-300 rounded p-2"
              value={
                description
              }
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block text-gray-600 text-sm mb-2">
              Price:
            </label>
            <input
              name="price"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="text-md w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white p-2 rounded hover:bg-indigo-600 focus:outline-none focus:ring focus:border-indigo-300"
          >
            Submit Expense
          </button>
        </form>
        </div>
        </div>
    </>
  )
}

export default UpdateExpense
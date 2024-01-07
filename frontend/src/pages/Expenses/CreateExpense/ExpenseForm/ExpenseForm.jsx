import  { useState } from "react";
import axios from "axios";
axios.defaults.withCredentials = true;
import { useNavigate } from "react-router-dom";

const ExpenseForm = ({ userId }) => {

  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log(descriptionValue);
    var bodyFormData = new FormData();
    bodyFormData.append("name", name);
    bodyFormData.append("user_id", userId);
    bodyFormData.append("description", description);
    bodyFormData.append("price", price);

    axios({
      method: "post",
      url: "http://localhost:8000/expenses",
      data: bodyFormData,
    })
      .then(function (response) {
        //handle success*
        console.log("Success (:):", response);
        console.log(name);
        console.log(userId);
        console.log(description);
        console.log(price);
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
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <button type="submit">Submit Expense</button>
    </form>
  );
};

export default ExpenseForm;

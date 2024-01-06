import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
  const [message, setMessage] = useState([]);
  const [classMessage, setClassMessage] = useState("");
  const navigate = useNavigate();
  async function onCreate(event) {
    event.preventDefault();

    const nameValue = event.target.elements.name.value;
    //console.log(nameValue);
    const imageValue = event.target.elements.image.files[0];
    //console.log(imageValue);
    const descriptionValue = event.target.elements.description.value;
    // console.log(descriptionValue);
    var bodyFormData = new FormData();
    bodyFormData.append("name", nameValue);
    bodyFormData.append("image", imageValue);
    bodyFormData.append("description", descriptionValue);
    axios({
      method: "post",
      url: "http://localhost:8000/products",
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //handle success*
        console.log("Success:", response.data.messsage);
        setMessage(response.data.messsage);
        setClassMessage("success");
        navigate("/products");
      })
      .catch(function (error) {
        console.error("Error:", error);

        if (error.response) {
          const errfn = error.response.data.errors;
          
          console.log(errfn);

          function hundelError(errors) {
            const errorMessage = []
            const vlaues = Object.values(errors);
            vlaues.map((vlaue) => {
             errorMessage.push(vlaue.join(",")) ;
             
            })
            return errorMessage; // Return the array of error messages

          }
            
          setMessage(hundelError(errfn));

          
          setClassMessage("error");
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error("Response data:", error.response.data.errors);
          console.error("Response status:", error.response.status);
          console.error("Response headers:", error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.error(
            "No response received. Request details:",
            error.request
          );
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error("Error setting up the request:", error.message);
        }
      });
  }
  return (
    <>
<p className={classMessage}>
  {message.map((msg, index) => (
    <span key={index}>{msg}<br /></span>
  ))}
</p>

      <form onSubmit={onCreate}>
        <div>
          <label htmlFor="name">Name : </label>
          <input type="text" name="name" />
        </div>
        <div>
          <label htmlFor="image"></label>
          <input type="file" name="image" />
        </div>
        <div>
          <label htmlFor="description"></label>
          <input type="text" name="description" />
        </div>
        <div>
          <button type="submit"> submit</button>
        </div>
      </form>
    </>
  );
};

export default CreateProduct;

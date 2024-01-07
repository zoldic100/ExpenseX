import React, { useEffect, useState } from "react";
import axios from "axios";
const Products = () => {
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState({});
  const [url, setUrl] = useState('http://localhost:8000/products');

  const [products, setProducts] = useState(null);
  const hundleNextPage = () =>{
        setUrl(info.next_page_url)
        window.scrollTo(0,0)
    }
    const hundlePreviousPage = () =>{
        setUrl(info.prev_page_url)
        window.scrollTo(0,0)
    }
  useEffect(() => {
    const fetchProductData = async (url) => {
      try {
        const { data } = await axios.get(url);
        console.log(data);
        setProducts(data.data);
        setInfo(data)
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
    fetchProductData(url);
  }, [url]); // Empty dependency array means this effect runs once on mount
    
  return (
    <div>
      {loading && <p>Loading...</p>}

      {products ? (
        <>
          <ul>
          {info.prev_page_url ? ( <li>
              <button onClick={hundlePreviousPage}>previous</button>
            </li>
            ) 
            : null
          }
           {info.next_page_url ? ( <li>
              <button onClick={hundleNextPage} >next</button>
            </li>) 
            : null
        }
          </ul>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <img
                  width={200}
                  src={`http://localhost:8000/storage/${product.image}`}
                  alt=""
                  
                />
                <strong>Name:</strong> {product.name},<strong>Email:</strong>{" "}
                {product.description}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
};

export default Products;

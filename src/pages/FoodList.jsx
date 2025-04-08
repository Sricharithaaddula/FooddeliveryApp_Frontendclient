import React, { useEffect, useState } from "react";
import axios from "axios";
import "./FoodList.css"; // Assuming your styles are defined here

const FoodList = ({ firmId }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/product/get-products/${firmId}`);
        setProducts(res.data.products); // Adjust depending on your API response structure
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [firmId]);

  if (loading) return <p>Loading food items...</p>;
  if (!products.length) return <p>No food items available for this firm.</p>;

  return (
    <div className="food-list">
      {products.map((item) => (
        <div className="food-card" key={item._id}>
          <img
            src={`http://localhost:8000/uploads/${item.image}`}
            alt={item.name}
            className="food-image"
          />
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>Price: ₹{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default FoodList;

import { useContext, useEffect, useState } from "react";
import "./Homepage.css";
import axios from "axios";
import { Cartcontext } from "../../context/CartContext";
import Navbar from "../../components/navbar/Navbar";

const Homepage = () => {
  const [data, setdata] = useState([]);
  const fetchData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setdata(response.data);
    console.log(response);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const { addItem } = useContext(Cartcontext);

  return (
    <div>
      <Navbar />

      <div className="home">
        {data.map((item, index) => {
          item.quantity = 1;
          return (
            <div className="card" key={index}>
              <div className="category">
                <div className="category-div">{item.category}</div>
              </div>
              <img src={item.image} alt="" />
              <p className="title">{item.title}</p>
              <h3>$. {item.price}</h3>
              <button className="add-to" onClick={() => addItem(item)}>
                add to cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Homepage;

/** @format */

import { useContext } from "react";
import { Cartcontext } from "../../context/CartContext";
import "./Cart.css";
import Navbar from "../../components/navbar/Navbar";

const Cart = () => {
  const {state,increaseItem,removeItem,decreaseItem} = useContext(Cartcontext);
 
console.log(state)
  const total = state.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

    return (
<div>
<Navbar/>
      { state.length<=0 ?
        (
          <div style={{height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <h1>
          Add items to Cart
        </h1>
      </div>
        ):
        (
      <div className="cart">
        {state.map((item, index) => {
          return (
            <div className="card" key={index}>
              
              <img src={item.image} alt="" />
              <p>{item.title}</p>
              <p>{item.quantity * item.price}</p>
              <div className="quantity">
                <button
                  onClick={() => increaseItem(item)}>
                  +
                </button>
                <p>{item.quantity}</p>
                <button
                  onClick={() => {
                    if (item.quantity > 1) {
                      decreaseItem(item)
                    } else {
                      removeItem(item)
                    }
                  }}>
                  -
                </button>
              </div>
              <h2 onClick={() =>removeItem(item)}>
                x
              </h2>
            </div>
          );
        })}
        {state.length > 0 && (
          <div className="total">
            <h2>{total}</h2>
          </div>
        )}
      </div>)}
      </div>
    );
  }
 
;

export default Cart;

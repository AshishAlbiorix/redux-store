import React,{useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/actions/productActions";
const Cart = () => {
  const cart = useSelector((state) => state.AddTOCart.cart);
  const dispatch = useDispatch();

  function getIndexData(data){
    var filtered = cart.filter(function(value, index, arr){
      return index != data;
    });
    dispatch(removeFromCart(filtered))
  }
  let unique = [...new Set(cart)];
  return (
    <div className="ui grid container right">
      <div className="ui relaxed divided list">
        {
        unique.map((item, index) => {
          return (
            <div className="item" key={index}>
              
              <img src={item.image} className="cart-image" alt={item.title} />  
              <div className="content">
                {item.title}
                <div className="description">{item.category}</div>
                <div className="quantity">Quantity:- {cart.filter((obj) => obj.id === item.id).length}</div>
                <button className="ui red button" onClick={() => getIndexData(index)}>Remove From Cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Cart;

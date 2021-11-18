import React,{useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/actions/productActions";
const Cart = () => {
  const cart = useSelector((state) => state.AddTOCart.cart);
  const dispatch = useDispatch();
  const [getIndex,setGetIndex] = useState();
  var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  function getIndexData(data){
    var filtered = cart.filter(function(value, index, arr){
      return index != data;
    });
    dispatch(removeFromCart(filtered))
  }
  return (
    <div className="ui grid container right">
      <div className="ui relaxed divided list">
        {cart.map((item, index) => {
          return (
            <div className="item" key={index}>
              <img src={item.image} className="cart-image" alt={item.title} />  
              <div className="content">
                {item.title}
                <div className="description">{item.category}</div>
                {/* <button onClick={()=>setGetIndex(index)}>Remove From Cart</button> */}
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

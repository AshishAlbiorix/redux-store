import React,{useEffect} from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addToCart } from "../redux/actions/productActions";
const Cart = ()=>{
    const cartProduct = useSelector((state)=>state.addToCartProduct.products);
    const dispatch = useDispatch();
    const { cartproductId } = useParams();
    const getCartData = async() => {
        const response = await axios.get(`https://fakestoreapi.com/products/${cartproductId}`).catch((error)=>{
            console.log("Error ",error);
        });
        dispatch(addToCart(response.data))
    };
    useEffect(() => {
        if (cartproductId && cartproductId !== "") getCartData();
      }, [cartproductId]);
    return (
        <div><h1>Cart{cartproductId}</h1></div>
    )
};

export default Cart;
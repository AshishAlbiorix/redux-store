import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import ProductsComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/productActions";

const ProductsList = () => {
  const products = useSelector((state) => state.Allproducts.products);
  const dispatch = useDispatch();
  
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios
        .get("https://fakestoreapi.com/products")
        .catch((error) => {
          console.log("error", error);
        });
      dispatch(setProducts(response.data));
    };
    fetchProducts();
  }, []);

  return (
    <div className="ui grid container">
      {Object.keys(products).length === 0 ? (
        <div className="ui four column">
          <div className="column">
            <div className="ui segment">
              <div className="ui active inverted dimmer">
                <div className="ui large text loader">Please Wait While is Data Loading....</div>
              </div>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </div>
          </div>
        </div>
      ) : (
        <ProductsComponent />
      )}
    </div>
  );
};
export default ProductsList;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  selectProducts,
  removeSelectProducts,
} from "../redux/actions/productActions";
import axios from "axios";
import { addToCart } from "../redux/actions/productActions";

const ProductsDetail = () => {
  const product = useSelector((state) => state.SelectedProduct);
  const { id, image, title, price, category, description, rating } = product;

  const [allpro, setAllPro] = useState([]);
  const { productId } = useParams();
  const dispatch = useDispatch();
  
  const fetchSingleData = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((error) => {
        console.log("error", error);
      });
    setAllPro(response.data);
    dispatch(selectProducts(response.data));
  };

  useEffect(() => {
    
    if (productId && productId !== "") fetchSingleData();
    return () => {
      dispatch(removeSelectProducts());
    };
  }, [productId]);
  const dispatchHandler = () => {
    dispatch(addToCart(allpro));
  };
  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div className="ui four column">
          <div className="column">
            <div className="ui segment">
              <div className="ui active inverted dimmer">
                <div className="ui large text loader">...Loading</div>
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
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} alt={title} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <label className="ui teal tag label">${price}</label>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui star rating" role="radiogroup">
                  <i
                    aria-checked={
                      Math.floor(rating.rate) >= 1 ? "true" : "false"
                    }
                    aria-posinset={Math.floor(rating.rate)}
                    aria-setsize={Math.floor(rating.rate)}
                    className={
                      Math.floor(rating.rate) >= 1 ? "active icon" : "icon"
                    }
                    role="radio"
                  ></i>
                  <i
                    aria-checked={
                      Math.floor(rating.rate) >= 2 ? "true" : "false"
                    }
                    aria-posinset={Math.floor(rating.rate)}
                    aria-setsize={Math.floor(rating.rate)}
                    className={
                      Math.floor(rating.rate) >= 2 ? "active icon" : "icon"
                    }
                    role="radio"
                  ></i>
                  <i
                    aria-checked={
                      Math.floor(rating.rate) >= 3 ? "true" : "false"
                    }
                    aria-posinset={Math.floor(rating.rate)}
                    aria-setsize={Math.floor(rating.rate)}
                    className={
                      Math.floor(rating.rate) >= 3 ? "active icon" : "icon"
                    }
                    role="radio"
                  ></i>
                  <i
                    aria-checked={
                      Math.floor(rating.rate) >= 4 ? "true" : "false"
                    }
                    aria-posinset={Math.floor(rating.rate)}
                    aria-setsize={Math.floor(rating.rate)}
                    className={
                      Math.floor(rating.rate) >= 4 ? "active icon" : "icon"
                    }
                    role="radio"
                  ></i>
                  <i
                    aria-checked={
                      Math.floor(rating.rate) >= 5 ? "true" : "false"
                    }
                    aria-posinset={Math.floor(rating.rate)}
                    aria-setsize={Math.floor(rating.rate)}
                    className={
                      Math.floor(rating.rate) >= 5 ? "active icon" : "icon"
                    }
                    role="radio"
                  ></i>
                </div>
                <div
                  className="ui vertical animated button"
                  onClick={dispatchHandler}
                >
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ProductsDetail;

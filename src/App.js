import "./App.css";
import React from "react";
import Header from "./containers/header";
import { Route, Routes } from "react-router-dom";
import ProductsDetail from "./containers/ProductDetails";
import ProductsList from "./containers/ProductsList";
import Cart from "./containers/Cart";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function App() {
  const count = useSelector((state) => state.AddTOCart.cart.length);
  return (
    <div className="App">
        <Header />
        <div className="ui grid container right">
        <Link to="/cart" className="link">
          <div className="cart-icon"><i className="shopping cart icon"></i></div>
          <div className="cart-count">{count}</div>
        </Link>
        </div>
        <Routes>
          <Route path="/" exact element={<ProductsList />} />
          <Route path="/product/:productId" element={<ProductsDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route>404 Not Found</Route>
        </Routes>
    </div>
  );
}

export default App;

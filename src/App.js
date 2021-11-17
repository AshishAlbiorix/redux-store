import './App.css';
import React from "react";
import Header from './containers/header';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import ProductsDetail from './containers/ProductDetails';
import ProductsList from './containers/ProductsList';
import Cart from './containers/Cart';
function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
      <Routes>
      <Route path="/" exact element={<ProductsList/>} />
        <Route path="/product/:productId" element={<ProductsDetail/>} />
        <Route path="/cart/:cartproductId" element={<Cart/>} />
          <Route>404 Not Found</Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;

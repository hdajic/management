import React from "react";
import { Route, Switch } from "react-router-dom";
import Products from "./components/products";
import NavBar from "./components/navbar";
import CreateProduct from "./components/createProduct";
import "./App.css";
import EditProduct from "./components/editProduct";
import ProductDetails from './components/productDetails';

function App() {
  return (
    <main className="container">
      <NavBar />
      <div className="content">
        <Switch>
          <Route path="/product/create" component={CreateProduct} />
          <Route path="/product/edit/:id" component={EditProduct} />
          <Route path="/product/details/:id" component={ProductDetails} />
          <Route path="/products" component={Products} />
          <Route path="/" exact component={Products} />
        </Switch>
      </div>
    </main>
  );
}

export default App;

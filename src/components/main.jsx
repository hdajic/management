import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Products from "./products";
import CreateProduct from "./createProduct";
import EditProduct from "./editProduct";

class Main extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route path="/product/create" component={CreateProduct} />
          <Route path="/product/edit/:id" component={EditProduct} />
          <Route path="/products" component={Products} />
          <Route path="/" exact component={Products} />
        </Switch>
      </div>
    );
  }
}

export default Main;

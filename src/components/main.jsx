import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Products from "./products";
import CreateProduct from "./createProduct";
import EditProduct from "./editProduct";
import ProductDetails from "./productDetails";

class Main extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route
            path="/product/create"
            render={() => (
              <CreateProduct
                onCreateProduct={this.handleProductCreate}
                showDialog={true}
              />
            )}
          />
          <Route path="/product/edit/:id" component={EditProduct} />
          <Route path="/product/details/:id" component={ProductDetails} />
          <Route path="/products"  component={Products} />
          <Route path="/" exact  component={Products} />
        </Switch>
      </div>
    );
  }
}

export default Main;

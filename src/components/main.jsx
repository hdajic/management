import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Axios } from "axios";
import Products from "./products";
import NavBar from "./navbar";
import CreateProduct from "./createProduct";
import EditProduct from "./editProduct";
import ProductDetails from "./productDetails";
//import { getProducts } from "./../services/products";

class Main extends Component {
  state = {
    products: [],
  };

  getProductsFromDb = async () => {
    const { data: products } = await Axios.get("http://localhost:9000/product");
    //const products = getProducts(); //Replace with previous line
    return products;
  };

  constructor() {
    super();
    this.state.products = this.getProductsFromDb();
  }

  handleDelete =  (product) => {
    const products = this.state.products.filter(
      (p) => p.productId !== product.productId
    );
    this.setState({ products });
  };

  render() {
    return (
      <main className="container">
        <NavBar />
        <div className="content">
          <Switch>
            <Route
              path="/product/create"
              render={() => (
                <CreateProduct onCreateProduct={this.handleProductCreate} showDialog={true}/>
              )}
            />
            <Route path="/product/edit/:id" component={EditProduct} />
            <Route path="/product/details/:id" component={ProductDetails} />
            <Route
              path={"/products" || "/"}
              render={() => (
                <Products
                  products={this.state.products}
                  onDeleteProduct={this.handleDelete}
                />
              )}
            />
          </Switch>
        </div>
      </main>
    );
  }
}

export default Main;

import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Axios } from "axios";
import Products from "./products";
import NavBar from "./navbar";
import CreateProduct from "./createProduct";
import EditProduct from "./editProduct";
import ProductDetails from "./productDetails";
import { getProducts } from "./../services/products";

class Main extends Component {
  state = {
      products: []
  };

  async getProducts(){
    const { data: products } = await Axios.get("http://localhost:9000/product");
    //const products = getProducts(); //Replace with previous line
    return products;
  };

  handleDelete = (product) => {
    const products = this.state.products.filter(p => p.productId !== product.productId);
    this.setState({ products});
  };

   handleProductCreate = async (product) => {
    console.log(product);
    const { data: newProduct } = await Axios.post("http://localhost:9000/product", product);
    //const newProduct = {...product, productId: 5}; //Replace with previous line
    const products = [...this.state.products, newProduct];
    this.setState({products});
    //this.props.history.push("/products");

  }

  constructor(){
      super();
      this.state.products = getProducts();
  }

  render() {
    return (
      <main className="container">
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/product/create" render={() => ( <CreateProduct onCreateProduct={this.handleProductCreate}/>)} />
            <Route path="/product/edit/:id" component={EditProduct} />
            <Route path="/product/details/:id" component={ProductDetails} />
            <Route
              path="/products"
              render={() => (
                <Products
                  products={this.state.products}
                  onDeleteProduct={this.handleDelete}
                />
              )}
            />
            <Route path="/" exact component={Products} />
          </Switch>
        </div>
      </main>
    );
  }
}

export default Main;

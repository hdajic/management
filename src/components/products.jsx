import Axios from "axios";
import React, { Component } from "react";
import { getProducts } from "../services/products.js";

class Products extends Component {
  state = {
    products: [],
  };

  selectProduct = (product) => {
    console.log(product);
    this.props.history.push("/product/details/" + product.productId);
  };

  deleteProduct = (product) => {
    const products = this.state.products.filter(
      (p) => p.productId !== product.productId
    );
    this.setState({ products });
  };

  async componentDidMount() {
    const { data: products} = await Axios.get('http://localhost:9000/product');;
    this.setState({products});
  }

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Type</th>
              <th scope="col">Model</th>
              <th scope="col">Size</th>
              <th scope="col">Condition</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.products.map((p) => (
              <tr key={p.productId}>
                <td className="hover" onClick={() => this.selectProduct(p)}>
                  {p.productId}
                </td>
                <td>{p.model}</td>
                <td>{p.size}</td>
                <td>{p.condition}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.deleteProduct(p)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Products;

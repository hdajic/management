import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Products extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const { data: products } = await axios.get("http://localhost:9000/product");
    this.setState({ products });
  }

  selectProduct = (product) => {
    this.props.history.push("/product/edit/" + product.productId);
  };

  handleSubmit = () => {
    console.log(this.state.product);
  };

  render() {
    const { products } = this.state;

    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Model</th>
              <th scope="col">Size</th>
              <th scope="col">Condition</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr
                key={p.productId}
                className="hover"
                onClick={() => this.selectProduct(p)}
              >
                <td>{p.productId}</td>
                <td>{p.model}</td>
                <td>{p.size}</td>
                <td>{p.condition}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link className="btn btn-primary" to="/product/create">
          Add Product
        </Link>
      </div>
    );
  }
}

export default Products;

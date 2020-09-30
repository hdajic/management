import React, { Component } from "react";
import { Link } from "react-router-dom";

class Products extends Component {

  selectProduct = (product) => {
    console.log(product);
    this.props.history.push("/product/details/" + product.productId);
  };

  handleSubmit = () => {
    console.log(this.state.product);
  }

  render() {
    const {products} = this.props;
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
            {products.map((p) => (
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
                    onClick={() => this.props.onDeleteProduct(p)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link className="btn btn-primary" to="/product/create">Add Product</Link>
      </div>
    );
  }
}

export default Products;

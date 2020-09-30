import React, { Component } from "react";

class ProductDetails extends Component {
  state = {};
  render() {
  return <p>Product Details {this.props.match.params.id}</p>;
  }
}

export default ProductDetails;

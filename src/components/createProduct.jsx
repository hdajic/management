import React, { Component } from "react";

class CreateProduct extends Component {
  state = {
    product: {
      model: "",
      size: 0,
      condition: 0,
    },
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  handleChange = ({currentTarget : input}) => {
      const product = { ...this.state.product};
      product[input.name] = input.value;
      this.setState({product});

  }

  render() {
    const { product } = this.state;
    return (
      <div>
        <h1>Create Product</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="productModel">Model:</label>
            <input
              value={product.model}
              name="model"
              onChange={this.handleChange}
              id="productModel"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="productSize">Size:</label>
            <input
              value={product.size}
              name="size"
              onChange={this.handleChange}
              id="productSize"
              type="number"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="productCondition">Condition:</label>
            <input
              value={product.condition}
              name="condition"
              onChange={this.handleChange}
              id="productCondition"
              type="number"
              className="form-control"
            />
          </div>
        </form>
        <button className="btn btn-primary">Create product</button>
      </div>
    );
  }
}

export default CreateProduct;

import React, { Component } from "react";
import axios from "axios";

class EditProduct extends Component {
  state = {
    product: {
      productId: 0,
      model: "",
      size: 0,
      condition: "",
    },
  };

  handleChange = ({ currentTarget: input }) => {
    const product = { ...this.state.product };
    product[input.name] = input.value;
    this.setState({ product });
  };

  async componentDidMount() {
    const { data: product } = await axios.get(
      "http://localhost:9000/product/" + this.props.match.params.id
    );
    this.setState({ product });
  }

  saveChanges = async () => {
    await axios.put("http://localhost:9000/product", this.state.product);
  };

  deleteProduct = async () => {
    await axios.delete('http://localhost:9000/product/' + this.state.product.productId);
  };

  render() {
    const { product } = this.state;
    return (
      <div>
        <form>
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
              type="text"
              className="form-control"
            />
          </div>
        </form>
        <button className="btn btn-primary" onClick={this.saveChanges}>
          Save Changes
        </button>
        <button className="btn btn-danger ml-2" onClick={this.deleteProduct}>
          Delete Product
        </button>
      </div>
    );
  }
}

export default EditProduct;

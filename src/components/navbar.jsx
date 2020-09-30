import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <NavLink className="navbar-brand" to="/">Management</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarColor01">
    <div className="navbar-nav mr-auto">
      <NavLink className="nav-item nav-link" to="/products">Products</NavLink>
    </div>
  </div>
</nav>
  );
};

export default NavBar;

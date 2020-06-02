import React, { Component } from "react";
import logo from "../elements/book_outlet_logo.webp";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo" height="60px" width="80px" />
          </Link>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarMenu">
            <ul className="navbar-nav">
              <li className="navbar-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/catalog" className="nav-link">
                  Catalog
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/offers" className="nav-link">
                  Offers
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/contact us" className="nav-link">
                  Contact Us
                </Link>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0 ml-auto">
              <input
                className="form-control mr-sm-2"
                size="50"
                type="search"
                placeholder="Search for your favourite book over here !"
                aria-label="Search"
              ></input>
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;

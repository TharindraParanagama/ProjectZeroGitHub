import React, { Component } from "react";
import { Link } from "react-router-dom";

class Content extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="text-center">
          <h1 className="display-3">Reading Made Easy</h1>
        </div>
        <blockquote className="blockquote text-center">
          <p className="mb-0">
            “A reader lives a thousand lives before he dies . . . The man who
            never reads lives only one.”
          </p>
          <footer className="blockquote-footer">George R.R. Martin</footer>
          <br />
          <Link to="/auth">
            <button type="button" className="btn btn-primary m-2">
              Login
            </button>
          </Link>
          <button type="button" className="btn btn-primary">
            SignUp
          </button>
        </blockquote>
      </div>
    );
  }
}

export default Content;

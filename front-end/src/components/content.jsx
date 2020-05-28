import React, { Component } from "react";

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
          <button type="button" className="btn btn-primary">
            Shop Now
          </button>
        </blockquote>
      </div>
    );
  }
}

export default Content;

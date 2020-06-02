import React from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

export default function Logout() {
  function logout() {
    Axios.get("http://13.58.157.19:5000/logout").then((data) =>
      console.log("logged out")
    );
  }
  return (
    <Link to="/">
      <button
        type="button"
        className="btn btn-primary float-right m-3 btn-sm"
        onClick={logout}
      >
        logout
      </button>
    </Link>
  );
}

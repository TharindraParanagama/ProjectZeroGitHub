import React, { useState } from "react";
import Login from "../components/login form";
import swal from "sweetalert";
import axios from "axios";

export default function Authentication() {
  axios.defaults.withCredentials = true;

  const [res, setRes] = useState({
    username: "",
    password: "",
    role: "",
  });

  function handleChange(event) {
    setRes({ ...res, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://13.58.157.19:5000/login", {
        username: res.username,
        password: res.password,
        role: res.role,
      })
      .then((data) => {
        if (data.data === "You are logged in") {
          swal("Congrats", data.data, "success");
        } else {
          swal("Sorry", data.data, "error");
        }
      });
  }

  return (
    <>
      <div>
        <Login onSubmit={handleSubmit} onChange={handleChange} res={res} />
      </div>
    </>
  );
}

import React from "react";

export default function Login(props) {
  return (
    <form>
      <br />
      <div className="container">
        <div className="form-group col-lg-6">
          <label htmlFor="InputEmail">Username:</label>
          <input
            type="email"
            className="form-control"
            id="InputEmail"
            aria-describedby="emailHelp"
            onChange={props.onChange}
            name="username"
            value={props.res.username}
          />
        </div>
        <div className="form-group col-lg-6">
          <label htmlFor="InputPassword">Password:</label>
          <input
            type="password"
            className="form-control"
            id="InputPassword"
            onChange={props.onChange}
            name="password"
            value={props.res.password}
          />
        </div>
        <div className="form-group col-lg-6">
          <label htmlFor="InputRole">Role:</label>
          <input
            type="role"
            className="form-control"
            id="InputRole"
            onChange={props.onChange}
            name="role"
            value={props.res.role}
          />
        </div>
        <button
          type="submit"
          onClick={props.onSubmit}
          className="btn btn-primary m-3"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

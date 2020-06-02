import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function FetchByAuthor() {
  const [res, setRes] = useState([]);

  useEffect(() => {
    Axios.get("http://13.58.157.19:5000/author/Charles Duhigg")
      .then((result) => setRes(result.data))
      .catch((err) => console.log(err));
  }, []);

  if (typeof res !== "string") {
    return (
      <div className="container">
        <br />
        <br />
        <div className="display-5">
          <b>Filter A Book By Author</b>
        </div>
        <br />
        <table className="table table-striped">
          <thead>
            <tr className="text-center">
              <th scope="col">ISBN</th>
              <th scope="col">Title</th>
              <th scope="col">Author</th>
              <th scope="col">Price</th>
              <th scope="col">Supplier_ID</th>
            </tr>
          </thead>
          <tbody>
            {res.map((res) => {
              return (
                <tr key={res.isbn} className="text-center">
                  <th scope="row">{res.isbn}</th>
                  <td>{res.title}</td>
                  <td>{res.author}</td>
                  <td>{res.price}</td>
                  <td>{res.supplier_id}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  } else {
    return <></>;
  }
}

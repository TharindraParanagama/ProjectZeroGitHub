import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function FetchByAuthor() {
  const [res, setRes] = useState([]);

  useEffect(() => {
    Axios.get("http://13.58.157.19:5000/price/25")
      .then((result) => setRes(result.data))
      .catch((err) => console.log(err));
  }, []);

  if (typeof res !== "string") {
    return (
      <div className="container">
        <br />
        <br />
        <div className="display-5">
          <b>Filter A Book By Price</b>
        </div>
        <br />
        <table className="table table-striped">
          <thead>
            <tr className="text-center">
              <th scope="col">Title</th>
            </tr>
          </thead>
          <tbody>
            {res.map((res) => {
              return (
                <tr key={res.title} className="text-center">
                  <td>{res.title}</td>
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

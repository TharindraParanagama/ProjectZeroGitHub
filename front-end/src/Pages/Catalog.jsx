import React from "react";
import AllBooks from "../Endpoints/AllBooks";
import Logout from "../components/logoutSection";
import FetchByAuthor from "../Endpoints/fetchByAuthor";
import FilterBasedOnSupplierRating from "../Endpoints/filterBasedonSupplierRating";
import FilterByTitle from "../Endpoints/filterByTitle";
import FilterByPrice from "../Endpoints/filterByPrice";

export default function Catalog() {
  return (
    <>
      <Logout />
      <AllBooks />
      <FetchByAuthor />
      <FilterBasedOnSupplierRating />
      <FilterByTitle />
      <FilterByPrice />
    </>
  );
}

import React, { useState, useEffect } from "react";
import List from "./List";
import api from "../api.json";
import "./style.css";

function Products() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      getProducts();
    }, 500);
  }, []);

  function getProducts() {
    setProducts(api);
  }

  return (
    <>
      {!products && "Loading"}
      {products && <List products={products} />}
    </>
  );
}

export default Products;

import React from "react";
import ListItem from "./ListItem";

export default function List({ products }) {
  return (
    <>
      <div className="product-list">
        {products.map((product) => (
          <ListItem product={product} key={product.id} />
        ))}
      </div>
    </>
  );
}

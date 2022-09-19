import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ListItem from "../Products/ListItem";
import api from "../api.json";

function ProductDetail() {
  const [product, setProduct] = useState(null);
  let params = useParams();

  useEffect(() => {
    let { productId } = params;
    let selectedProduct = api.find((u) => u.id == productId);
    setProduct(selectedProduct);
  }, [params]);

  return (
    <>
      {!product && "Loading"}
      {product && <ListItem product={product} />}
    </>
  );
}

export default ProductDetail;

import React from "react";
import { useParams } from "react-router";

const Product = () => {
  let params = useParams();
  console.log(params);

  return (
    <div>
      <h1>Product id: {params.productID}</h1>
    </div>
  );
};

export default Product;

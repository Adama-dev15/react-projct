import React from "react";
import { useParams } from "react-router-dom";
import { ProductData } from "../../data/data";

const PopDetail = () => {
  const { productId } = useParams();
  const productsData = ProductData();

  // Recherche du produit avec l'ID correspondant
  const product = productsData.find((item) => item.id.toString() === productId);

  return (
    <div>
      <img src={product?.image} alt="image" />
      <h2>Détails du produit {product?.title}</h2>
      <p>Prix: {product?.price} $</p>
    </div>
  );
};

export default PopDetail;

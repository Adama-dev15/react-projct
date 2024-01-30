import React from "react";
import './product.css'
import { NombreDeMot } from "../../MyFunction/nombreDeMot";

const Product = ({
  id,
  price,
  title,
  description,
  category,
  image,
  rating,
  rate,
  count,
}) => {
  const titreReduire = NombreDeMot(title, 20);

  const shouldDisplayDiscount = price > 20;
  const remise = shouldDisplayDiscount -(shouldDisplayDiscount * 0.05);

  return (
    <div className="product">
      {shouldDisplayDiscount && <span>- {remise}</span>}
      <a href={`/product/${id}`}>
       <div className="image">
         <img src={image} alt="image" />
       </div>
        <h2 id={`title-${id}`} className="truncated-text">
          {titreReduire}
        </h2>

        <div className="product-desc">
          <h4>{price} $</h4>
          <div className="detail">détails</div>
        </div>
      </a>
    </div>
  );
};

export default Product;

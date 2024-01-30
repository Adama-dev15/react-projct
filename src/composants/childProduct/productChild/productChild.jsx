import React from "react";
import './productChild.css'
import { NombreDeMot } from "../../MyFunction/nombreDeMot";


const ProductChild = ({
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
  const titreReduire = NombreDeMot(title, 16);


  return (
    <div className="productChild">
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

export default ProductChild;

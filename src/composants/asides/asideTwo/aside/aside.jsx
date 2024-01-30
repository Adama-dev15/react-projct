import React from 'react'
import './aside.css';
import { LetterTitle } from '../../../MyFunction/lettreTitle';

const Aside = ({
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
  const titreReduire = LetterTitle(title, 16);
  return ( 
    <div className='sides'>
      <a className="aside" href={`/product/${id}`}>
        <div className="image">
          <img src={image} alt="image" />
        </div>

        <div className="aside-desc">
          <h2 id={`title-${id}`} className="truncated-text">
            {titreReduire}
          </h2>
          <h4>{price} $</h4>
        </div>
      </a>
    </div>
  );
}

export default Aside;

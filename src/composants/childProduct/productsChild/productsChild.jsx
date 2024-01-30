import React, { useState } from 'react';
import { ProductData } from '../../../data/data';
import ProductChild from '../productChild/productChild';
import './productsChild.css';
import { Croissant } from '../../MyFunction/croissant';
import { Decroissant } from '../../MyFunction/decroissant';

const ProductsChild = () => {
  const productsData = ProductData();
  const [selectedSort, setSelectedSort] = useState(null);

  const SortirProduct = (type) => {
    if (type === 'croissant') {
      return Croissant(productsData);
    } else if (type === 'decroissant') {
      return Decroissant(productsData);
    } else {
      return [...productsData];
    }
  }

  const handleSort = (type) => {
    setSelectedSort(type);
  };

  const sortedProducts = SortirProduct(selectedSort);

  return (
    <div className="productsChild-section">
      <div className='top'>
        <h2 className="title">TABLETTES ENFANT </h2>
        <div className="trie">
          <p>Trier par : Prix <i className="fa-solid fa-caret-down"></i> </p>
          <ul className='hidden'>
            <li onClick={() => handleSort('croissant')}>Croissant</li>
            <li onClick={() => handleSort('decroissant')}>Décroissant</li>
          </ul>
        </div>
      </div>
      <div className="products">
        {sortedProducts.slice(0, 8).map((product, index) => (
          <ProductChild className="article" key={product.id + index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsChild;

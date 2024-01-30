import './products.css';
import { ProductData } from '../../../data/data';
import Product from '../product/product';


const Products = () => {
  const productsData = ProductData();
  return (
    <div className="products-section">
      <h2 className="title">NOS BONS PLANS </h2>
      <div className="products">
        {productsData?.slice(0, 8).map((product, index) => (
          <Product className="article" key={product.id + index} {...product} />
        ))}
      </div>
    </div>
  );
};
export default Products;

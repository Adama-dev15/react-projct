import { ProductData } from '../../data/data';
import ProductChild from '../childProduct/productChild/productChild';
import './productMontre.css';

const ProductMontre = () => {
  const productsData = ProductData();
  return (
    <div className="productMontre-section">
      <h2 className="title">MONTRES CONNECTÉES</h2>
      <div className="products">
        {productsData?.slice(0, 8).map((product, index) => (
          <ProductChild className="article" key={product.id + index} {...product} />
        ))}
      </div>
    </div>
  );
};
export default ProductMontre;

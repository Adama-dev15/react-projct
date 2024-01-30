import { ProductData } from '../../data/data';
import ProductChild from '../childProduct/productChild/productChild';
import './productElectronique.css';

const ProductElectronique = () => {
  const productsData = ProductData();
  return (
    <div className="productElectronique-section">
      <h2 className="title">TABLETTES PRO</h2>
      <div className="products">
        {productsData?.slice(0, 8).map((product, index) => (
          <ProductChild className="article" key={product.id + index} {...product} />
        ))}
      </div>
    </div>
  );
};
export default ProductElectronique;

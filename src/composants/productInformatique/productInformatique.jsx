import { ProductData } from '../../data/data';
import ProductChild from '../childProduct/productChild/productChild';
import './productInformatique.css';

const ProductInformatique = () => {
  const productsData = ProductData();
  return (
    <div className="productInformatique-section">
      <h2 className="title">MATERIELS INFORMATIQUES</h2>
      <div className="products">
        {productsData?.slice(0, 4).map((product, index) => (
          <ProductChild className="article" key={product.id + index} {...product} />
        ))}
      </div>
    </div>
  );
};
export default ProductInformatique;

import { ProductData } from '../../../../data/data';
import Aside from '../aside/aside';
import './asides.css'


const AsidesOne = () => {
  const productsData = ProductData();
  return (
    <div className="asides-section">
      <div className="title"><h2>NOS BONS PLANS </h2></div>
      <div className="asides">
        {productsData?.slice(0, 5).map((product, index) => (
          <div className="article"><Aside key={product.id + index} {...product} /></div>
        ))}
      </div>
    </div>
  );
};
export default AsidesOne;

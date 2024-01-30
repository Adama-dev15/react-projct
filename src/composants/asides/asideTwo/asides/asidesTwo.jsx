import { ProductData } from '../../../../data/data';
import Aside from '../aside/aside';
import './asides.css'


const AsidesTwo = () => {
  const productsData = ProductData();
  return (
    <div className="asides-section">
      <div className="title"><h2>ÇA VIENT DE SORTIR </h2></div>
      <div className="asides">
        {productsData?.slice(0, 4).map((product, index) => (
          <div className="article"><Aside key={product.id + index} {...product} /></div>
        ))}
      </div>
    </div>
  );
};
export default AsidesTwo;

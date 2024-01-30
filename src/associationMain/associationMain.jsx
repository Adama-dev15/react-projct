import React from 'react';
import './associationMain.css';
import AsideOne from '../composants/asides/asideOne/asideOne';
import AsidesOne from '../composants/asides/asideTwo/asides/asidesOne';
import AsidesTwo from '../composants/asides/asideTwo/asides/asidesTwo';
import ProductsChild from '../composants/childProduct/productsChild/productsChild';
import ProductElectronique from '../composants/productElectronique/productElectronique';
import Banner from '../composants/banner/banner';
import ProductMontre from '../composants/productMontre/productMontre';
import ProductInformatique from '../composants/productInformatique/productInformatique';

const AssociationMain = () => {
  return (
    <div className='associationMain'>
        <div className="coteAside">
            <AsideOne />
            <AsidesOne />
            <AsidesTwo />
        </div>
        <div className="coteProduct">
            <div className="productsChild"><ProductsChild /></div>
            <div className='productElectronique'><ProductElectronique /></div>
            <Banner />
            <ProductMontre />
            <ProductInformatique />
        </div>
    </div>
  )
}

export default AssociationMain

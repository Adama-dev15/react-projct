import React from "react";
import Sliderbanner from "../composants/slider/slider";
import Products from "../composants/products-product/products/products";
import ProductsSlider from "../composants/productsSlider/productsSlider";
import AssociationMain from "../associationMain/associationMain";
import Logo from "../composants/logo/logo";

const HomePage = () => {
  return (
    <>
      <Sliderbanner />
      <Products />
      <ProductsSlider />
      <AssociationMain />
      <Logo />
    </>
  );
};

export default HomePage;

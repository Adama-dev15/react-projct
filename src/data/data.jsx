import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export const ProductData = () => {
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchData();
  }, []);
  return Products;
};

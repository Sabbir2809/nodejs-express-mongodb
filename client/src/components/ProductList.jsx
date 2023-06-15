import React, { useEffect, useState } from 'react';
import axios from 'axios';
import data from './../assets/data';
import Product from './Product';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await axios.get('/api/v1/products');
    const data = res.data.data;
    setProducts(data);
  };

  const handleClick = async (id) => {
    const res = await axios.delete(`/api/v1/products/${id}`);
    console.log(res.data.data);
    if (res.data.data._id) {
      setProducts(products.filter((p) => p._id !== res.data.data._id));
    }

    // setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      {products.map((product, index) => (
        <Product {...product} key={index} handleClick={handleClick}></Product>
      ))}
    </>
  );
};

export default ProductList;

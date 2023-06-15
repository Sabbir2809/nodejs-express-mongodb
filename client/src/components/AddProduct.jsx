import axios from 'axios';
import React, { useState } from 'react';

const AddProduct = () => {
  const [product, setProduct] = useState({});

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
    addProduct(product);
  };

  const addProduct = async (product) => {
    const res = await axios.post('/api/v1/products', product);
    const data = res.data;
    console.log(data);
    // setProducts(data);
  };

  return (
    <form className='form-horizontal' onSubmit={handleSubmit}>
      <fieldset>
        <legend> Add Product</legend>
        <div className='form-group'>
          <label className='col-md-4 control-label' htmlFor='title'>
            Title
          </label>
          <div className='col-md-4'>
            <input
              id='title'
              name='title'
              type='text'
              placeholder='title'
              className=' form-control input-md'
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='form-group'>
          <label className='col-md-4 control-label' htmlFor='thumbnail'>
            Thumbnail
          </label>
          <div className='col-md-4'>
            <input
              id='thumbnail'
              name='thumbnail'
              type='text'
              placeholder='Thumbnail'
              className=' form-control input-md'
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='form-group'>
          <label className='col-md-4 control-label' htmlFor='price'>
            Price
          </label>
          <div className='col-md-4'>
            <input
              id='price'
              name='price'
              type='number'
              placeholder='price'
              className=' form-control input-md'
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='form-group'>
          <label className='col-md-4 control-label' htmlFor='category'>
            Category
          </label>
          <div className='col-md-4'>
            <select id='category' name='category' className='form-control' onChange={handleChange}>
              <option value=''>Choose</option>
              <option value='smartphone'>Smart Phone</option>
              <option value='laptop'>Laptops</option>
            </select>
          </div>
        </div>
        <div className='form-group'>
          <label className='col-md-4 control-label' htmlFor='brand'>
            Brand
          </label>
          <div className='col-md-4'>
            <select id='brand' name='brand' className='form-control' onChange={handleChange}>
              <option value=''>Choose</option>
              <option value='apple'>Apple</option>
              <option value='samsung'>Samsung</option>
            </select>
          </div>
        </div>
        <div className='form-group'>
          <label className='col-md-4 control-label' htmlFor='discountPercentage'>
            Discount
          </label>
          <div className='col-md-4'>
            <input
              id='discountPercentage'
              name='discountPercentage'
              type='number'
              placeholder='discountPercentage'
              className=' form-control input-md'
              onChange={handleChange}
            />
          </div>
        </div>
        <input type='submit' value='Add' />
      </fieldset>
    </form>
  );
};

export default AddProduct;

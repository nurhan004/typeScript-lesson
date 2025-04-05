import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/products/productsThunk';
import { RootState, AppDispatch } from '../store/store';
import "./contact.scss"
function Contact() {
  const dispatch = useDispatch<AppDispatch>();
  const { product, loading, error } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className='gtid'>
        {product.map((product) => (
          <div key={product.id} className='card'>
            <img src={product.images} alt="" />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price:{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;

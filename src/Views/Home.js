import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../Components/Loader';
import ProductCard from '../Components/ProductCard';

function Home() {
  const url =
    'https://5f1d0e7d39d95a0016953ae0.mockapi.io/api/v1/products?page=1&limit=10';
  const [products, setProducts] = useState({
    loading: false,
    data: null,
    error: false
  });

  let content = null;

  useEffect(() => {
    setProducts({
      loading: true,
      data: null,
      error: false
    });
    axios
      .get(url)
      .then(res => {
        setProducts({
          loading: false,
          data: res.data,
          error: false
        });
      })
      .catch(() => {
        setProducts({
          loading: false,
          data: null,
          error: true
        });
      });
  }, [url]);

  if (products.error) {
    content = <p>There was an error please refresh or try again later.</p>;
  }

  if (products.loading) {
    content = <Loader />;
  }

  if (products.data) {
    content = products.data.map(product => (
      <div key={product.id}>
        <ProductCard product={product} />
      </div>
    ));
  }

  return (
    <div>
      <h1 className='font-bold text-2xl mb-3'>Best Sellers</h1>
      {content}
    </div>
  );
}

export default Home;

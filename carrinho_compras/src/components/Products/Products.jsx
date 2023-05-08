import React, {useState, useEffect} from 'react';
import fetchProduts from '../../api/fetchProdutcs';
import ProductsCard from './ProductsCard';

import './Products.css';

function Products(){

  const [products, setProducts] = useState([]); 

  useEffect(() => {
    fetchProduts('xbox').then((response) => {
      setProducts(response);
    });
  }, []);

  
  return(
    <section className="products container">
      { products.map((product) => <ProductsCard key={product.id} props={product} />) }
      
    </section>

  );
}

export default Products;
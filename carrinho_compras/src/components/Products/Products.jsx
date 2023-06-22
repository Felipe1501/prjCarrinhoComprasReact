import React, {useEffect, useContext} from 'react';
import fetchProduts from '../../api/fetchProdutcs';
import ProductsCard from './ProductsCard';

import './Products.css';
import Loading from '../Loading/Loading';
import AppContext from '../../context/AppContext';

function Products(){

  const {products, setProducts, loading, setLoading} = useContext(AppContext);
  
  useEffect(() => {
    fetchProduts('xbox').then((response) => {
      setProducts(response);
      setLoading(false);
    });
  }, []);

  
  return(
    (loading && <Loading />  ) || (
      <section className="products container"> { products.map((product) => <ProductsCard key={product.id} props={product} />) }
      </section>
    )

  );
}

export default Products;
import React from 'react';
import propTypes  from 'prop-types';
import { BsCartPlusFill } from 'react-icons/bs';
import formatCurrency from '../../utils/formatCurrency';

import './ProductsCards.css';

function ProductsCard({props}){

  const {title, price, thumbnail} = props;

  return(
    <section className="product-card">
      <img 
        src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} 
        alt="product" 
        className="card__img"
      />

      <div className="card__info">
        <h2 className="card__price">{formatCurrency(price, 'BRL')}</h2>
        <h2 className="card__title">{title}</h2>
      </div>

      <button type="button" className="button__addCard">
        <BsCartPlusFill />
      </button>
    </section>
  );
}

export default ProductsCard;

ProductsCard.propTypes = {
  props: propTypes.shape({}),
}.isRequired;
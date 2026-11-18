import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard( {product, onAddToCart} ) {
    // Make sure that product is valid (e.g. passing a non-existnet product)
    if (!product) return (<div>INVALID PRODUCT!</div>);

    return (
      <article className='product-card'>
          <Link className='product-img-link' to={`/product/${product.id}`}>
              <img 
                  className='product-img' 
                  src={product.image} 
                  alt={product.title} 
                  loading='lazy' 
              />
          </Link>
          <div className='product-body'>
              <span className='product-category'>{product.genre}</span>
              <h3 className='product-title'>
                  <Link className='' to={`/product/${product.id}`}>{product.title}</Link>
              </h3>
              {console.log(product.price)}
              <p className='product-price'>$ {typeof(product.price) === "number" ? product.price.toFixed(2) : "Contact for price"}</p>
              <button className='btn-secondary btn-block' type='button' onClick={() => {onAddToCart(product)}}>Add to cart</button>
          </div>
      </article>
    );
}

export default ProductCard;
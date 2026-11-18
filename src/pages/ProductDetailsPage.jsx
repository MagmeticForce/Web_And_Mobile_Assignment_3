import React from 'react';
import { useState } from 'react';
import {Link, useParams} from 'react-router-dom';



function ProductDetailsPage({ products, onAddToCart }) {

    const { productId } = useParams();
    const [qty, setQty] = useState(1);

    // Determine which product to display on the page
    const product = products.find((p) => (p.id === productId));

    if (!product) {
        return (
            <div className='detail-error'>
                <h2>404 Product not found</h2>
                <Link className='btn btn-secondary' to='/'>
                    Go back
                </Link>
            </div> 
        );
    }

    return (
        <div className='detail-container'>
            <nav className='breadcrumb'>
                <Link to="/"> &lt; <span>{product.title}</span></Link>
            </nav>

            <div className='detail-grid'>
                <img src={product.image} alt={product.title} className='detail-img' />
            </div>

            {/* Righthand side of the content */}
            <div className='detail-info'>
                <span className='product-category'>{product.genre}</span>
                <h1 className='detail-title'>{product.title}</h1>
                <p className='detail-price'>{product.price.toFixed(2)}</p>
                <p className='detail-desc'>{product.description}</p>
                <div className='stock-tag'> { (product.stock > 0) ? `✅In stock (${product.stock} units)` : "❌Out of stock, please check back later!" } </div>
                <div className='detail-actions'>
                    <div className='qty-input-group'>
                        <label htmlFor='detail-qty'>Quantity: </label>
                        <input type='number' id='detail-qty' min='1' max={product.stock} value={qty} onChange={(eventParameter) => setQty(Math.max(1, parseInt(eventParameter.target.value, 10) || 1))} />
                    </div>
                </div>
                <button className='btn btn-primary' onClick={() => onAddToCart(product, qty)}>Add {qty} to Cart</button>
            </div>
        </div>
    );
}

export default ProductDetailsPage;
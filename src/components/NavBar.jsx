import React from 'react';
import { Link } from 'react-router-dom';

function NavBar({ cartCount, onOpenCart }) {
  return (
    <header className='site-header'>
        <div className='header-inner'>
            <Link className='brand-logo' to='/'>💿VinylVault</Link>
            <nav className='nav-actions'>
                <Link className='nav-link' to='/'>
                    Catalog
                </Link>
                <button type='button' className='btn-cart-badge' onClick={onOpenCart} aria-label={`Shopping cart with ${cartCount} items.`}>
                    🛒Cart {cartCount > 0 ? <span class='badge-pill'>{cartCount}</span> : <span></span>}
                </button>
            </nav>
        </div>
    </header>
  );
}

export default NavBar;
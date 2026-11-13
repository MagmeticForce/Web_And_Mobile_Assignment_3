import React from 'react';
import { useNavigate } from 'react-router-dom';

function CartDrawer({cart, onCloseCart, onUpdateQty, onRemove, isOpen}) {

    const navigate = useNavigate();

    if (!isOpen) {return null;}

    const subtotal = cart.reduce((accumulatedTotal, item) => accumulatedTotal + item.price * item.quantity, 0);

    const handleProceedToCheckout = () => {
        // Close to cart
        onCloseCart();
        navigate("/checkout");
    };

    return (
       <div className='drawer-overlay' onClick={onCloseCart}>
            <aside className='drawer-panel' onClick={(eventInfo) => {eventInfo.stopPropagation()}}>
                <div className='drawer-header'>
                    <h2>Your cart ({cart.length})</h2>
                    <button type='button' className='btn-close' onClick={onCloseCart}>&times;</button> {/*&times is basicaly the multiplecation symbol*/}
                </div>

                <div className='drawer-body'>
                    {cart.length === 0 ? (<div className='empty-cart'>Cart is empty</div>) : (
                        <ul className='cart-list'> 
                            {
                                cart.map(
                                    (cartItem) => (
                                        <li key={cartItem.id} className='cart-item'>
                                            <img src={cartItem.image} alt={cartItem.name} className='cart-item-img'/>
                                            <div className='cart-item-info'>
                                                <h4>{cartItem.name}</h4>
                                                <p className='cart-item-price'>
                                                    ${(cartItem.price * cartItem.quantity).toFixed(2)}
                                                </p>
                                                <div className='qty-controls'>
                                                    <button onClick={() => onUpdateQty(cartItem.id, -1)}>-</button>
                                                    <span>{cartItem.quantity}</span>
                                                    <button onClick={() => onUpdateQty(cartItem.id, 1)}>+</button>
                                                    <button className='btn-remove' onClick={() => onRemove(cartItem.id)}>🗑️</button>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                )
                            }
                        </ul>
                    )}
                </div>
                {
                    cart.length > 0 && (
                        <div className='drawer-footer'>
                            <div className='subtotal-row'>
                                <span>Subtotal:</span>
                                <strong>${subtotal.toFixed(2)}</strong>
                            </div>
                            <button type='button' className='btn btn-primary btn-block' onClick={handleProceedToCheckout}>Proceed to Checkout</button>
                        </div>
                    )
                }
            </aside>
        </div>
    )
}

export default CartDrawer;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CheckoutPage( {cart, onClearCart} ) {
    const [paymentIsSubmitted, setPaymentIsSubmitted] = useState(false);
    const [formData, setFormData] = useState(
        {
            fullName: "",
            email: "",
            shippingAddress: "",
            zipCode: ""
        }
    );

    // Compute the cart total for the invoice calculation
    const subtotal = cart.reduce((sum, item) => (sum + item.price * item.quantity), 0);

    const taxes = subtotal * 0.06;
    const total = subtotal + taxes;

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setPaymentIsSubmitted(true);
        onClearCart();
    };


    if (paymentIsSubmitted) {
        return (
            <div className='checkout-success'>
                <h2>🎉 Order Placed Successfully!</h2>
                <p> 
                    Thank you, {formData.fullName} A confirmation email is sent to {formData.email}.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eos sint 
                    quas ullam at impedit odit deserunt vitae unde, voluptates expedita sequi quaerat 
                    excepturi, illo voluptatem velit quod commodi eum.
                </p>
                < Link className='btn btn-primary' to='/'>Return to Home</Link>
            </div>

        );
    }

    // handle edge cases
    if (cart.length === 0) {
      return (
        <div className='empty-cart-page'>
            <h2>Your cart is empty</h2>
            <Link className='btn btn-secondary' to='/'>Shop for Some Items Please</Link>
        </div>
      );
    }

    return (
        <div className='checkout-container'>
            <h1>Checkout and Order Confirmation</h1>
            <div className='checkout-grid'>
                 {/* Form element */}
                 <form className='checkout-form' onSubmit={handleSubmit}>
                    <h2>Shipping Information</h2>
                        <div className='form-group'>
                            <label htmlFor='fullName'>Full Name *</label>
                            <input type="text" name="fullName" id="fullName" required value={formData.fullName} onChange={handleChange} />
                           
                            <label htmlFor='email'>Email *</label>
                            <input type="text" name="email" id="email" required value={formData.email} onChange={handleChange} />
                            
                            <label htmlFor='shippingAddress'>Shipping Address *</label>
                            <input type="text" name="shippingAddress" id="shippingAddress" required value={formData.shippingAddress} onChange={handleChange} />
                            
                            <label htmlFor='zipCode'>Zip Code *</label>
                            <input type="text" name="zipCode" id="zipCode" required value={formData.zipCode} pattern="[0-9]{5}" onChange={handleChange} />

                            <button className='btn btn-primary btn-block btn-lg'>Complete Order (${total.toFixed(2)})</button>
                        </div>
                 </form>
                 {/* Order summary */}
                <aside className='order-summary-card'>
                    <h3>Order Summary</h3>
                    <ul className='summary-list'>
                        {cart.map( (item) => (
                            <li key={item.id} className='summary-row'>
                                <span>
                                    {item.title} &times; {item.quantity}
                                </span>
                                <span>
                                    ${(item.price * item.quantity).toFixed(2)}
                                </span>
                            </li>
                        ))}
                    </ul>
                    <hr />
                    <div className='summary-row'>
                        <span>Subtotal:</span> <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className='summary-row'>
                        <span>Estimated Tax (6%):</span> <span>${taxes.toFixed(2)}</span>
                    </div>
                    <div className='summary-row total-row'>
                        <span>Total:</span> <span>${total.toFixed(2)}</span>
                    </div>
                </aside>
            </div>
        </div>
    );
}

export default CheckoutPage;
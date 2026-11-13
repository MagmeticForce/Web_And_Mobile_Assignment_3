import { useState } from 'react'
import {Route, Routes} from "react-router-dom"
import NavBar from './components/NavBar';
import CartDrawer from './components/cartDrawer';
import CatalogPage from './pages/CatalogPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CheckoutPage from './pages/CheckoutPage';
import { ALBUMS } from './data/albums';
import './App.css'

function App() {
  const [cart, setCart] = useState([]);
  const[cartDrawerIsOpened, setCartDrawerIsOpened] = useState(true);

  const handleAddToCart = (productBeingAddedToCart, quantity = 1) => {
    setCart((previousCartObjects) => {
      // See if the item is already in the cart:
      const itemAlreadyInCart = previousCartObjects.find((item) => item.id === productBeingAddedToCart.id)
      if (itemAlreadyInCart){
        // Update the cart such that the existing item's quantity is updated.
        // Go through al the cart items, and if the already existing item is found,
        // update its quantity.
        return previousCartObjects.map( (item) => item.id === productBeingAddedToCart.id ? {...item, quantity: item.quantity + quantity} : item);
      }
      // Update the cart such that the new item is appended.
      return [...previousCartObjects, {...productBeingAddedToCart, quantity}];
    });
    setCartDrawerIsOpened(true);
  };


  const handleUpdateQuantity = (productid, change) => {
    setCart((previousCartItems) => {
        previousCartItems.map(
          (item) => {
              if (item.id === productid) {
                const newQty = item.quantity + change;
                return newQty > 0 ? {...item, quantity: newQty} : null;
              }
            return item;
          }
        ).filter(Boolean); // gets rid of any false opertion from the map()
      }
    ); 
  }

  // Removing items from the cart
  const handleRemoveFromCart = (productId) => {
    setCart(
      (previousCart) => {previousCart.filter((item) => item.id !== productId.id)}
    )
  }

  const handleClearCart = () => {
    setCart([]);
  }

  const totalCartCount = cart.reduce( (accumulatedTotal, item) => accumulatedTotal + item.quantity, 0);


  return (
    <div>
      <CartDrawer cart={cart} isOpen={cartDrawerIsOpened} onCloseCart={() => setCartDrawerIsOpened(false)} onUpdateQty={handleUpdateQuantity} onRemove={handleRemoveFromCart} />
    </div>
  )
}

export default App

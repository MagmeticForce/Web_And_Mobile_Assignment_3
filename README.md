# Web_And_Mobile_Assignment_3

## Project Setup and Execution Instructions
* Prerequisites:
  * Node.js v24.22.0
  * A clone this repository to the local system
  * Run command ```npm install```
* Boot script:
  * Run ```npm run dev```
  * If connection is successful, you should receive a link to ```localhost```. Follow the link.
* Overview of project directory: The directory structure contains a root directory with ```public``` and ```src``` directories. Inside of ```public``` are resources that the user receives. Inside of ```src``` is the source code, which contains a ```pages``` directory, a ```components``` directory, a ```data``` directory, and an ```assets``` directory. 

## React Component Hierarchy And State Flow Architecture
```html
<App /> -> `src/App.jsx` (cart[Array], isCartOpen[Boolean])
  <navBar /> -> `src/components/navBar.jsx` (cartCount[Integer], onOpenCart())
  <CatalogPage> -> `src/pages/CatalogPage.jsx` (products[Array], onAddToCart(product)) (useState selectedCategory[String] for keeping track of which filter category is selected)
    <productCard /> -> `src/components/productCard.jsx` (product[Object], onAddToCart(product))
      <ProductDetailsPage /> -> `src/pages/ProductDetailsPage.jsx` (routed page, `/product/${product.id}`) (products[Array], onAddToCart(product)) (useState qty [Integer] for keeping track of item quantity)
  <CartDrawer /> -> `src/components/cartDrawer.jsx` (onOpenCart(), cart [Array], onCloseCart(), onUpdateQty(), onRemove(id))
    <checkoutPage /> -> `src/pages/checkoutPage.jsx` (routed page, '/checkout') (useState paymentIsSubmitted [Boolean] for checking if user submitted payment, useState formData[Object] for storing input form data)
```

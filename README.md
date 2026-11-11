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
  <main />
   <Routes />
    <Route path="/" element={<CatalogPage />} /> -> `src/pages/CatalogPage.jsx` (products[Array], onAddToCart(product)) (useState selectedCategory[String] for keeping track of which filter category is selected)
       <header />  (catalogue hero)
        <h1 />
        <p />
        <div /> (filter bar)
       <div /> (product grid)
        <productCard /> (placed with .map() iterator) -> `src/components/productCard.jsx` (key[Integer] product[Object], onAddToCart(product))
    <Route path="/product/:productId" element={<ProductDetailsPage />} /> -> `src/pages/ProductDetailsPage.jsx` (products[Array], onAddToCart(product)) (useState qty [Integer] for keeping track of item quantity)
     <nav /> (breadcrumb)
      <Link /> (to "/Catalog")
      <div /> (detail grid)
       <img /> (product image)
      <div /> (detail info)
       <span /> (product category)
       <h1 /> (product title)
       <p /> (product price)
       <p /> (product description)
       <div /> (stock tag)
       <div /> (actions container)
        <div /> (quantity input group)
         <label />
         <input />
       <button /> (add to cart button)
    <Route path="/checkout" element={<checkoutPage />} /> -> `src/pages/checkoutPage.jsx` (useState paymentIsSubmitted [Boolean] for checking if user submitted payment, useState formData[Object] for storing input form data)
     <h1 /> (checkout order confirmation text)
     <div /> (checkout grid)
      <form /> (checkout form)
       <h2 />
        <div /> (form group)
         <label />
         <input /> (full name)
         <label />
         <input /> (email)
         <label />
         <input /> (shipping address)
         <label />
         <input /> (zip code)
         <button /> (complete order)
      <aside /> (order summary card)
       <h3 />
       <ul /> (summary list)
        <li /> (dynamically generated using .map() operator)
         <span /> (item name and quantity)
         <span /> (item price)
       <hr />
       <div /> (summary row subtotal)
       <div /> (summary row taxes)
       <div /> (summary row total)
   <CartDrawer /> -> `src/components/cartDrawer.jsx` (onOpenCart(), cart [Array], onCloseCart(), onUpdateQty(), onRemove(id))
    <aside /> (drawer panel)
     <div /> (drawer header)
      <h2 />
      <button /> (close cart button)
     <div /> (drawer body)
      <ul />
       <li /> (dynamically generated with .map() operator)
        <img /> (product image)
        <div /> (product details container)
         <h4 />
         <p />
         <div /> (quantity controls)
          <button /> (minus button)
          <span /> (current quantity)
          <button /> (plus button)
          <button /> (remove)
     <div /> (drawer footer)
      <div /> (subtotal row)
       <span /> (subtotal text)
       <strong /> (subtotal amount)
      <button /> (proceed to checkout) 
```

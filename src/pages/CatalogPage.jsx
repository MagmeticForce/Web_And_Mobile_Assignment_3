

import React, {useState} from 'react';
import ProductCard from '../components/ProductCard';

function CatalogPage( {products, onAddToCart} ) {
  
  const genres = ["All", "Jazz", "Electronic", "Rock", "Classical"];
  const [selectedGenre, setSelectedGenre] = useState("All");

  const validProducts = products || [];

  //                                                                                  For each validProduct, include it only if it's genre is 
  //                                                                                  selectedGenre:
  const filteredProducts = selectedGenre === "All" ? validProducts : validProducts.filter((validProduct) => (validProduct.genre === selectedGenre));

  return (
    <div className='catalog-container'>
        <header className='catalog-hero'>
          <h1>Welcome to VinylVault!</h1>
          <p>Browse from a selection of records spanning from a wide variety of genres.</p>
          <div className='filter-bar'>
             { /* Go through each genre in genres: */ 
              genres.map(
                (genre) => (
                  <button key={genre} className={`filter-pill ${selectedGenre === genre ? "active" : ""}`} onClick={() => setSelectedGenre(genre)}>{genre}</button>
                )
              )
            }
          </div>
        </header>
        <div className='product-grid'>
            {/* Go through each product in filteredProducts:*/} 
            {filteredProducts.map((product)=>(
              // Display a product card for the product:
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
        </div>
    </div>
  )
}
export default CatalogPage;
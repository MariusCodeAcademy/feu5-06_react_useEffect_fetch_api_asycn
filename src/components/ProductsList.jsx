// sukurti komponenta
import React, { useEffect, useState } from 'react';

function ProductsList() {
  const [productsArr, setProductsArr] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((resp) => resp.json())
      .then((dataBack) => {
        console.log('dataBack ===', dataBack);
      })
      .catch(console.warn);
  }, []);

  return (
    <div>
      <h2>ProductsList</h2>
      <ul>
        {productsArr.map((pObj) => (
          <li>Hello</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsList;
// sukurti state, productsArr, lygu []

// jsx atvaizduojam sarasa kuri dinamiskai generuojam is productsArr

// useEffecte aprasom fetch funkcija ir parsiuciam duomenis is https://dummyjson.com/products

// gave duomenis atnaujinam productsArr,

// jsx jame atvaizduojam prekiu pavadinimus ir kaina

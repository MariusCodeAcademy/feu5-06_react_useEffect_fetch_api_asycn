// sukurti komponenta
import React, { useEffect, useState } from 'react';
import Card from '../ui/card/Card';
import SingleProduct from './SingleProduct';

function ProductsList() {
  const [productsArr, setProductsArr] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((resp) => resp.json())
      .then((dataBack) => {
        console.log('dataBack ===', dataBack.products);
        setProductsArr(dataBack.products);
      })
      .catch(console.warn);
  }, []);

  return (
    <div>
      <h2>ProductsList</h2>
      <ul>
        {productsArr.map((pObj) => (
          <SingleProduct key={pObj.id} item={pObj} />
          // <li key={pObj.id}>
          //   <Card>
          //     {pObj.title} - ${pObj.price.toFixed(2)} - Stock: {pObj.stock}
          //     <button>Add to Cart</button>
          //   </Card>
          // </li>
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

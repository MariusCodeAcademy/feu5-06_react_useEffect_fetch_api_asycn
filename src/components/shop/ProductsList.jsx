// sukurti komponenta
import React, { useEffect, useState } from 'react';
import SingleProduct from './SingleProduct';

function ProductsList() {
  const [productsArr, setProductsArr] = useState([]);
  const [cartArr, setCartArr] = useState([
    {
      cartId: Math.random().toString().slice(2),
      productId: 5,
      title: 'Apple',
      price: '599',
      img: 'apple.jpg',
      qty: 1,
    },
  ]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((resp) => resp.json())
      .then((dataBack) => {
        console.log('dataBack ===', dataBack.products);
        setProductsArr(dataBack.products);
      })
      .catch(console.warn);
  }, []);

  function addToCart(idOfProd) {
    console.log('addToCart', idOfProd);
    // pamazinti vienetu prekes stock
    // perkelti preke i cart
  }

  return (
    <div>
      <h2>ProductsList</h2>

      {/* <Cart list={cartArr} /> */}
      <ul>
        {productsArr.map((pObj) => (
          <SingleProduct key={pObj.id} item={pObj} onAddToCart={() => addToCart(pObj.id)} />
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

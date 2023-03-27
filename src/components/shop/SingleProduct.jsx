import React from 'react';
import Card from '../ui/card/Card';

function SingleProduct(props) {
  const pObj = props.item;
  return (
    <li>
      <Card>
        debugID: {pObj.id} <br /> {pObj.title} - ${pObj.price.toFixed(2)} - Stock: {pObj.stock}
        <button onClick={props.onAddToCart}>Add to Cart</button>
      </Card>
    </li>
  );
}

export default SingleProduct;

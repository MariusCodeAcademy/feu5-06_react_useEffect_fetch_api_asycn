import React from 'react';
import Card from '../ui/card/Card';

function SinglePost({ item }) {
  return (
    <Card full>
      <h3>{item.title}</h3>
      <p>post text</p>
    </Card>
  );
}

export default SinglePost;

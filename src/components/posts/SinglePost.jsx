import React from 'react';
import Card from '../ui/card/Card';

function SinglePost({ item, onDelete }) {
  return (
    <Card full>
      <h3>{item.title}</h3>
      <p>{item.body}</p>
      <button
        onClick={() => {
          onDelete(item.id);
        }}
      >
        Delete me
      </button>
    </Card>
  );
}

export default SinglePost;

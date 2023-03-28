import React, { useEffect, useState } from 'react';
import Card from '../ui/card/Card';
import Grid from '../ui/grid/Grid';
import Title from './../ui/title/Title';
import SinglePost from './SinglePost';

function PostList() {
  const [postsArr, setPostsArr] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/posts')
      .then((resp) => resp.json())
      .then((dataBack) => {
        console.log('dataBack ===', dataBack);
        setPostsArr(dataBack.posts);
      })
      .catch(console.warn);
  }, []);

  function handleDelete(idToDelete) {
    console.log('handleDelete', idToDelete);
    setPostsArr((prevPosts) => {
      return prevPosts.filter((pObj) => pObj.id !== idToDelete);
    });
  }

  return (
    <div>
      <Title>PostList</Title>

      <Grid>
        {postsArr.map((pObj) => (
          <SinglePost key={pObj.id} item={pObj} onDelete={handleDelete} />
        ))}
      </Grid>
    </div>
  );
}

export default PostList;

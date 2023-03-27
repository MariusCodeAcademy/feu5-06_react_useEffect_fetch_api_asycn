import React, { useEffect, useState } from 'react';
import Card from '../ui/card/Card';
import Grid from '../ui/grid/Grid';
import Title from './../ui/title/Title';

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

  return (
    <div>
      <Title>PostList</Title>

      <Grid>
        {postsArr.map((pObj) => (
          <Card key={pObj.id}>
            <h3>Post</h3>
            <p>post text</p>
          </Card>
        ))}
      </Grid>
    </div>
  );
}

export default PostList;

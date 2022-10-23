import { useState, useEffect } from 'react';

const Post = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const res = await
      fetch('https://jsonplaceholder.typicode.com/posts')

      const data = await res.json();
      setPosts(data);
    };
    getPosts();
  }, []);


  return (
    <>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
};

export default Post;

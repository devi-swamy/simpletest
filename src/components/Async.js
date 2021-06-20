import React, { useState, useEffect } from "react";

const Async = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);
  return (
    <div>
      <ul>
        {posts.map(post => (
          <li>
            {post.id} and the title is {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Async;

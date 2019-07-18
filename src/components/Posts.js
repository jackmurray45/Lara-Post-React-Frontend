import React, {useState, useEffect} from 'react';

function Posts() {

  useEffect(() => {
    fetchPosts();
  }, []);

  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {




    const data = await fetch(
      "http://lara-post.test/api/posts"
    );

    const posts = await data.json();
    setPosts(posts.data);
  };


  return (
    <div>
        <h1>Posts</h1>
        {posts.map(data => (
          <div key ={data.id} className="card post-card">
            <div className="card-body">
              <h5 className="card-title">{data.name}</h5>
              <p className="card-text">{data.content}</p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Posts;

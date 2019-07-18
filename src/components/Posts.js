import React, {useState, useEffect} from 'react';
import API from '../API.js';

function Posts() {

  useEffect(() => {
    fetchPosts();
  }, []);

  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const api = new API();
    api.createEntity({name: 'posts'});
    const posts = await api.endpoints.posts.getAll();
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

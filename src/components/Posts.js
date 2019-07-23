import React, {useState, useEffect} from 'react';
import API from '../API.js';

function Posts() {


  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [pageNum, setPageNum] = useState(1);

  useEffect(() => {
    fetchPosts(pageNum);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isFetching]);

  function handleScroll() {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    setPageNum(pageNum + 1);
    setIsFetching(true);
  }

  const fetchPosts = async (pageNum) => {
    const api = new API();
    api.createEntity({name: 'posts'});
    const newPosts = await api.endpoints.posts.getAll(pageNum);
    setIsFetching(false);
    setPosts([...posts, ...newPosts.data]);
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

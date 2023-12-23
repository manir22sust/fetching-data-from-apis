import { useState, useEffect } from "react";

const FetchApi = () => {
  const BASE_URL = "https://jsonplaceholder.typicode.com/posts";
  // State to hold fetched data
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    //Fetch data using async/await with the fetch api
    const fetchUsingAsyncAwaitWithFetchApi = async () => {
      const response = await fetch(BASE_URL);
      const data = await response.json();
      setPosts(data);
    };
    fetchUsingAsyncAwaitWithFetchApi();
  }, []);
  return (
    <div className="container">
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <h3>{post.title} </h3>
          <p>{post.body} </p>
        </div>
      ))}
    </div>
  );
};

export default FetchApi;

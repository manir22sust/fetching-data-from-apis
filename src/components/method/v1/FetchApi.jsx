import { useState, useEffect } from "react";

const FetchApi = () => {
  const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

  //state to hold fetched data
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchUsingPromiseWithFetchApi = () => {
      fetch(BASE_URL)
        .then((response) => response.json())
        .then((data) => {
          setPosts(data);
        });
    };
    fetchUsingPromiseWithFetchApi();
  }, []);

  return (
    <div className="container">
      <h1> Fetching Data in React</h1>
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

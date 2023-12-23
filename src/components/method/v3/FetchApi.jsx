import { useState, useEffect } from "react";
import axios from "axios";

const FetchApi = () => {
  const BASE_URL = "https://jsonplaceholder.typicode.com/posts";
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    // Fetch data using Promise with Axios
    const fetchUsingPromseWithAxios = () => {
      axios.get(BASE_URL).then(({ data }) => {
        setPosts(data);
      });
    };
    fetchUsingPromseWithAxios();
  }, []);
  return (
    <div className="container">
      <h1> Fetching Data in React</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <h3> {post.title} </h3>
          <p>{post.body} </p>
        </div>
      ))}
    </div>
  );
};

export default FetchApi;

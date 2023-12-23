import { useState, useEffect } from "react";
import axios from "axios";

const FetchApi = () => {
  const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

  //state to hold fetched data
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchUsingAsyncAwaitWithAxios = async () => {
      const { data } = await axios.get(BASE_URL);
      setPosts(data);
    };
    fetchUsingAsyncAwaitWithAxios();
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

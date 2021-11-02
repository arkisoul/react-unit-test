import React, { useEffect } from "react";
import axios from 'axios';

const Counter = (props) => {
  const [count, setCount] = React.useState(0);
  const [post, setPost] = React.useState(null);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts/1")
      .then(res => {
        setPost({title: res.data.title, author: res.data.userId})
      })
  }, [])

  return (
    <div className="counter">
      <h3>{count}</h3>
      {post && <p>{post.title} | {post.author}</p>}
      <span>
        <button
          id="count-up"
          className="btn btnup"
          type="button"
          onClick={incrementCount}
        >
          Count Up
        </button>
        <button id="count-down" type="button" onClick={decrementCount}>
          Count Down
        </button>
        <button id="zero-count" type="button" onClick={resetCount}>
          Zero
        </button>
      </span>
    </div>
  );
};

export default Counter;

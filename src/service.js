import axios from 'axios';

export const fetchPosts = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const posts = res.data;
    return posts;
}

export const fetchSinglePost = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
  const post = res.data;
  return post;
};
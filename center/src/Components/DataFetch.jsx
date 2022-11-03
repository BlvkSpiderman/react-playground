import React from "react";
import axios from 'axios';
import {useState, useEffect} from 'react';

const client = axios.create({
    baseURL : "https://jsonplaceholder.typicode.com/posts/1"

});

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export const FetchData = () => {
  const [post, setPost] = useState(null);

  var postContent = (
    <div>
        <p>NO posts yet</p>
    </div>
);

  //* Getting the data
  useEffect(() => {
    client.get('').then((response) => {
      setPost(response.data);
    });
  }, []);

  //* Creating new data
  function createPost() {
    axios
      .post(baseURL, {
        title: "Hello World!",
        body: "This is a new post."
      })
      .then((response) => {
        setPost(response.data);
      })
      .then(
        postContent = (
            <div>
        <h1>{post.title}</h1>
      <p>{post.body}</p>
            </div>
        )
      );
  }
  
  //* Updating the post
  function updatePost() {
    axios
      .put(`${baseURL}/1`, {
        title: "Hello World!",
        body: "This is an updated post."
      })
      .then((response) => {
        setPost(response.data);
      })
      .then(
        postContent = (
            <div>
        <h1>{post.title}</h1>
      <p>{post.body}</p>
            </div>
        )
      );
  }

  //* Deleting the post
  async function deletePost() {
    await axios.delete("/1");
    alert("Post deleted!");
    setPost(null);
  }




  return (
    <div className="post-area">
        {postContent}
        <div className="buttons-post">
            <button onClick={() => createPost()}>Create Post</button>
            <button onClick={() => updatePost()}>Update Post</button>
            <button onClick={() => deletePost()}>Delete Post</button>
        </div>
    </div>
  );
}


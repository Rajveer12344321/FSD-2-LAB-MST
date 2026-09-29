import { useState } from "react";
import "./App.css";

const MAX_LENGTH = 100;

function App() {
  // Single state variable for the post text
  const [post, setPost] = useState("");

  // Derived values (no extra state)
  const characterCount = post.length;
  const limitExceeded = characterCount > MAX_LENGTH;
  const isEmpty = post.trim() === "";
  const isPostDisabled = isEmpty || limitExceeded;

  // Controlled component: onChange updates state
  const handleChange = (e) => {
    setPost(e.target.value);
  };

  const handlePost = () => {
    if (isPostDisabled) return;
    alert("Post submitted successfully!");
    setPost("");
  };

  return (
    <div className="container">
      <div className="post-box">
        <h1>Post Box</h1>

        <textarea
          className="post-textarea"
          value={post}
          onChange={handleChange}
          placeholder="What's on your mind?"
          rows="5"
        />

        <p className="counter">
          {characterCount} / {MAX_LENGTH}
        </p>

        {limitExceeded && <p className="error">Limit exceeded</p>}

        <button
          className="post-button"
          onClick={handlePost}
          disabled={isPostDisabled}
        >
          Post
        </button>
      </div>
    </div>
  );
}

export default App;

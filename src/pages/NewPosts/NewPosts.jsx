import { useState } from "react";
import * as postsAPI from "../../utilities/posts-api";
import { useNavigate, Link } from "react-router-dom";

export default function NewPosts({ setPosts, posts }) {
  const [formData, setFormData] = useState({
    content: "",
    image: "",
  });

  const navigate = useNavigate();

  function handleChange(evt) {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
    });
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    const post = await postsAPI.createPost(formData);
    setPosts([post, ...posts])
    navigate("/posts")
  }

  return (
    <div>
      <h1>Add a Post!</h1>
      <form onSubmit={handleSubmit}>
        <textarea 
          onChange={handleChange}
          name="title"
          placeholder="Enter a title."
          value={formData.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Enter your content."
          value={formData.content}
        />
        <input
          onChange={handleChange}
          type="url"
          name="image"
          value={formData.image}
          placeholder="Paste image URL here."
        />
        <button type="submit">Create Post!</button>
      </form>
      <Link to={"/"}>
        Go Back
      </Link>
    </div>
  );
}

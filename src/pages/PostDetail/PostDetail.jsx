import * as postsAPI from "../../utilities/posts-api";
import { useState, useEffect } from "react";
import PostCard from "../../components/PostCard/PostCard";
import { useParams, useNavigate } from "react-router-dom";
import NewPosts from "../../pages/NewPosts/NewPosts";

export default function PostDetail({ posts, setPosts }) {
  const [showForm, setShowForm] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const post = posts.find((p) => p._id === id);

  async function handleDelete() {
    const posts = await postsAPI.deletePost(post._id);
    setPosts(posts);
    navigate("/");
  }

  if (!post) return null;

  return (
    <>
      {showForm ? (
        <NewPosts post={post} setPosts={setPosts} />
      ) : (
        <div>
          <h1>PostDetail</h1>
          <p> {post.content} </p>
          <button onClick={() => setShowForm(true)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </>
  );
}

import { useState } from 'react';
import * as postsAPI from '../../utilities/posts-api';
import { useNavigate, Link } from 'react-router-dom';

export default function NewPosts({ setPosts, posts, post }) {
  const [formData, setFormData] = useState({
    content: post ? post.content : '',
    // image: post.image ? post.image : '',
  })

  const navigate = useNavigate();

  function handleChange(evt) {
    setFormData({
      ...formData, [evt.target.name]: evt.target.value
    })
  }
    console.log(formData)
  
    function handleSubmit(evt) {
      evt.preventDefault();
      post ? updatePost() : addPost()
    }

  async function addPost() {
    const post = await postsAPI.createPost(formData)
  }
  
  async function updatePost() {
    const updatePost = await postsAPI.update(formData, post._id)
    const updated = posts.map(p => p._id === updatePost._id ? updatePost : p)
    setPosts(updated)
    navigate('../')
  }

  const hello = () => console.log('hello')

  return (

    <div>
      <h1>NewPosts</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" name="content" value={formData.content} />
        <input type="submit" />
      </form>
      <Link to={"/"} onClick={hello}>Go Back</Link>
    </div>
  );
}

import { useState } from 'react';
import * as postsAPI from '../../utilities/posts-api';

export default function NewPosts({ setPost }) {
  const [formData, setFormData] = useState({
    content: '',
    image: '',
  })

  function handleChange(evt) {
    setFormData({
      ...formData, [evt.target.name]: evt.target.value
    })
  }
    console.log(formData)

  async function handleSubmit(evt) {
    evt.preventDefault();
    const post = await postsAPI.createPost(formData)

  }

  return (
    <div>
      <h1>NewPosts</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" name="content" value={formData.content} />
        <input type="submit" />
      </form>
    </div>
  );
}

import * as postsAPI from '../../utilities/posts-api';
import { useState, useEffect } from 'react';
import PostCard from '../../components/PostCard/PostCard';
import { useParams } from 'react-router-dom';
import NewPosts from '../../pages/NewPosts/NewPosts';


export default function PostDetail ({ posts, setPosts }) {
    const [showForm, setShowForm] = useState(false)
    const { id } = useParams()
    const post = posts.find(p => p._id === id )
    return (
      <>
      {
        showForm 
           ? <NewPosts post= {post} setPosts={setPosts}  /> 
           : <div>
                <h1>PostDetail</h1>
                <p> { post.content } </p>
                <button onClick= {() => setShowForm(true) }>Edit</button>
                <button>Delete</button>
            </div>

        }
      </>
    );
  }
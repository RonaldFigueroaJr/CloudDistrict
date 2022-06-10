import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PostCard({ post }) {
  
  

  return (

    <Link to = {`/${post._id}`} >
        <div>
            <h1> { post.content } </h1>
        </div>
    </Link>
  );
}

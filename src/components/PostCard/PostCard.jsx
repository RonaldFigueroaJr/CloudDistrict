import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PostCard({ post }) {
  
  

  return (

    <Link to = {`/${post._id}`} class="pLists">
        <div>
            <h1 class="pLists"> { post.title } </h1>
        </div>
    </Link>
  );
}

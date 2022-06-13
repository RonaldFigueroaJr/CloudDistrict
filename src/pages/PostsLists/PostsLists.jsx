import * as postsAPI from '../../utilities/posts-api';
import { useState, useEffect } from 'react';
import PostCard from '../../components/PostCard/PostCard';


export default function PostsLists ({ posts }) {
    return (
      <>
        <h1>List of Posts</h1>
        {posts.map(p => <PostCard post={p} />) }
      </>
    );
  }
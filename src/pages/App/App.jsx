import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewPosts from '../NewPosts/NewPosts';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import PostsLists from '../../pages/PostsLists/PostsLists';
import PostDetail from '../../pages/PostDetail/PostDetail';
import * as postsAPI from '../../utilities/posts-api';
import './App.css';

function App() {
  const [user, setUser] = useState(getUser());
  const [posts, setPosts] = useState([])
  useEffect(() => {
    async function getAllPosts() {
      const allPosts = await postsAPI.getPosts()
      setPosts(allPosts)
    } 
    getAllPosts();
  }, [])
  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/" element={<PostsLists posts={posts} />} />
            <Route path="/NewPosts" element={<NewPosts setPosts={setPosts} posts={posts} />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
            <Route path="/:id" element={<PostDetail posts={posts} setPosts={setPosts} />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

export default App;

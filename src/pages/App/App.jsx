import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewPosts from '../NewPosts/NewPosts';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import PostsLists from '../../pages/PostsLists/PostsLists';
import './App.css';

function App() {
  const [user, setUser] = useState(getUser());
  const [posts, setPosts] = useState([])
  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/" element={<PostsLists />} />
            <Route path="/NewPosts" element={<NewPosts setPosts={setPosts} />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

export default App;

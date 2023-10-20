import './style.css';
import React from 'react';
import { Routes ,Route } from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import Home from './pages/Home';
import Chat from './pages/Chat';
import TaskBoardPage from './pages/TaskBoard';
import Layout from './pages/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="/chat" element={<Chat/>} />
          <Route path="/task-board" element={<TaskBoardPage/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

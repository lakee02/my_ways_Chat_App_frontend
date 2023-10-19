import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to My MERN App</h1>
      <div>
        <Link to="/chat">Chat Room</Link>
      </div>
      <div>
        <Link to="/task-board">Task Board</Link>
      </div>
    </div>
  );
}

export default Home;

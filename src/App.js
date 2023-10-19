import './style.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Chat from './pages/Chat';
import TaskBoardPage from './pages/TaskBoard';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/chat" component={Chat} />
        <Route path="/task-board" component={TaskBoardPage} />
      </Switch>
    </Router>
  );
}

export default App;

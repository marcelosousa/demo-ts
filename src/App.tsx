import React from 'react';
import './App.css';
import GitHubController from './components/GitHubController';
import Repositories from './components/Repositories';
import RepositoryHighlighted from './components/RepositoryHighlighted';
import RepositoryMostForks from './components/RepositoryMostForks';
import RepositoryMostStars from './components/RepositoryMostStars';
import Title from './components/Title/Title';
import { Large } from './models/large';

function App() {
  const v: Large | undefined = undefined;
  console.log(v);

  return (
    <div className="App">
      <GitHubController>
        <Title>Query Repositories</Title>
        {
          <>
            <RepositoryMostStars />
            <RepositoryHighlighted />
            <RepositoryMostForks />
            <Repositories />
          </>
        }
      </GitHubController>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import GitHubController from './components/GitHubController';
import Repositories from './components/Repositories';
import RepositoryHighlighted from './components/RepositoryHighlighted';
import RepositoryMostForks from './components/RepositoryMostForks';
import RepositoryMostStars from './components/RepositoryMostStars';
import Title from './components/Title/Title';
import { Repository } from './models/repository';

function fn(a: number, b: Repository) {

}

function App() {
  const a = 0;
  const repo: Repository = {
    id: 1,
    full_name: 'full name',
    name: 'name',
    url: 'url',
  };

  fn(a, repo);

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

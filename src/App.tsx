import React from 'react';
import './App.css';
import GitHubController from './components/GitHubController';
import Repositories from './components/Repositories';
import RepositoryHighlighted from './components/RepositoryHighlighted';
import RepositoryMostForks from './components/RepositoryMostForks';
import RepositoryMostStars from './components/RepositoryMostStars';
import Title from './components/Title/Title';
import { repos } from './models';
import { repos2 } from './models2';
import { Repository as Repository2 } from './models/repository';

function App() {
  const v: repos.Repository = {
    id: 1,
    name: "name",
    full_name: "full name",
    url: "url",
  };
  const v2: repos2.Repository = v;
  const v3: Repository2 = v2;

  console.log(v);
  console.log(v2);
  console.log(v3);

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

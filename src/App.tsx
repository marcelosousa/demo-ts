import React from 'react';
import './App.css';
import GitHubController from './components/GitHubController';
import Repositories from './components/Repositories';
import RepositoryHighlighted from './components/RepositoryHighlighted';
import RepositoryMostForks from './components/RepositoryMostForks';
import RepositoryMostStars from './components/RepositoryMostStars';
import Title from './components/Title/Title';
import { Repository } from './models/repository';
import * as repos from './models/repository';

function App() {
  var local: Repository = {
    id: 1,
    name: "name",
    full_name: "full_name",
    url: "url"
  };
  var local2: repos.Repository = {
    id: 1,
    name: "name",
    full_name: "full_name",
    url: "url"
  };

  console.log(local);
  console.log(local2);

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

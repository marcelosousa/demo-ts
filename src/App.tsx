import React from 'react';
import './App.css';
import GitHubController from './components/GitHubController';
import Repositories from './components/Repositories';
import RepositoryHighlighted from './components/RepositoryHighlighted';
import RepositoryMostForks from './components/RepositoryMostForks';
import RepositoryMostStars from './components/RepositoryMostStars';
import Title from './components/Title/Title';
import * as repos from './models/repository';

function testForOfLoop() {
  for (const value of repos.MY_LIST) {
    repos.myConsumer(value);
  }
}

function testForInLoop() {
  for (const value in repos.MY_LIST) {
    repos.myConsumer(value);
  }
}

function testForEachLoop() {
  for (let value = repos.myInit(); repos.myCondition(value); value = repos.myIncrement(value)) {
    repos.myConsumerInt(value);
  }
}

function App() {
  testForOfLoop();
  testForInLoop();
  testForEachLoop();

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

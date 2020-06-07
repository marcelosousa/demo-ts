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
  const v: Large = {
    i1: 1,
    i2: 2,
    i3: 3,
    i4: 4,
    i5: 5,
    i6: 6,
    i7: 7,
    i8: 8,
    i9: 9,
    i10: 10,
    i11: 11,
    i12: 12,
    i13: 13,
    n: 1000,
    i14: 14,
    i15: 15,
    i16: 16,
    i17: 17,
    i18: 18,
    i19: 19,
    i20: 20
  };
  console.log(v);
  if (v !== undefined) {
    console.log(v.i12);
    console.log(v.n);
  }

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

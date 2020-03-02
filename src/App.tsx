import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import GitHubContext from './components/GitHubContext';
import Loading from './components/Loading';
import Repositories from './components/Repositories';
import Title from './components/Title/Title';
import { Repositoyr } from './models/repository';

function App() {
  const githubContext = useContext(GitHubContext);
  const [repositories, setRepositories] = useState<Repositoyr[] | null>(null);

  useEffect(
    () => {
      (async () => {
        const repositories = await githubContext.apiClient.get('users/ferreiratiago/repos');
        setRepositories(repositories);
      })();
    },
    [githubContext],
  );

  return (
    <div className="App">
      <Title>Query Repositories</Title>
      {
        repositories === null
          ? <Loading />
          : <Repositories list={repositories} />
      }
    </div>
  );
}

export default App;

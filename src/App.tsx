import React, { useCallback, useMemo, useState } from 'react';
import './App.css';
import APIClient from './components/APIClient';
import Button from './components/Button';
import Loading from './components/Loading';
import Repositories from './components/Repositories';
import Title from './components/Title/Title';
import { Repositoyr } from './models/repository';

function App() {
  const githubClient = useMemo(() => new APIClient('https://api.github.com'), []);
  const [repositories, setRepositories] = useState<Repositoyr[]>([]);

  const getRepositories = useCallback(
    async () => {
      setRepositories(await githubClient.get('users/ferreiratiago/repos'));
    },
    [githubClient],
  );

  return (
    <div className="App">
      <Title>Query Repositories</Title>
      <Button onClick={getRepositories}>Get Repos</Button>
      {
        repositories.length === 0
          ? <Loading />
          : <Repositories list={repositories} />
      }
      <Button onClick={getRepositories}>Refresh</Button>
    </div>
  );
}

export default App;

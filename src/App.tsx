import React, { useCallback, useMemo, useState } from 'react';
import './App.css';
import APIClient from './components/APIClient';
import Button from './components/Button';
import Loading from './components/Loading';
import Repositories from './components/Repositories';
import RepositoryHighlighted from './components/RepositoryHighlighted';
import RepositoryMostForks from './components/RepositoryMostForks';
import RepositoryMostStars from './components/RepositoryMostStars';
import Title from './components/Title/Title';
import { Repository } from './models/repository';

function App() {
  const githubClient = useMemo(() => new APIClient('https://api.github.com'), []);
  const [repositories, setRepositories] = useState<Repository[]>([]);

  const getRepositories = useCallback(
    async () => {
      const repositories = await githubClient.get('users/ferreiratiago/repos');
      const mappedRepositories = repositories.map((repository: any) => ({
        id: repository.id,
        name: repository.name,
        full_name: repository.full_name,
        html_url: repository.html_url,
        api_url: repository.url,
      })) as Repository[];
      setRepositories(mappedRepositories);
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
          : (
            <>
              <RepositoryMostStars repo={repositories[0]} />
              <RepositoryHighlighted repo={repositories[0]} />
              <RepositoryMostForks repo={repositories[0]} />
              <Repositories list={repositories} />
            </>
          )
      }
      <Button onClick={getRepositories}>Refresh</Button>
    </div>
  );
}

export default App;

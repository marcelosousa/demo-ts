import React, { useContext } from 'react';
import GitHubContext from '../GitHubContext';
import RepositoryAPIDetails from '../RepositoryAPIDetails';
import Title from '../Title';

export default React.memo(function RepositoryMostForks() {
    const gitHubContext = useContext(GitHubContext);
    const repo = gitHubContext.repoWithMostForks;

    return (
        <>
            <Title>Repository with most forks</Title>
            <div>
                <h3>Details</h3>
                <p>Name: {repo.name}</p>
                <p>Full name: {repo.full_name}</p>
                <RepositoryAPIDetails name={repo.name} url={repo.url} />
                <p><a href={repo.url}>More info</a></p>
            </div>
        </>
    );
});
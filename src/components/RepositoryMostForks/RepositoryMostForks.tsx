import React, { useContext } from 'react';
import GitHubContext from '../GitHubContext';
import RepositoryAPIDetails from '../RepositoryAPIDetails';
import Title from '../Title';

export default React.memo(function RepositoryMostForks() {
    const { repos } = useContext(GitHubContext);
    const repo = repos.withMostForks;

    if (repo === undefined) {
        return null;
    }

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
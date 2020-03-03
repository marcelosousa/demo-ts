import React, { useContext } from 'react';
import GitHubContext from '../GitHubContext';
import RepositoryAPIDetails from '../RepositoryAPIDetails';
import Title from '../Title';

export default React.memo(function RepositoryMostStars() {
    const gitHubContext = useContext(GitHubContext);
    const repo = gitHubContext.repoWithMostStars;

    return (
        <>
            <Title>Repository with most stars</Title>
            <a href={repo.url}>{repo.name}</a>
            <div>
                <h3>Details</h3>
                <p>Name: {repo.name}</p>
                <p>Full name: {repo.full_name}</p>
                <RepositoryAPIDetails name={repo.name} url={repo.url} />
            </div>
        </>
    );
});
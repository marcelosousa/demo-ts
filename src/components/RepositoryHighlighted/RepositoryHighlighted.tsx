import React, { useContext } from 'react';
import GitHubContext from '../GitHubContext';
import Title from '../Title';

export default React.memo(function RepositoryHighlighted() {
    const gitHubContext = useContext(GitHubContext);
    const repo = gitHubContext.repoHighlighted

    return (
        <>
            <Title>Highligted</Title>
            <p>Name: {repo && repo.name}</p>
            <p>Full name: {repo && repo.full_name}</p>
            <p><a href={repo && repo.url}>More info</a></p>
        </>
    );
});
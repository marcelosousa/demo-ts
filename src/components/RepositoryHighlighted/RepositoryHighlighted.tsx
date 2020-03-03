import React, { useContext } from 'react';
import GitHubContext from '../GitHubContext';
import Title from '../Title';

export default React.memo(function RepositoryHighlighted() {
    const { repos } = useContext(GitHubContext);
    const repo = repos.highlighted

    if (repo === undefined) {
        return (
            <>
                <Title>Highligted</Title>
                <p>Name: -</p>
                <p>Full name: -</p>
                <p>-</p>
            </>
        )
    }

    return (
        <>
            <Title>Highligted</Title>
            <p>Name: {repo.name}</p>
            <p>Full name: {repo.full_name}</p>
            <p><a href={repo.url}>More info</a></p>
        </>
    )
});
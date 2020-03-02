import React from 'react';
import { Repository } from '../../models/repository';
import RepositoryAPIDetails from '../RepositoryAPIDetails';
import Title from '../Title';

export default React.memo(function RepositoryHighlighted({ repo }: { repo: Repository }) {
    return (
        <>
            <Title>Highligted</Title>
            <p>Name: {repo.name}</p>
            <p>Full name: {repo.full_name}</p>
            <RepositoryAPIDetails name={repo.name} htmlUrl={repo.html_url} apiUrl={repo.api_url} />
            <p><a href={repo.html_url}>More info</a></p>
        </>
    );
});
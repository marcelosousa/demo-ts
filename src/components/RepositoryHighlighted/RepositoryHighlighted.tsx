import React from 'react';
import { Repository } from '../../models/repository';
import Title from '../Title';

interface RepositoryHighlighted {
    repo: Repository;
}

export default React.memo(function RepositoryHighlighted({ repo }: RepositoryHighlighted) {
    return (
        <>
            <Title>Highligted</Title>
            <p>Name: {repo.name}</p>
            <p>Full name: {repo.full_name}</p>
            <p><a href={repo.url}>More info</a></p>
        </>
    );
});
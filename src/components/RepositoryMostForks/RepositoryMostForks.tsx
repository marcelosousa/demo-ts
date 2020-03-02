import React from 'react';
import { Repository } from '../../models/repository';
import RepositoryAPIDetails from '../RepositoryAPIDetails';
import Title from '../Title';

interface RepositoryMostForks {
    repo: Repository;
}

export default React.memo(function RepositoryMostForks({ repo }: RepositoryMostForks) {
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
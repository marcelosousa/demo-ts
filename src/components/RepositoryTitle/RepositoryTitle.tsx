import React from 'react';
import { Repository } from '../../models/repository';

interface RepositoryTitle {
    repo: Repository;
}

export default React.memo(function RepositoryTitle({ repo }: RepositoryTitle) {
    return (
        <>
            <a href={repo.uri}><h3>{repo.name}</h3></a>
        </>
    );
});
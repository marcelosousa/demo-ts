import React from 'react';
import { Repository } from '../../models/repository';

interface RepositoryTitle {
    repo: Repository;
}

class RepositoryTitleImpl implements RepositoryTitle {
    repo: Repository = {
        id: 1,
        name: "name",
        full_name: "full name",
        url: "url",
    };
}

export default React.memo(function RepositoryTitle({ repo }: RepositoryTitle) {
    const local: RepositoryTitleImpl = new RepositoryTitleImpl();

    return (
        <>
            <a href={repo.url}><h3>{repo.name}</h3></a>
        </>
    );
});
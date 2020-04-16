import React from 'react';
import { Repository } from '../../models/repository';

interface RepositoryTitle {
    repo: Repository;
}

class RepositoryTitleImpl implements RepositoryTitle {
    id: number;
    repo: Repository = {
        id: this.id,
        name: "name",
        full_name: "full name",
        url: "url",
    };    

    constructor (id: number) {
        this.id = id;
    }
}

export default React.memo(function RepositoryTitle({ repo }: RepositoryTitle) {
    const local: RepositoryTitleImpl = new RepositoryTitleImpl(1);

    return (
        <>
            <a href={repo.url}><h3>{repo.name}</h3></a>
        </>
    );
});
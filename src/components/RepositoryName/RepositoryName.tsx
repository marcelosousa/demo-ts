import React from 'react';
import { Repository } from '../../models/repository';

interface RepositoryName {
    content: Repository;
}

export default React.memo(function RepositoryName({ content }: RepositoryName) {
    return (
        <p>{content.name}</p>
    );
});
import React from 'react';
import { Repositoyr } from '../../models/repository';

interface RepositoryName {
    content: Repositoyr;
}

export default React.memo(function RepositoryName({ content }: RepositoryName) {
    return (
        <p>{content.name}</p>
    );
});
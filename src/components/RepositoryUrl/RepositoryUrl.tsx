import React from 'react';
import { Repositoyr } from '../../models/repository';

interface RepositoryUrl {
    content: Repositoyr;
}

export default React.memo(function RepositoryUrl({ content }: RepositoryUrl) {
    return (
        <a href={content.url}>{content.full_name}</a>
    );
});
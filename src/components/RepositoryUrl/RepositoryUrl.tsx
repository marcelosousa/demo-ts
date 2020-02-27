import React from 'react';
import { Repository } from '../../models/repository';

interface RepositoryUrl {
    content: Repository;
}

export default React.memo(function RepositoryUrl({ content }: RepositoryUrl) {
    return (
        <a href={content.url}>{content.full_name}</a>
    );
});
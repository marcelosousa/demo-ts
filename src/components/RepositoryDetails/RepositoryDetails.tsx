import React from 'react';
import { Repositoyr } from '../../models/repository';
import RepositoryName from '../RepositoryName';
import RepositoryUrl from '../RepositoryUrl';
import './RepositoryDetails.css';

export default React.memo(function RepositoryDetails({ content }: { content: Repositoyr }) {
    return (
        <div className="repository">
            <RepositoryName content={content} />
            <RepositoryUrl content={content} />
        </div>
    );
});
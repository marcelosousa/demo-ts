import React from 'react';
import { Repository } from '../../models/repository';
import RepositoryDetails from '../RepositoryDetails';

interface RepositoriesList {
    list: Repository[];
}

export default React.memo(function RepositoriesList({ list }: RepositoriesList) {
    return (
        <div>
            {
                list.map(repository => {
                    return (
                        <RepositoryDetails content={repository} />
                    )
                })
            }
        </div>
    );
});
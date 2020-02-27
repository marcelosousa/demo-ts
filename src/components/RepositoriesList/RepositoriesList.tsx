import React from 'react';
import { Repositoyr } from '../../models/repository';
import RepositoryDetails from '../RepositoryDetails';

interface RepositoriesList {
    list: Repositoyr[];
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
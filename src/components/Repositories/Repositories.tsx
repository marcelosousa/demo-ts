import React from 'react';
import { Owner } from '../../models/owner';
import { Repositoyr } from '../../models/repository';
import RepositoryDetails from '../RepositoryDetails';
import Title from '../Title';

interface Repositories {
    list: Repositoyr[];
    owner?: Owner;
}

export default React.memo(function Repositories({ list }: Repositories) {
    return (
        <>
            <Title>List of Repositories</Title>
            <div>
                {
                    list.map(repository => {
                        return (
                            <>
                                <h2>{repository.name}</h2>
                                <RepositoryDetails repo={repository} />
                            </>
                        )
                    })
                }
            </div>
        </>
    );
});
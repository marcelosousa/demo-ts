import React from 'react';
import { Repositoyr } from '../../models/repository';
import RepositoryDetails from '../RepositoryDetails';
import Title from '../Title';

interface Repositories {
    list: Repositoyr[];
}

export default React.memo(function Repositories({ list }: Repositories) {
    return (
        <>
            <Title>Repositories</Title>
            <div>
                {
                    list.map(repository => {
                        return (
                            <RepositoryDetails content={repository} />
                        )
                    })
                }
            </div>
        </>
    );
});
import React from 'react';
import { Repository } from '../../models/repository';
import RepositoryDetails from '../RepositoryDetails';
import Title from '../Title';

interface Repositories {
    list: Repository[];
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
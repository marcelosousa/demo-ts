import React from 'react';
import { Repository } from '../../models/repository';
import RepositoryDetails from '../RepositoryDetails';
import RepositoryTitle from '../RepositoryTitle';
import Title from '../Title';

interface Repositories {
    list: Repository[];
}

export default React.memo(function Repositories({ list }: Repositories) {
    return (
        <>
            <Title>All Repositories</Title>
            <div>
                {
                    list.map(repository => {
                        return (
                            <>
                                <RepositoryTitle repo={repository} />
                                <RepositoryDetails repo={repository} />
                            </>
                        )
                    })
                }
            </div>
        </>
    );
});
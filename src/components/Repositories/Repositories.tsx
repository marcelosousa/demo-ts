import React from 'react';
import { Repository } from '../../models/repository';
import RepositoriesList from '../RepositoriesList/RepositoriesList';
import Title from '../Title';

interface Repositories {
    list: Repository[];
}

export default React.memo(function Repositories({ l }: Repositories) {
    return (
        <>
            <Title>Repositories</Title>
            <RepositoriesList list={l} />
        </>
    );
});

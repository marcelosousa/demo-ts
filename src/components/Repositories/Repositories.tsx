import React from 'react';
import { Repositoyr } from '../../models/repository';
import RepositoriesList from '../RepositoriesList/RepositoriesList';
import Title from '../Title';

interface Repositories {
    list: Repositoyr[];
}

export default React.memo(function Repositories({ list }: Repositories) {
    return (
        <>
            <Title>Repositories</Title>
            <RepositoriesList list={list} />
        </>
    );
});
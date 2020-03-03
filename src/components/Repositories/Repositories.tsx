import React, { useContext } from 'react';
import GitHubContext from '../GitHubContext';
import RepositoryDetails from '../RepositoryDetails';
import RepositoryTitle from '../RepositoryTitle';
import Title from '../Title';

export default React.memo(function Repositories() {
    const { repos } = useContext(GitHubContext);

    return (
        <>
            <Title>All Repositories</Title>
            <div>
                {
                    repos.all.map(repository => {
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
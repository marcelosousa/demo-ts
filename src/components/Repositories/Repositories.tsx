import React, { useContext } from 'react';
import { buildRepoAuthor, buildRepoTitle } from '../../utils';
import GitHubContext from '../GitHubContext';
import RepositoryDetails from '../RepositoryDetails';
import Title from '../Title';

export default React.memo(function Repositories() {
    const gitHubContext = useContext(GitHubContext);

    return (
        <>
            <Title>All Repositories</Title>
            <div>
                {
                    gitHubContext.allRepos.map(repository => {
                        return (
                            <>
                                <>{buildRepoTitle(repository.info)}</>
                                <>{buildRepoAuthor(repository.info)}</>
                                <RepositoryDetails repo={repository} />
                            </>
                        )
                    })
                }
            </div>
        </>
    );
});
import React, { ReactNode, useEffect, useMemo, useState } from 'react';
import { Repository } from '../models/repository';
import APIClient from './APIClient';
import GitHubContext from './GitHubContext';
import Loading from './Loading';

export default function GitHubController({ children }: { children: ReactNode }) {
    const gitHubClient = useMemo(() => new APIClient('https://api.github.com'), []);
    const [allRepos, setAllRepos] = useState<Repository[]>([]);
    const [repoWithMostForks, setRepoWithMostForks] = useState<Repository>();
    const [repoWithMostStars, setRepoWithMostStars] = useState<Repository>();
    const [repoHighlighted, setRepoHighlighted] = useState<Repository>();

    useEffect(
        () => {
            (async () => {
                const repos = await gitHubClient.get('users/ferreiratiago/repos') as Repository[];
                setRepoWithMostForks(repos[0]);
                setRepoWithMostStars(repos[0]);
                setAllRepos(repos);
            })();
        },
        [gitHubClient],
    );

    const value = {
        repos: {
            all: allRepos,
            withMostForks: repoWithMostForks,
            withMostStars: repoWithMostStars,
            highlighted: repoHighlighted,
            setHighlighted: setRepoHighlighted,
        }
    }

    return (
        allRepos.length === 0
            ? <Loading />
            : <GitHubContext.Provider value={value}>{children}</GitHubContext.Provider>
    );
}
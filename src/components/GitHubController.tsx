import React, { ReactNode, useEffect, useMemo, useState } from 'react';
import { Repository } from '../models/repository';
import { UserInfo } from '../models/user';
import APIClient from './APIClient';
import GitHubContext from './GitHubContext';
import Loading from './Loading';

export default function GitHubController({ children }: { children: ReactNode }) {
    const gitHubClient = useMemo(() => new APIClient('https://api.github.com'), []);
    const [userInfo, setUserInfo] = useState<UserInfo>();
    const [allRepos, setAllRepos] = useState<Repository[]>();
    const [repoWithMostForks, setRepoWithMostForks] = useState<Repository>();
    const [repoWithMostStars, setRepoWithMostStars] = useState<Repository>();
    const [repoHighlighted, setRepoHighlighted] = useState<Repository>();

    useEffect(
        () => {
            (async () => {
                const userInfo = await gitHubClient.get('users/ferreiratiago') as UserInfo;
                const repos = await gitHubClient.get('users/ferreiratiago/repos') as Repository[];
                setRepoWithMostForks(repos[0]);
                setRepoWithMostStars(repos[0]);
                setAllRepos(repos);
                setUserInfo(userInfo);
            })();
        },
        [gitHubClient],
    );

    const value = {
        userInfo: userInfo!,
        allRepos: allRepos!,
        repoWithMostForks: repoWithMostForks!,
        repoWithMostStars: repoWithMostStars!,
        repoHighlighted: repoHighlighted!,
        setRepoHighlighted,
    }

    console.log('value', value)

    return (
        allRepos === undefined
            ? <Loading />
            : <GitHubContext.Provider value={value}>{children}</GitHubContext.Provider>
    );
}
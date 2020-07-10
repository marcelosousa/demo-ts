import React from 'react';
import { Repository } from '../models/repository';
import { UserInfo } from '../models/user';

interface GitHubContext {
    userInfo: UserInfo;
    allRepos: Repository[];
    repoWithMostForks: Repository;
    repoWithMostStars: Repository;
    repoHighlighted: Repository;
    setRepoHighlighted: (repo: Repository | undefined) => void;
}

export default React.createContext<GitHubContext>(null as unknown as GitHubContext);
import React from 'react';
import { Repository } from '../models/repository';

interface GitHubContext {
    allRepos: Repository[];
    repoWithMostForks: Repository;
    repoWithMostStars: Repository;
    repoHighlighted: Repository;
    setRepoHighlighted: (repo: Repository | undefined) => void;
}

export default React.createContext<GitHubContext>(null as unknown as GitHubContext);
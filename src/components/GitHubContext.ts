import React from 'react';
import { Repository } from '../models/repository';

interface RepoContext {
    all: Repository[];
    withMostForks?: Repository;
    withMostStars?: Repository;
    highlighted?: Repository;
    setHighlighted: (repo: Repository | undefined) => void;
}

interface GitHubContext {
    repos: RepoContext
}

export default React.createContext<GitHubContext>(null as unknown as GitHubContext);
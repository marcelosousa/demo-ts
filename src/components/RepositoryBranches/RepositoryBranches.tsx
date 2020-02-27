import React, { useEffect, useMemo, useState } from 'react';
import APIClient from '../APIClient';
import './RepositoryBranches.css';

interface RepositoryBranches {
    repo: string;
}

export default React.memo(function RepositoryBranches({ repo }: RepositoryBranches) {
    const githubClient = useMemo(() => new APIClient('https://api.github.com'), []);
    const [branches, setBranches] = useState([]);

    useEffect(
        () => {
            (async () => {
                setBranches(await githubClient.get(`repos/ferreiratiago/${repo}/branches`));
            })()
        },
        [repo, githubClient],
    );

    return (
        branches && (
            <div>
                {
                    branches.map(branch => {
                        return (
                            <div className="branch">{branch['name']}</div>
                        )
                    })
                }
            </div>
        )
    );
});
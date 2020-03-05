import React, { CSSProperties, useCallback, useContext, useState } from 'react';
import * as repos from '../../models/repository';
import { Repository2 } from '../../models/repository2';
import GitHubContext from '../GitHubContext';

export var myRepo: Repository2

export default React.memo(function RepositoryDetails({ repo }: { repo: repos.Repository }) {
    const gitHubContext = useContext(GitHubContext);
    const [style, setStyle] = useState<CSSProperties>({});

    const addHighlight = useCallback(
        () => {
            gitHubContext.setRepoHighlighted(repo);
            setStyle({
                backgroundColor: 'yellow',
            });
        },
        [repo, gitHubContext],
    );

    const clearHighlight = useCallback(
        () => {
            gitHubContext.setRepoHighlighted(undefined);
            setStyle({});
        },
        [gitHubContext],
    );

    return (
        <div style={style} onMouseEnter={addHighlight} onMouseLeave={clearHighlight}>
            <p>Name: {repo.full_name}</p>
            <a href={repo.url}>More info</a>
        </div>
    );
});
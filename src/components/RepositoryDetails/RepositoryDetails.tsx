import React, { CSSProperties, useCallback, useContext, useState } from 'react';
import { Repository } from '../../models/repository';
import GitHubContext from '../GitHubContext';

export default React.memo(function RepositoryDetails({ repo }: { repo: Repository }) {
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
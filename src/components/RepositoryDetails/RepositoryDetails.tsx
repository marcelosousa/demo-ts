import React, { CSSProperties, useCallback, useState } from 'react';
import { Repositoyr } from '../../models/repository';

export default React.memo(function RepositoryDetails({ repo }: { repo: Repositoyr }) {
    const [style, setStyle] = useState<CSSProperties>({});

    const addHighlight = useCallback(
        () => {
            setStyle({
                backgroundColor: 'yellow',
            });
        },
        [],
    );

    const clearHighlight = useCallback(
        () => {
            setStyle({});
        },
        [],
    );

    return (
        <div style={style} onMouseEnter={addHighlight} onMouseLeave={clearHighlight}>
            <a href={repo.url}>{repo.full_name}</a>
            <p>Owner: {repo.owner.login}</p>
        </div>
    );
});
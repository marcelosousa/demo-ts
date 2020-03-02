import React, { CSSProperties, useCallback, useState } from 'react';
import { Repository } from '../../models/repository';

interface RepositoryDetails {
    repo: Repository;
}

export default React.memo(function RepositoryDetails({ repo }: RepositoryDetails) {
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
            <p>Name: {repo.full_name}</p>
            <a href={repo.html_url}>More info</a>
        </div>
    );
});
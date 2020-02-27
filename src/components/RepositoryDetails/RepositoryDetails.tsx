import React, { useCallback, useState, CSSProperties } from 'react';
import { Repositoyr } from '../../models/repository';
import RepositoryName from '../RepositoryName';
import RepositoryUrl from '../RepositoryUrl';
import RepositoryBranches from '../RepositoryBranches';

interface RepositoryDetails {
    content: Repositoyr;
}

export default React.memo(function RepositoryDetails({ content }: RepositoryDetails) {
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
            setStyle({
                backgroundColor: 'yellow',
            });
        },
        [],
    );

    return (
        <div style={style} onMouseEnter={addHighlight} onMouseLeave={clearHighlight}>
            <RepositoryName content={content} />
            <RepositoryUrl content={content} />
            <RepositoryBranches repo={content.name} />
        </div>
    );
});
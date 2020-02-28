import React, { CSSProperties, useCallback, useState } from 'react';
import { Repositoyr } from '../../models/repository';

export default React.memo(function RepositoryDetails({ content }: { content: Repositoyr }) {
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
            <p>{content.name}</p>
            <a href={content.url}>{content.full_name}</a>
        </div>
    );
});
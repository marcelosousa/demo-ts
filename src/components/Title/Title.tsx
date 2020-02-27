import React from 'react';
import './Title.css';

export default React.memo(function Title({ children }: { children: string }) {
    return (
        <h1 className="title">
            {children}
        </h1>
    );
});
import React from 'react';
import './Button.css';
import { callAsync, MY_ARRAY } from '../../models/consts';

interface Button {
    children: string;
    onClick?: () => void;
}

async function callCallAsync() {
    const list = [
        "A",
        ...MY_ARRAY
    ];

    await callAsync.call(() => list);
}

export default React.memo(function Button({ children, onClick }: Button) {
    return (
        <button className="button" onClick={onClick}>
            {children}
        </button>
    )
});

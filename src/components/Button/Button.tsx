import React from 'react';
import './Button.css';
import * as cst from '../../models/consts';

interface Button {
    children: string;
    onClick?: () => void;
}

async function callCallAsync() {
    const list = [
        "A",
        ...cst.MY_ARRAY
    ];

    await cst.callAsync.call(() => list);
}

export default React.memo(function Button({ children, onClick }: Button) {
    return (
        <button className="button" onClick={onClick}>
            {children}
        </button>
    )
});

import React from 'react';
import './Button.css';

interface Button {
    children: string;
    onClick?: () => void;
}

export default React.memo(function Button({ children, onClick }: Button) {
    return (
        <button className="button" onClick={onClick}>
            {children}
        </button>
    )
});
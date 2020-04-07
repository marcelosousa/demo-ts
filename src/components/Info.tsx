import React from 'react';

interface Info {
    name: string;
}

function Info({ data: info }: { data: Info }) {
    return <p>{info.name}</p>;
}

export default Info;
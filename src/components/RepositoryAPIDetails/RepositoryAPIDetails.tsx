import React from 'react';

interface RepositoryAPIDetails {
    name: string;
    url: string;
}

export default React.memo(function RepositoryAPIDetails({ name, url }: RepositoryAPIDetails) {
    return (
        <>
            <h4>Repository API Details</h4>
            <p><a href={url}>{name}</a></p>
            <p>API url: {url}</p>
            <p>List of abilities with API</p>
            <ul>
                <li>Service query</li>
            </ul>
        </>
    );
});
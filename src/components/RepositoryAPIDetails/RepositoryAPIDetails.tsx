import React from 'react';

interface RepositoryAPIDetails {
    name: string;
    htmlUrl: string;
    apiUrl: string
}

export default React.memo(function RepositoryAPIDetails({ name, htmlUrl, apiUrl }: RepositoryAPIDetails) {
    return (
        <>
            <h4>Repository API Details</h4>
            <p><a href={htmlUrl}>{name}</a></p>
            <p><a href={apiUrl}>API url: {apiUrl}</a></p>
            <p>List of abilities with API</p>
            <ul>
                <li>Service query</li>
            </ul>
        </>
    );
});
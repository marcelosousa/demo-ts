import React from 'react';
import APIClient from './APIClient';

const GitHubContext = React.createContext({
    apiClient: new APIClient('https://api.github.com'),
});

export default GitHubContext;
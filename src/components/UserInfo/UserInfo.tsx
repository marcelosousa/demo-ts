import React, { useContext } from 'react';
import GitHubContext from '../GitHubContext';
import Title from '../Title';

export default React.memo(function UserInfo() {
    const gitHubContext = useContext(GitHubContext);

    return (
        gitHubContext.userInfo && (
            <>
                <Title>User Info</Title>
                <div>
                    {
                        Object.entries(gitHubContext.userInfo).map(([key, value]) => {
                            return <p key={key}><b>{key}</b> : {value}</p>;
                        })
                    }
                </div>
            </>
        )
    )
});
import React from 'react';

const TokenPage = () => {
    localStorage.setItem('d2-stats-auth', window.location);
    window.close();
    return (
        <p>If the page does not close automatically, you may do so now</p>
    );
};

export default TokenPage;

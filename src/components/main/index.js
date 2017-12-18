import React from 'react';

import profile from '../../../images/profile.jpg';

const Main = () => {
    return (
        <div className="container-main">
            <div><h1>Ram Goli</h1></div>
            <div className="divider"></div>
            <div className="profile-pic"><img src={profile} alt="profile-pic" /></div>
        </div>
    );
}

export default Main;

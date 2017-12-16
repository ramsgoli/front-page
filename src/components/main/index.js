import React from 'react';

import profilePic from '../../../images/profile.jpg';

const Main = () => {
    return (
        <div className="container-main">
            <h1>Ram Goli</h1>
            <div className="divider"></div>
            <div className="profile-pic"><img src={profilePic} alt="profile-pic" /></div>
        </div>
    );
}

export default Main;

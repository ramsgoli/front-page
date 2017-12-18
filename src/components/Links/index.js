import React from 'react';

import envelope from '../../../images/envelope.png';
import linkedin from '../../../images/linkedin.png';
import twitter from '../../../images/twitter.png';
import github from '../../../images/github.png';

const LinkContainer = () => {
    return (
        <div className="link-container">
           <a href="mailto:ramsgoli@gmail.com"><img src={envelope} alt="mail" /></a>
           <a href="http://linkedin.com/in/ramsgoli"><img src={linkedin} alt="linkedin" /></a>
           <a href="http://twitter.com/ramsgoli"><img src={twitter} alt="twitter" /></a>
           <a href="http://github.com/ramsgoli"><img src={github} alt="github" /></a>
        </div>
    );
}

export default LinkContainer;

import React from 'react';

import envelope from '../../../images/envelope.svg';
import linkedin from '../../../images/linkedin.svg';
import twitter from '../../../images/twitter.svg';
import github from '../../../images/github.svg';

const LinkContainer = () => {
    return (
        <div className="link-container">
           <a href="mailto:ramsgoli@gmail.com"><img src={envelope} alt="envelope" /></a>
           <a href="http://linkedin.com/in/ramsgoli"><img src={linkedin} alt="linkedin" /></a>
           <a href="http://twitter.com/ramsgoli"><img src={twitter} alt="twitter" /></a>
           <a href="http://github.com/ramsgoli"><img src={github} alt="github" /></a>
        </div>
    );
}

export default LinkContainer;

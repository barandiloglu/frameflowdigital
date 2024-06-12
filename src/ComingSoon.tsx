import React from 'react';
import AnimatedText from './AnimatedText';
import './css/AnimatedText.css';

import Logo from './assets/logoGif.gif'

const ComingSoon: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#353232]">
      <div className="text-center">
        <div className="gif-container">
          <img src={Logo} alt="Loading GIF" className=' size-32'/>
        </div>
        <h1 className="text-5xl font-bold mb-10 text-[#ffffeb]">
          Coming Soon<span className="ellipsis"></span>
        </h1>
        <h1 className="text-3xl font-bold text-[#ffffeb] flex-container">
          We provide <AnimatedText /> for businesses.
        </h1>
      </div>
    </div>
  );
};

export default ComingSoon;

import React from 'react';
import './css/AnimatedText.css';

const keywords = [
    'BRAND IDENTITY CREATION',
    'SEO ANALYSIS',
    'WEB DESIGN',
    'CUSTOM WEB APPLICATIONS',
    'MOBILE APPLICATION AND DESIGN',
    'LOGO DESIGN',
    'PHOTOGRAPHY',
    'VIDEOGRAPHY',
    'PROFESSIONAL EDITING',
    'SOCIAL MEDIA MANAGEMENT',
    'AD MANAGEMENT FOR CROSS PLATFORMS',
  ];

const AnimatedText: React.FC = () => {
  return (
    <div className="content__container">
      <ul className="content__container__list">
        {keywords.map((keyword, index) => (
          <li key={index} className="content__container__list__item">
            {keyword}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnimatedText;




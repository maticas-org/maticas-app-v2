import React from 'react';


interface BackgroundProps {
  children: React.ReactNode;
  topImage?: string;
  bottomImage?: string;
}

const Background: React.FC<BackgroundProps> = ({
  children,
  topImage = './assets/images/background_top.png',
  bottomImage = './assets/images/background_bottom.png',
}) => {
  return (
    <div style={{ backgroundColor: '#A9BF5A', width: '100vw', height: '100vh', overflow: 'auto', zIndex: -1 }}>
      <div style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
        <img src={topImage} alt="Top Decoration" style={{ width: '200px' }} />
      </div>
      <div style={{ position: 'absolute', bottom: 0, right: 0, zIndex: 0 }}>
        <img src={bottomImage} alt="Bottom Decoration" style={{ width: '200px' }} />
      </div>
      <div style={{ position: 'relative' }}>
        {children}
      </div>
    </div>
  );
};

export default Background;
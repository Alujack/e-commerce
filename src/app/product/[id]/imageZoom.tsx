import React, { useState } from 'react';

interface ImageZoomProps {
  src: string;
  alt: string;
}

const ImageZoom: React.FC<ImageZoomProps> = ({ src, alt }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [backgroundPosition, setBackgroundPosition] = useState('0% 0%');

  const handleMouseEnter = () => {
    setIsZoomed(true);
  };

  const handleMouseLeave = () => {
    setIsZoomed(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setBackgroundPosition(`${x}% ${y}%`);
  };

  return (
    <div
    className="p-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <img src={src} alt={alt} className="object-cover" />
      {isZoomed && (
        <div
          className="absolute top-[10%] left-[10%] min-w-[80%] min-h-[90%] border border-gray-200"
          style={{
            width: '500px', 
            height: '500px',
            backgroundImage: `url(${src})`,
            backgroundSize: '200%', 
            backgroundPosition: backgroundPosition,
            backgroundRepeat: 'no-repeat',
            pointerEvents: 'none'
          }}
        ></div>
      )}
    </div>
  );
};

export default ImageZoom;

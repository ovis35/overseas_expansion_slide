import { useState, useEffect } from 'react';

interface SlideImageProps {
  query: string;
  alt: string;
  className?: string;
}

export default function SlideImage({ query, alt, className = '' }: SlideImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState('');

  useEffect(() => {
    // Use Unsplash Source for reliable image loading
    // Format: https://source.unsplash.com/featured/?{query}
    const keywords = query.replace(/,/g, ',');
    const src = `https://source.unsplash.com/1600x900/?${encodeURIComponent(keywords)}`;
    setImgSrc(src);
    setIsLoaded(false);
  }, [query]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Placeholder / Loading state */}
      {!isLoaded && (
        <div className="absolute inset-0 img-placeholder" />
      )}

      {/* Actual Image with lazy loading */}
      <img
        src={imgSrc}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
}

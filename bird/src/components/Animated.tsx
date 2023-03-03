import React, { useState, useEffect } from "react";

const images = [
  {
    url: "https://images.unsplash.com/photo-1677697752978-2741925ea212?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    alt: "Image 1",
  },
  {
    url: "https://images.unsplash.com/photo-1677662375194-e5157a8e09b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    alt: "Image 2",
  },
  {
    url: "https://images.unsplash.com/photo-1677709678988-aab8a631fd68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    alt: "Image 3",
  },
  {
    url: "https://images.unsplash.com/photo-1677817019723-6691030e338c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    alt: "Image 4",
  },
];

function Animated() {
  const [showImage, setShowImage] = useState:any(false);
  const [image, setImage] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [showImage]);

  function handleClick() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
    setImage(randomImage);
    setShowImage(true);
  }

  return (
    <div>
      <button onClick={handleClick}>Show Random Image</button>
      {showImage && (
        <img
          src={image.url}
          alt={image.alt}
          style={{ animation: "fade-in-out 5s linear" }}
        />
      )}
      <style>
        {`
          @keyframes fade-in-out {
            0% {
              opacity: 0;
            }
            50% {
              opacity: 1;
            }
            100% {
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Animated;

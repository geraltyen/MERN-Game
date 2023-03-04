// import React, { useState, useEffect } from "react";




// const images = [
//   {
//     url: "https://images.unsplash.com/photo-1677697752978-2741925ea212?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
//     alt: "Image 1",
//   },
//   {
//     url: "https://images.unsplash.com/photo-1677662375194-e5157a8e09b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
//     alt: "Image 2",
//   },
//   {
//     url: "https://images.unsplash.com/photo-1677709678988-aab8a631fd68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
//     alt: "Image 3",
//   },
//   {
//     url: "https://images.unsplash.com/photo-1677817019723-6691030e338c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
//     alt: "Image 4",
//   },
// ];

// function Animated() {
//   const [showImage, setShowImage] = useState(false);
//   const [image, setImage] = useState<any>("");

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowImage(false);
//     }, 5000);

//     return () => clearTimeout(timer);
//   }, [showImage]);

//   function handleClick() {
//     const randomIndex = Math.floor(Math.random() * images.length);
//     const randomImage = images[randomIndex];
//     setImage(randomImage);
//     setShowImage(true);
//   }

//   return (
//     <div>
//       <button onClick={handleClick}>Show Random Image</button>
//       {showImage && (
//         <img
//           src={image.url}
//           alt={image.alt}
//           style={{ animation: "fade-in-out 5s linear" }}
//         />
//       )}
//       <style>
//         {`
//           @keyframes fade-in-out {
//             0% {
//               opacity: 0;
//             }
//             50% {
//               opacity: 1;
//             }
//             100% {
//               opacity: 0;
//             }
//           }
//         `}
//       </style>
//     </div>
//   );
// }

// export default Animated;




import React, { useState, useEffect } from 'react';

function Match() {
    const [imageArray, setImageArray] = useState([
        { id: 1, src: 'https://images.unsplash.com/photo-1677697752978-2741925ea212?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60', isSelected: true },
        { id: 2, src: 'https://images.unsplash.com/photo-1677662375194-e5157a8e09b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60', isSelected: false },
        { id: 3, src: 'https://images.unsplash.com/photo-1677709678988-aab8a631fd68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60', isSelected: false }
    ]);

    const [randomImage, setRandomImage] = useState<any>("");
    const [isVisible, setIsVisible] = useState(false);
    const [buttonValue, setButtonValue] = useState(false);
    const [buttonTValue, setButtonTValue] = useState(true);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * imageArray.length);
        setRandomImage(imageArray[randomIndex]);
        setIsVisible(true);

        const timeoutId = setTimeout(() => {
            setIsVisible(false);
        }, 5000);

        return () => clearTimeout(timeoutId);
    }, [imageArray]);

    const handleButtonTrue = () => {
        if ((randomImage && randomImage.isSelected === true)) {
            alert('Matched!');
        } else {
            alert('Not matched!');
        }
    };
    const handleButtonFalse = () => {
        if ((randomImage && randomImage.isSelected === false)) {
            alert('Matched!');
        } else {
            alert('Not matched!');
        }
    };

    return (
        <div>
            {randomImage && isVisible && (
                <img
                    src={randomImage.src}
                    alt={`Image ${randomImage.id}`}
                    style={{
                        display: 'block',
                        margin: '10px',
                        animation: 'fadeIn 1s'
                    }}
                />
            )}
            {/* <button onClick={() => setButtonValue(!buttonValue)}>
                {buttonValue ? 'Button ON' : 'Button OFF'}
            </button> */}
            <button onClick={handleButtonTrue}>True</button>
            <button onClick={handleButtonFalse}>False</button>
        </div>
    );
}

export default Match;


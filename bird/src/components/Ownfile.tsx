import React, { useState, useEffect } from 'react';
import axios from "axios"
import "../styles/own.css"
const images = [
        { id: 1, src: 'https://images.unsplash.com/photo-1677697752978-2741925ea212?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60', isSelected: true },
        { id: 2, src: 'https://images.unsplash.com/photo-1677662375194-e5157a8e09b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60', isSelected: false },
        { id: 3, src: 'https://images.unsplash.com/photo-1677709678988-aab8a631fd68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60', isSelected: false }
]; // array of images


function Ownfile() {
  const [currentImage, setCurrentImage] = useState<string>(""); // state to store current image
  const [showImage, setShowImage] = useState<boolean>(false); // state to show/hide image
  const [random,setRandom]=useState<any>([])
  const [score,setScore]=useState<number>(0)
  const [timer, setTimer] = useState<any>(null); // state to store timer ID
  const [level,setLevel] = useState(0)
  
  let audio = new Audio("/succ.mp3")
  let audio2= new Audio("/wrong.mp3")
  let temptime:number = 10000
  const handleClick = () => {
    if(level>=10){
      
      setLevel(1)
      setScore(0)

      // axios.patch("",score)
    }
    if(level>0 && score!==level*10){
      setLevel(0)
      setScore(0)
    }

    else{

      if(level>2 && level<5){
        temptime=4000
      }
      else if(level>5 &&level<7){
        temptime=3000
      }
      else if(level>7){
        temptime=1000
      }
    // generate a random index to get a random image from the array
    const randomIndex = Math.floor(Math.random() * images.length);
    setCurrentImage(images[randomIndex].src); // set the current image
    setRandom(images[randomIndex])
    // show the image for 10 seconds
    setShowImage(true);
    setLevel(level+1)
    
    const timeoutId = setTimeout(() => {
      setShowImage(false);
    }, temptime);
    setTimer(timeoutId); // store the timer ID
  }
  };
  const handleButtonTrue = () => {
    if ((random.isSelected === true)) {
        //alert('Matched!');
        audio2.play()
        setScore(score+10)
        
    } else { 
      audio.play()
        setLevel(0)
        setScore(0)
        
       // alert('Not matched!');
    }
};

const handleButtonFalse = () => {
    if ((random.isSelected === false)) {
      //  alert('Matched!');
        audio2.play()
        setScore(score+10)
        
    } else {
      audio.play()
        setLevel(0)
        setScore(0)
        
       // alert('Not matched!');
    }
};

  // clear the timer when the component unmounts
  useEffect(() => {
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [timer]);

  return (
    <div className='o-main'>
      <button className='h-btn2'>{level}</button>
      <button className='h-btn2'>{score}</button>
      <button onClick={handleClick}>Show random image</button>
      <div className='container'>
      {showImage && <img className='moving-image' src={currentImage} alt="Random Image" />}
      </div>
      <button onClick={handleButtonTrue}>True</button>
      <button onClick={handleButtonFalse}>False</button>
    </div>
  );
}

export default Ownfile;
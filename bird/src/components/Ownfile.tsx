import React, { useState, useEffect } from 'react';
import axios from "axios"
import "../styles/own.css"
import { Box, Button, Image, Text } from '@chakra-ui/react';
import { FaCoins } from 'react-icons/fa';

const images = [
  { id: 1, src: 'https://www.adorama.com/alc/wp-content/uploads/2021/05/bird-wings-flying-feature.gif', isSelected: true },
  { id: 2, src: 'https://media.tenor.com/C2dG4GutnYoAAAAM/good-morning-redbird.gif', isSelected: true },
  { id: 3, src: 'https://media.tenor.com/MQzoF_sRHnUAAAAM/bird-sumant.gif', isSelected: true },
  { id: 4, src: 'https://images.squarespace-cdn.com/content/v1/58a638fc86e6c053fad43a35/1565237442156-H05G0V7M6DT5GN77YLIT/Business_Pigeon.gif', isSelected: true },
  { id: 5, src: 'https://openlab.bmcc.cuny.edu/melanie-chui-portfolio/wp-content/uploads/sites/303/2020/02/Bird-Animation.gif', isSelected: true },
  { id: 6, src: 'https://media3.giphy.com/media/avirXYX1jtL0kopILy/200w.gif?cid=6c09b952abk5yvhqshtmioycsmq8f46lf9ws5temqmwdjm5c&rid=200w.gif&ct=g', isSelected: true },
  { id: 7, src: 'https://thumbs.gfycat.com/FeminineRashErin-size_restricted.gif', isSelected: true },
  { id: 8, src: 'https://i.pinimg.com/originals/27/3a/c6/273ac6af63860fcd01736836fdf53cc3.gif', isSelected: true },
  { id: 9, src: 'https://images.squarespace-cdn.com/content/v1/5d8af01c05c62714f2279efa/1630135025820-5G7JAPCV6SBB20NGGBP6/Superman+Fly.gif', isSelected: true },
  { id: 10, src: 'https://media.tenor.com/Ocpy1bVH7E0AAAAC/iron-man-tony-stark.gif', isSelected: true },
  { id: 11, src: 'https://thumbs.gfycat.com/AromaticAggressiveDolphin-max-1mb.gif', isSelected: false },
  { id: 12, src: 'https://thumbs.gfycat.com/AcclaimedInfantileLadybird-size_restricted.gif', isSelected: false },
  { id: 13, src: 'https://www.pbs.org/wnet/nature/files/2015/09/bigbird-gif-1.gif', isSelected: false },
  { id: 14, src: 'https://thumbs.gfycat.com/AdeptRashBaiji-size_restricted.gif', isSelected: false },
  { id: 15, src: 'https://www.icegif.com/wp-content/uploads/pusheen-flying-icegif.gif', isSelected: false },
  { id: 16, src: 'https://media.tenor.com/Lvu0VdlZjn0AAAAC/tom-flying-tom-cat-flying.gif', isSelected: false },
  { id: 17, src: 'https://i.makeagif.com/media/5-08-2016/9dflOL.gif', isSelected: false },
  { id: 18, src: 'https://media2.giphy.com/media/1APcmTq0EMjNYWRuQM/giphy.gif?cid=6c09b95292b744da9a19b511e3e0db0ca477732ff2f0d5fb&rid=giphy.gif&ct=g', isSelected: false },
  { id: 19, src: 'https://media.tenor.com/7-MM53ItLnsAAAAC/tom-and-jerry-tweetie.gif', isSelected: false },
  { id: 20, src: 'https://cdn.3dnames.co/previews/cd46/250x250/c/cd46chunnu3dxx.jpg', isSelected: false },
  { id: 21, src: 'https://res.cloudinary.com/rs-designspark-live/image/upload/c_limit,w_480/f_auto/v1/article/giphy_e767f112aff815439fe032e2e52d441be11e3e6e', isSelected: false },
  { id: 22, src: 'https://i.pinimg.com/originals/a9/3a/29/a93a29da52d1b67d6ffa5b9e1eadc90d.gif', isSelected: false },
  { id: 23, src: 'https://i.gifer.com/Za9e.gif', isSelected: false },
  { id: 24, src: 'https://media.gq.com/photos/58ae197875f81e40676960f0/4:3/w_1775,h_1331,c_limit/GQ_2017-02_Trump_Tantrum_3x2.gif', isSelected: false },
]; // array of images


function Ownfile() {
  const [currentImage, setCurrentImage] = useState<string>(""); // state to store current image
  const [showImage, setShowImage] = useState<boolean>(false); // state to show/hide image
  const [random, setRandom] = useState<any>([])
  const [score, setScore] = useState<number>(0)
  const [timer, setTimer] = useState<any>(null); // state to store timer ID
  const [level, setLevel] = useState(0)
  const [disabled, setDisabled] = useState(false);

  let audio = new Audio("/succ.mp3")
  let audio2 = new Audio("/wrong.mp3")
  let temptime: number = 5000
  const handleClick = () => {
    if (level >= 10) {

      setLevel(1)
      setScore(0)

      // axios.patch("",score)
    }
    if (level > 0 && score !== level * 10) {
      setLevel(0)
      setScore(0)
    }

    else {

      if (level > 2 && level < 5) {
        temptime = 4000
      }
      else if (level > 5 && level < 7) {
        temptime = 3000
      }
      else if (level > 7) {
        temptime = 2000
      }
      // generate a random index to get a random image from the array
      const randomIndex = Math.floor(Math.random() * images.length);
      setCurrentImage(images[randomIndex].src); // set the current image
      setRandom(images[randomIndex])
      // show the image for 10 seconds
      setShowImage(true);
      setLevel(level + 1)

      const timeoutId = setTimeout(() => {
        setShowImage(false);
      }, temptime);
      setTimer(timeoutId); // store the timer ID
    }
    setDisabled(false);
  };
  const handleButtonTrue = () => {
    if ((random.isSelected === true)) {
      //alert('Matched!');
      audio2.play()
      setScore(score + 10)
      setDisabled(true);

    } else {
      audio.play()
      setLevel(0)
      setScore(0)
      setDisabled(true);
      // alert('Not matched!');
    }
  };

  const handleButtonFalse = () => {
    if ((random.isSelected === false)) {
      //  alert('Matched!');
      audio2.play()
      setScore(score + 10)
      setDisabled(true);
    } else {
      audio.play()
      setLevel(0)
      setScore(0)
      setDisabled(true);
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
    <Box
      w={{ base: "320px", sm: "320px", md: "700px", lg: "1440px" }}
      h={{ base: "320px", sm: "320px", md: "300px", lg: "400px" }}
      
    >

      <Box
        position="absolute"
        left={{ base: "60%", sm: "60%", md: "70%", lg: "80%" }}
        padding="20px 20px"
        // top="-20px"
      >

        <Text
          fontSize={{ base: "lg", sm: "lg", md: "2xl", lg: "5xl" }}
          textAlign="center"
        // fontSize="5xl"
        >{`Round:-${level}`}</Text>



        <Button
          fontSize={{ base: "sm", sm: "sm", md: "2xl", lg: "2xl" }}
          onClick={handleClick}
          bg="#87ceeb"
        >Let's Play
        </Button>

      </Box>
      <Box
        position="absolute"
        left="10%"
        display="flex"
        fontSize={{ base: "xl", sm: "xl", md: "2xl", lg: "5xl" }}
      // color="blue"

      >
        <FaCoins color='#87ceeb' />
        <Text
          ml="10px"
          fontSize={{ base: "xl", sm: "xl", md: "2xl", lg: "5xl" }}
        > {score}</Text>
      </Box>


      <Box
        w={{ base: "150px", sm: "150px", md: "300px", lg: "500px" }}
        h={{ base: "150px", sm: "150px", md: "300px", lg: "500px" }}
        display="flex"
        margin="auto"
      // marginTop="50px"
      >
        {
          showImage && (
            <Image
              w={{ base: "120px", sm: "120px", md: "300px", lg: "500px" }}
              borderRadius="50%"
              src={currentImage}
              alt={"random image"}
            />
          )
        }
      </Box>

      <Box

        display="flex"
        justifyContent="center"
        alignItems="center"
        left={{ base: "20%", sm: "20%", md: "30%", lg: "40%" }}
        // bottom="-100px"
        mt="50px"
        position="absolute"

      >
        <Button
          w="100px"
          h="100px"
          mr="20px"
          color="black"
          bg="#87ceeb"
          borderRadius="50%"
          padding="20px 30px"
          onClick={handleButtonTrue}
          isDisabled={disabled}
        >
          Fly
        </Button>
        <Button
          w="100px"
          h="100px"
          mr="20px"
          color="black"
          bg="#87ceeb"
          borderRadius="50%"
          padding="20px 30px"
          // onClick={() => setNo(false)}
          // onClick={handleAlerr}
          onClick={handleButtonFalse}
          isDisabled={disabled}
        >
          No-No!
        </Button>
      </Box>

    </Box>
  );
}

export default Ownfile;
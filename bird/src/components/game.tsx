import { Box, Button, Image, Text, useBoolean, useToast } from '@chakra-ui/react'
import { useEffect, useState } from 'react';

let score:any=localStorage.getItem("score")

const Game = () => {


    const [imageArray, setImageArray] = useState([
        { id: 1, src: 'https://images.unsplash.com/photo-1677697752978-2741925ea212?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60', isSelected: true },
        { id: 2, src: 'https://images.unsplash.com/photo-1677662375194-e5157a8e09b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60', isSelected: false },
        { id: 3, src: 'https://images.unsplash.com/photo-1677709678988-aab8a631fd68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60', isSelected: false }
    ]);

    const [randomImage, setRandomImage] = useState<any>("");
    const [isVisible, setIsVisible] = useState(false);
    const [level,setLevel]=useState(score)
    
    const [countdown, setCountdown] = useState(5);


    //countdown timer
    useEffect(() => {
        if (countdown === 0) {
            // do something when countdown reaches 0
            console.log("Countdown complete!");
        } else if (countdown) {
            const timer = setTimeout(() => {
                setCountdown(countdown - 1);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [countdown]);


    //animated images
    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * imageArray.length);
        setRandomImage(imageArray[randomIndex]);
        setIsVisible(true);

        const timeoutId = setTimeout(() => {
            setIsVisible(false);
        }, 5000);

        return () => clearTimeout(timeoutId);
    }, [imageArray]);

    const isDisabled = countdown === 0;

    
    const handleButtonClick = () => {
        setCountdown(5);
    };

    const handleReload = () => {
        // localStorage.removeItem("score")
        window.location.reload();
    }

    const handleAlerr = () => {
        alert("clicked")
    }

    const twoFunction = () => {
        handleButtonClick()
        handleReload()
        // handleAlerr()
    }

    const handleButtonTrue = () => {
        if ((randomImage && randomImage.isSelected === true)) {
            
            let res=JSON.parse(score)

            localStorage.setItem("score",JSON.stringify(res+10))
            alert('Matched!');
            setLevel(score)
        } else {
            localStorage.removeItem("score")
            setLevel(0)
            alert('Not matched!');
        }
    };
    const handleButtonFalse = () => {
        if ((randomImage && randomImage.isSelected === false)) {
            let res=JSON.parse(score)

            localStorage.setItem("score",JSON.stringify(res+10))
            setLevel(score)
            alert('Matched!');
        } else {
            localStorage.removeItem("score")
            setLevel(0)
            alert('Not matched!');
        }
    };

    return (
        <Box
            w={{ base: "320px", sm: "320px", md: "700px", lg: "1440px" }}
            h={{ base: "320px", sm: "320px", md: "300px", lg: "400px" }}
        >
            <button>{level}</button>

            <Box
                position="absolute"
                left="75%"
                bg="orange"
                padding="20px 20px"
            >

                <Text
                    textAlign="center"
                    fontSize="6xl"
                >{countdown}</Text>
                <Button onClick={twoFunction} >Start Countdown</Button>
                <Button ml="20px" onClick={handleReload}>Restart</Button>
            </Box>

            {/* image div */}
            <Box
                w={{ base: "150px", sm: "150px", md: "300px", lg: "500px" }}
                h={{ base: "150px", sm: "150px", md: "300px", lg: "500px" }}
                display="flex"
                margin="auto"
            // justifyContent="center"
            // alignItems="center"
            // w={{ base: "320px", sm: "320px", md: "700px", lg: "1440px" }}
            >
                {
                    randomImage && isVisible && (
                        <Image
                            w={{ base: "150px", sm: "150px", md: "300px", lg: "500px" }}
                            borderRadius="50%"
                            src={randomImage.src}
                            alt={`Image ${randomImage.id}`}
                        />
                    )
                }
            </Box>

            <Box

                display="flex"
                justifyContent="center"
                alignItems="center"
                left="40%"
                // bottom="-100px"
                mt="50px"
                position="absolute"

            >
                <Button
                    // colorScheme='blue'
                    mr="20px"
                    color="red"
                    bg="black"
                    borderRadius="50%"
                    padding="20px 30px"
                    // onClick={() => setUad(true)}
                    // onClick={handleAlerr}
                    onClick={handleButtonTrue}
                    id="myButton" isDisabled={isDisabled}
                >
                    True
                </Button>
                <Button
                    mr="20px"
                    color="red"
                    bg="black"
                    borderRadius="50%"
                    padding="20px 30px"
                    // onClick={() => setNo(false)}
                    // onClick={handleAlerr}
                    onClick={handleButtonFalse}
                    id="myButton" isDisabled={isDisabled}
                >
                    False
                </Button>
            </Box>
        </Box>

    )
}

export default Game;
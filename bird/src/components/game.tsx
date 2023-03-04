import { Box, Button, Text, useBoolean, useToast } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import Animated from './Animated';

const Game = () => {

    const [uad, setUad] = useState(true);
    const [no, setNo] = useState(false);
    let imageobj:any=localStorage.getItem("game")
    console.log(JSON.parse(imageobj))
    if(imageobj.url==String){
        console.log ("true")
    }
    const [countdown, setCountdown] = useState(5);

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

    const isDisabled = countdown === 0;

    const handleButtonClick = () => {
        setCountdown(5);
    };

    const handleReload = () => {
        window.location.reload();
    }

    const handleAlerr1=()=>{
        
    }
    const handleAlerr2=()=>{
        
    }

    const twoFunction=()=>{
        handleButtonClick()
    }

    return (
        <Box
            w={{ base: "320px", sm: "320px", md: "700px", lg: "1440px"}}
            style={{marginTop:"40px"}}
        >
            
            <Animated/>
            <Box>
                <Text>Boolean state: {uad.toString()}</Text>
                <Text>Boolean state: {no.toString()}</Text>
            </Box>

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

            <Box

                display="flex"
                justifyContent="center"
                alignItems="center"
                left="40%"
                bottom="-500px"
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
                    onClick={handleAlerr1}
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
                    onClick={handleAlerr2}
                    id="myButton" isDisabled={isDisabled}
                >
                    False
                </Button>
            </Box>
        </Box>

    )
}

export default Game;
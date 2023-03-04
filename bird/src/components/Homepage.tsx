import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../styles/home.css"
import Footer from './Footer'


type Props = {}

const Homepage = (props: Props) => {
  const route=useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure()

  
  let audio = new Audio("/front.wav")
  let audio2= new Audio("/back.mp3")

  const start = () => {
    audio.play()
  }
  
  const back =()=>{
    audio2.play()
  }

const handleClick1=()=>{
  route("/game")
  start()
}

  return (
    <div className='main-home'>
        <div className='hmpage'>
        
       
       <Button className='h-btn' colorScheme='blue' onClick={handleClick1}>Start The  Game</Button>
       <Button className='h-btn2' colorScheme='blue' onClick={()=>{onOpen();back()}}>Instructions</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
       <ModalHeader>Instructions Panel</ModalHeader>
      <ModalCloseButton />
       <ModalBody>
        <li>You have to Identify If the Image that appears is Flyable or not</li>
        <li>If it is Flyable then Press fly You will gain points Which you can withdraw at end as crypto currency</li>
        <li>Pass all our levels And get Diamonds</li>
        <li>You can buy Themes available in Our Store Or withdraw as Crypto</li>
    </ModalBody>

    <ModalFooter>
      <Button colorScheme='blue' mr={3} onClick={onClose}>
        Close
      </Button>
    </ModalFooter>
  </ModalContent>
</Modal>
        </div>
        
        
        <Footer/>
        
    </div>
    
  )
}

export default Homepage
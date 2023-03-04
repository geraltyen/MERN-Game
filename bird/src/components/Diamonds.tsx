import React from 'react'
import { useNavigate } from 'react-router-dom'
import d1 from "../images/d1.jpeg"
import d2 from "../images/d2.jpeg"
import d3 from "../images/d3.jpeg"
import "../styles/diam.css"
type Props = {}

const Diamonds = (props: Props) => {
  const route=useNavigate()
  return (
    
    <div>

      <h1 style={{textAlign:"center",fontSize:"30px",fontWeight:"500",color:"orangered"}}>Welcome To Our Store</h1>
    <div className="dmain">
      <div className="d-cards" onClick={()=>{route("/payment")}}>
        <img src={d3} alt="img" />
        <h2>Handfull of Diamonds <span style={{color:"blue",fontWeight:"700"}}> ₹ 100 </span></h2>
        
      </div>
      <div className="d-cards" onClick={()=>{route("/payment")}}>
        <img src={d1} alt="img" />
        <h2>Pouch of Diamonds <span style={{color:"blue",fontWeight:"700"}}> ₹ 200 </span></h2>
        
      </div>
      <div className="d-cards" onClick={()=>{route("/payment")}}>
        <img src={d2} alt="img" />
        <h2>Bag of Diamonds <span style={{color:"blue",fontWeight:"700"}}> ₹ 380 </span></h2>
        
      </div>
    </div>
      

    </div>

  )
}

export default Diamonds
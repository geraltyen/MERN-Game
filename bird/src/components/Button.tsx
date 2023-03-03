import React, { useState } from "react";
import "./Button.css"

const Counter = () =>{
    let [count, setCount] = useState<number>(0)
    let level= (1)
    if(count>=100){
        level ++
    }
    if(count>=200){
        level++
    }
    if(count>=300){
        level ++
    }
    if(count>=400){
        level++
    }
    if(count>=500){
        level ++
    }
    if(count>=600){
        level++
    }
    if(count>=700){
        level ++
    }
    if(count>=800){
        level++
    }if(count>=900){
        level ++
    }
    if(count>=1000){
        level++
    }
    if(count==100 || count==200 || count==300 || count==400 || count==500 || count==600 || count==700 || count==800 || count==900 || count==1000){
        alert("Congratulation You Pass This LEVEL")
    }
    return (
        <div className="container">
                <h2 className="score">LEVEL :  {level}</h2>
                <h1 className="maingame">Total Score</h1>
                <h2 className="score">{count}</h2>
                <div>
                    <button className="btn1"
                        onClick={()=> setCount(count-10)}
                        disabled={count == 0}
                    >
                        Decrement
                    </button>
                    <button className="btn2"
                        onClick={()=> setCount(count+10)}
                        // disabled={count == 100}
                    >
                        Increment
                    </button>
                
                    <button className="btn3"
                        onClick={()=> setCount(0)}
                        disabled={count == 0}
                    >
                        Reset
                    </button>
                </div>
        </div>
    )
}

export default Counter;
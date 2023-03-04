import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from "../Style/Leaderboard.module.css";
import {Datas} from "../Components/constants"

const Leaderboard = () => {
    const [data,setData] = useState<Datas[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
    let rank = 0;

  useEffect(() => {
    axios.get("https://busy-lime-prawn-boot.cyclic.app/users/").then((res) => {
        console.log(res.data);
        setLoading(false);
        setData(res.data.sort((a:{score:number},b:{score:number})=> (a.score < b.score) ? 1 : (a.score > b.score) ? -1 : 0));
    }).catch((err) => {
        console.log(err);
        setLoading(false);
        setError(true);
    })
  },[]);
  return (
    <div className={styles.LeaderboardContainer}>
        <div className={styles.innerContainer}>
          <h1 style={{fontSize:"4vw"}}>LEADERBOARD</h1>
          <div className={styles.boardContainer}>
          <table>
            <thead>
              <tr>
                <th scope="col">Rank</th>
                  <th scope="col">Player</th>
                  <th scope="col">Points</th>
                </tr>
            </thead>
            <tbody>
            {data?.map((el:any) =>{
               return (
                <tr>
                <td>{++rank}</td>
                 <td>{el.fname} {el.lname}</td>
                 <td>{el.score}</td>
              </tr>
               )
            })}
            </tbody>
           </table>
          </div>
        </div>
    </div>
  )
}

export default Leaderboard
import React, { useEffect, useRef, useState } from 'react'
import styles from "./index.module.css"
import raining from "../../assests/icon/raining.svg"
import { useLocation } from 'react-router-dom'

const WeatherPage = () => {
  const temperature = [
    {
      id: 1,
      time: "12pm",
    },
    {
      id: 2,
      time: "Now",
    },
    {
      id: 3,
      time: "2pm",
    },
    {
      id: 4,
      time: "3pm",
    },
    {
      id: 5,
      time: "4pm",
    },
    {
      id: 6,
      time: "4pm",
    },
    {
      id: 7,
      time: "4pm",
    }
  ]


  const [screenY, setScreenY] = useState(0);

  // Here false means down and true means up
  const [direction, setDirection] = useState(false);

  const bottomSheetRef = useRef(null);//elemnt ko selecet krne ke liye

  useEffect(() => {

    const move = (ev) => {
      // console.log(ev.targetTouches[i].target);
      for (let i = 0; i < ev.targetTouches.length; i++) {
        // Checking if previous value of Y is smaller than current Y value
        // console.log("pehle->",screenY,"baadme->",ev.targetTouches[i].screenY);
        if (screenY > ev.targetTouches[i].screenY) {
          // console.log("uppar jaa raha hai");
          setDirection(true)
        } else {
          // console.log("niche jaa raha hai");
          setDirection(false)
        }
        setScreenY(ev.targetTouches[i].screenY);
      }
    }

    const bottomSheetRefPoint  = bottomSheetRef.current;
    bottomSheetRefPoint.addEventListener('touchmove', move, false);

    // it is very important to clean event listeners in react for better performance
    return () => bottomSheetRefPoint.removeEventListener('touchmove', move, false);
    
  }, [screenY])

 const {state}=useLocation()
 console.log(state)
  return (
    <div className={styles.conatiner}>
      
      <div className={styles.temperatureConatiner}>
        <span>{state.climates.location.name}</span>
        <span>{state.climates.location.localtime}<sup>o</sup></span>
        <span>{state.climates.location.lat}</span>
        <span>{state.climates.location.region}</span>
        <span>localtime_epoch : {state.climates.location.localtime_epoch}</span>
      </div>

      <div className={direction?styles.bottomSheetScale:styles.bottomSheet}>
        <div  ref={bottomSheetRef} className={styles.chip}>
          <span>Hourly Forecast</span>
          <span>Weekly Forecast</span>
          <div className={styles.pick}></div>
        </div>
        <div className={styles.btnContainer}>
          {temperature.map(temp => {
            return (
              <div className={styles.tempAboutContainer}>
                <span>12 PM</span>
                <img src={raining} height={38} width={44} alt="icon" />
                <span>19<sup>o</sup></span>
              </div>
            )
          })}
        </div>
      </div>

    </div>
  )
}

export default WeatherPage

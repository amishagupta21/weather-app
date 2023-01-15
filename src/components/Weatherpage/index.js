import React, { useEffect, useRef, useState } from 'react'
import styles from "./index.module.css"
import raining from "../../assests/icon/raining.svg"

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


  const [height, setHeight] = useState(352);
  const [screenY, setScreenY] = useState(0);
  const bottomSheetRef = useRef(null);

  useEffect(() => {
    bottomSheetRef.current.addEventListener('touchmove', (ev) => {
      // Iterate through the touch points that were activated
      // for this element and process each event 'target'
      // console.log(ev.targetTouches[i].target);
      for (let i = 0; i < ev.targetTouches.length; i++) {


        // Checking if previous value of Y is smaller than current Y value
        // console.log("pehle->",screenY,"baadme->",ev.targetTouches[i].screenY);
        if(screenY>ev.targetTouches[i].screenY){
            console.log("uppar jaa raha hai");
            setHeight(height + 10)
        }else{
          console.log("niche jaa raha hai");
          setHeight(height - 10)
        }
        setScreenY(ev.targetTouches[i].screenY);
      }
    }, false);


  }, [screenY,height])
  return (
    <div className={styles.conatiner}>
      <div className={styles.temperatureConatiner}>
        <span>Bengaluru</span>
        <span>19<sup>o</sup></span>
        <span>Mostly Clear</span>
        <span>H : 24<sup>o</sup>  L : 18<sup>o</sup></span>
      </div>

      <div style={{height:height}} ref={bottomSheetRef} className={styles.bottomSheet}>
        <div className={styles.chip}>
          <span>Hourly Forecast</span>
          <span>Weekly Forecast</span>
          <div className={styles.pick}></div>
        </div>
        <div className={styles.btnContainer}>
          {temperature.map(temp => {
            return (
              <div className={styles.tempAboutContainer}>
                <span>12 PM</span>
                <img src={raining} height={38} width={44} alt="icon"/>
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

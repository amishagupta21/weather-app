import React, { useState } from 'react'
import styles from "./index.module.css"
import search from "../../../assests/icon/searchicon.svg"
import rainIcon from "../../../assests/icon/rainIcon.svg"
import windIcon from "../../../assests/icon/windIcon.svg"
import sunIcon from "../../../assests/icon/sunIcon.svg"
import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const MainPage = () => {
  const [climate, setClimate] = useState({});
  const [weather, setWeather] = useState("");
  const weatherHandler = (e) =>setWeather(e.target.value)
  const navigate=useNavigate()
  const searchClimate = () => {
    axios({
      method:"GET",
      url:`http://api.weatherapi.com/v1/forecast.json?key=731b37502d074c4392a232609231002&q=${weather}&days=1&aqi=no&alerts=no`
    }).then((response)=>{
      navigate("/place",{
        state:{
          climates:response.data
        }
      })
    }).catch((error)=>{
      console.log(error)
    })
  }
  const find = () => {
    axios({
      method: "GET",
      url: "http://api.weatherapi.com/v1/forecast.json?key=731b37502d074c4392a232609231002&q=India&days=1&aqi=no&alerts=no"
    }).then((response) => {
      setClimate(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }
  useEffect(() => {
    find()
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <p>Weather</p>
        <div className={styles.inputFieldContainer}>
          <img src={search} onClick={searchClimate} width={15.63} height={15.78} alt="search" />
          <input placeholder='Search for a city or airport' type="search" value={weather} onChange={weatherHandler} />
        </div>
      </div>

      <div className={styles.weatherContainer}>

        <div className={styles.weatherField} key={weather.id}>
          <span>{climate?.current?.temp_c}<sup>o</sup></span>
          <img src={rainIcon} width={160} height={160} alt="icon" />
          <div className={styles.weatherInformation}>
            <div className={styles.allitudeInfo}>
              <p>{climate?.location?.lat}<sup>o</sup>  {climate?.location?.lon}<sup>o</sup></p>
              <p>{climate?.location?.name}  , India</p>
            </div>
            <p className={styles.airInfo}>
              {climate?.current?.condition?.text}
            </p>
          </div>
        </div>

        <div className={styles.weatherField}>
          <span>22<sup>o</sup></span>
          <img src={windIcon} width={160} height={160} alt="icon" />
          <div className={styles.weatherInformation}>
            <div className={styles.allitudeInfo}>
              <p>24<sup>o</sup>18<sup>o</sup></p>
              <p>Chennai, India</p>
            </div>
            <p className={styles.airInfo}>
              Mid Rain
            </p>
          </div>
        </div>

        <div className={styles.weatherField}>
          <span>29<sup>o</sup></span>
          <img src={sunIcon} width={160} height={160} alt="icon" />
          <div className={styles.weatherInformation}>
            <div className={styles.allitudeInfo}>
              <p>H:24<sup>o</sup> L:18<sup>o</sup></p>
              <p>Delhi , India</p>
            </div>
            <p className={styles.airInfo}>
              Mid Rain
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPage

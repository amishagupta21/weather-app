import React from 'react'
import styles from "./index.module.css"
import search from "../../../assests/icon/searchicon.svg"
import rainIcon from "../../../assests/icon/rainIcon.svg"
import windIcon from "../../../assests/icon/windIcon.svg"
import sunIcon from "../../../assests/icon/sunIcon.svg"

const MainPage = () => {
  
    return (
        <div className={styles.container}>
            <div className={styles.searchContainer}>
                <p>Weather</p>
                <div className={styles.inputFieldContainer}>
                    <img src={search} width={15.63} height={15.78} alt="search"/>
                    <input placeholder='Search for a city or airport' type="search"/>
                </div>
            </div>

            <div className={styles.weatherContainer}>
                <div className={styles.weatherField}>
                    <span>19<sup>o</sup></span>
                    <img src={rainIcon} width={160} height={160} alt="icon"/>
                    <div className={styles.weatherInformation}>
                      <div className={styles.allitudeInfo}>
                         <p>H:24<sup>o</sup> L:18<sup>o</sup></p>
                         <p>Bengaluru , India</p>
                      </div>
                      <p className={styles.airInfo}>
                        Mid Rain
                      </p>
                    </div>
                </div>

                <div className={styles.weatherField}>
                    <span>22<sup>o</sup></span>
                    <img src={windIcon} width={160} height={160} alt="icon"/>
                    <div className={styles.weatherInformation}>
                      <div className={styles.allitudeInfo}>
                         <p>H:24<sup>o</sup> L:18<sup>o</sup></p>
                         <p>Chennai, India</p>
                      </div>
                      <p className={styles.airInfo}>
                        Mid Rain
                      </p>
                    </div>
                </div>

                <div className={styles.weatherField}>
                    <span>29<sup>o</sup></span>
                    <img src={sunIcon} width={160} height={160} alt="icon"/>
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

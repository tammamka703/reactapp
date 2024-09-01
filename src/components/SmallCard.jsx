import React from 'react'
import styles from "../styles/gencomponent.module.css"
import { FaAnglesRight } from "react-icons/fa6";
const SmallCard = ({children}) => {
  return (
    <div className={styles.small_card}>
        <div className={styles.smallcard_icon}>
            {children}
        </div>
        <div className={styles.smallcard_caption}>
            <h2>
                card discription
            </h2>
            <button>
                Go now 
                {<FaAnglesRight/>}
            </button>
        </div>
    </div>
  )
}

export default SmallCard

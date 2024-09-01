import React from 'react'
import styles from "../styles/Layout.module.css"
import SmallCard from './SmallCard'
import { FaSuitcase } from 'react-icons/fa'
import { PiStudentFill } from "react-icons/pi";
import { GiMaterialsScience } from "react-icons/gi";
function Header({data}) {
  return (
    <header className={styles.header}>
        <img src={data.imgSrc} alt="" />
        <div className={styles.header_content}>
          <div className={styles.header_caption}>
              {data.h2 && <h3>
                {data.h2}
              </h3>}
              {data.h1 && <h1>
                {data.h1}
              </h1>}
              {
                data.h3 && <h3>
                  {data.h3}
                </h3>
              }
              {data.btn && <button>
                {data.btn}
                </button>}
          </div>
          <div className={styles.header_cards_container}>
            <SmallCard>
              <FaSuitcase/>
            </SmallCard>
            <SmallCard>
              <PiStudentFill/>
            </SmallCard>
            <SmallCard>
              <GiMaterialsScience/>
            </SmallCard>
          </div>
        </div>
    </header>
  )
}

export default Header

import React from 'react'
import styles from "../styles/card.module.css"
function ServiceCard({data}) {
  return (
    <div className={styles.service_card}>
        <div className={styles.service_card_header}>
            <img src={data.imgsrc} alt='s_12'/>
        </div>
        <div className={styles.service_card_body}>
            <h2>
                {data.title}
            </h2>
            <p>
                {data.discription}
            </p>
            <label>
                Courses : {data.courses}
            </label>
            <button>
                see more
            </button>
        </div>
    </div>
  )
}

export default ServiceCard

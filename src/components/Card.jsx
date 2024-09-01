import React from 'react'
import styles from "../styles/card.module.css"
function Card({data,tugglePopUp}) {

  return (
    <div className={styles.card}>
        <div className={styles.card_header}>
            <img
                src={data.imgSrc}
                alt="Card_1"
            />
        </div>
        <div className={styles.card_body}>
            <h2>
                {data.name}
            </h2>
            <p>
                {data.discp}
            </p>
            <a href='#@!'>
                {data.professor}
            </a>
        </div>
        <div className={styles.card_footer}>
            <button onClick={()=>{tugglePopUp(data.id);}}>
                see More
            </button>
            <button>
                Book now
            </button>
        </div>
        {data.inhand && <div
         className={styles.card_padg}>
            <label>
              Obtainable
            </label>
        </div>}
    </div>
  )
}

export default Card

import React from 'react'
import styles from "../styles/PopUp.module.css"
function PopUp({tugglePopUp,data}) {
  return (
    <div
     className={styles.pop_up}
    >
          <button
            onClick = {tugglePopUp}
            className={styles.close_btn}
          >
            <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#000000" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"/></svg>
         </button>
        <div
         className={styles.popup_content}
        >
          <div className={styles.popup_img}>
            <img 
              src={data.imgSrc}
            />
          </div>
          <div className={styles.popup_discription}>
            <h1>
             {data.name}
            </h1>
            <p>
              {data.difficulity}
            </p>
            <ul>
              <h3>Headlines</h3>
              {data.headlines.map(element => {
                return <li key={element}>{element}</li>
              })}
            </ul>
            <h3>
              {data.professor}
            </h3>
            <p>
              {data.discp}
            </p>
            <button>
              Buy Know
            </button>
          </div>
        </div>
    </div>
  )
}

export default PopUp

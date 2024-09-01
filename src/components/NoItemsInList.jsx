import React from 'react'
import styles from "../styles/gencomponent.module.css"
function NoItemsInList() {
  return (
    <div className={styles.nolist_items}>
      <h1>
        No Items to Show
      </h1>
    </div>
  )
}

export default NoItemsInList

import React from 'react'
import styles from "../styles/Layout.module.css"
function DropDownMenu({menuIsOpen}) {
  return (
        <ul 
            className={styles.nav_bar_menu}
            style={menuIsOpen? {height:"300px"}:{}}
        >
             <li>   
                <a href="#">
                    Home
                </a>
            </li>
            <li>   
                <a href="#">
                    News Paper
                </a>
            </li>
            <li>   
                <a href="#">
                    Team
                </a>
            </li>
            <li>   
                <a href="#">
                    Collages
                </a>
            </li>
            <li>   
                <a href="#">
                    Events
                </a>
            </li>
            <li>   
                <a href="#">
                    About
                </a>
            </li>


        </ul>
  )
}

export default DropDownMenu

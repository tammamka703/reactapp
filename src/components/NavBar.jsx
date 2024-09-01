import React, { useEffect, useState } from 'react'
import styles from "../styles/Layout.module.css"
import DropDownMenu from './DropDownMenu'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLocationArrow } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { FaInbox } from 'react-icons/fa6';
import { FaGoogle } from 'react-icons/fa';
import logo from "../Assets/images/Navy White University Elegant Logo.png"
function NavBar() {
    const [menuIsOpen , setmenuIsOpen ] = useState(false)
    const [screenwidth , setScreenWidth] = useState(window.innerWidth)

// instiad of media query to make responsive design
// attracking the widnow width
    useEffect(()=>{
        window.addEventListener("resize",()=>{
            setScreenWidth(()=>{
                return window.innerWidth
            })
        });
        return ()=>{
            window.removeEventListener("resize",()=>{
                setScreenWidth(()=>{
                    return window.innerWidth
                })
            });
        }
    },[screenwidth]) 



  return (
    <>
    <div className={styles.topof_page}>
        <div className={styles.socialmedia_navigation}>
            <h3>
                Be the true ENGINEER with ICTES
            </h3>
            <ul>
                <li>
                    <a href='#'>
                        <FaFacebookF/>
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <FaInstagram />
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <FaTwitter/>
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <FaWhatsapp/>
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <FaLinkedin/>
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <FaGoogle/>
                    </a>
                </li>
            </ul>
            
        </div>
        <div className={styles.connection_navigation}>
            <ul>
                <li>
                <img src={logo} alt="logo" />
                    <div className={styles.connection_item}>
                        <h3>
                              Tartouse UNIVERSITY
                        </h3>
                        <h3>
                                ICTES
                        </h3>
                    </div>
                </li>
                <li>
                    <FaLocationArrow/>
                    <div className={styles.connection_item}>
                        <h3>
                            location :
                        </h3>
                        <h4>
                            tartous/syria/betcamoni
                        </h4>
                    </div>
                </li>
                <li>
                    <FaInbox/>
                    <div className={styles.connection_item}>
                        <h3>
                            Email : 
                        </h3>
                        <h4>
                            tartousUNI@gmail.com
                        </h4>
                    </div>
                </li>
                <li>
                    <FaPhone/>
                    <div className={styles.connection_item}>
                        <h3>
                            Phone :
                        </h3>
                        <h4>
                            +963980102579
                        </h4>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <nav 
        className={styles.nav_bar}
        >
    {
        screenwidth < 740 ?
        <button
         className={styles.humberger_Btn}
         onClick={()=>{setmenuIsOpen((prevState)=>!prevState)}}
         >
        </button>
        :
        <></>
    }
    {
        screenwidth < 740 ?
        <DropDownMenu
            menuIsOpen={menuIsOpen}
        />
        :
        <></>
    }
    {
        screenwidth > 740 ?
        <ul className={styles.nav_links}>
            <li>   
                <Link to="/">
                    Home
                </Link>
            </li>
            <li>   
                <Link to="#">
                    News Paper
                </Link>
            </li>
            <li>   
                <Link to="#">
                    Team
                </Link>
            </li>
            <li>   
                <Link to="/subjects">
                    Specilizations
                </Link>
            </li>
            <li>   
                <Link to="#">
                    Events
                </Link>
            </li>
            <li>   
                <Link to="#">
                    About
                </Link>
            </li>
        </ul>
        :
        <></>
    }
    </nav>
</>
  )
}

export default NavBar

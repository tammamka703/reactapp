import React, { useState } from 'react'
import Styles from "../styles/Layout.module.css"
import { Link } from 'react-router-dom'
import { FaArrowAltCircleRight } from 'react-icons/fa'
function SideBar() {
    const[IsOpen , setIsOpen ] = useState(false)
    console.log(IsOpen)
    const Links = [
        {
            title :"First Year",
            link : "/years/first",
            isActive:false
        },
        {
            title :"second Year",
            link : "/years/first",
            isActive:false
        },
        {
            title :"third Year",
            link : "/years/first",
            isActive:false
        },
        {
            title :"fourth comminucation Year",
            link : "/years/first",
            isActive:false
        },
        {
            title :"fourth os Year",
            link : "/years/first",
            isActive:false
        },
        {
            title :"fourth it Year",
            link : "/years/first",
            isActive:false
        },
        {
            title :"fifth comminucation Year",
            link : "/years/first",
            isActive:false
        },
        {
            title :"fifth os Year",
            link : "/years/first",
            isActive:false
        },
        {
            title :"fifth it Year",
            link : "/years/first",
            isActive:false
        },
    ]
  return (
    <>
        <aside className={Styles.side_bar} style={IsOpen? {width:"200px"} : {}}>
            <button
             onClick={()=>{setIsOpen((prevState=>!prevState))}}
             className={Styles.sidebar_btn}>
                <FaArrowAltCircleRight/>
            </button>
            <ul>
                {Links.map((item)=>{
                    return (
                        <li>
                            <Link
                                to={item.link}
                            >
                                {item.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </aside>
    </>
  )
}

export default SideBar

import React from 'react'
import Header from '../components/Header'
import styles from "../styles/homepage.module.css"
import ServiceCardContainer from '../components/ServiceCardContainer'
import SectionSeprator from '../components/SectionSeprator'
function Home() {

  const homePageHeader = {
      imgSrc:"/images/uniBuilding (2).jpg",
      h1:"we teach you to overcome others",
      h2:"Be the Three in one",
      h3:"ICTES",
      btn:"Sign up"
  }
  return (
    <main className={styles.home}>
      <Header 
        data = {homePageHeader}
        />
      <SectionSeprator/>
      <ServiceCardContainer/>
    </main>
  )
}

export default Home

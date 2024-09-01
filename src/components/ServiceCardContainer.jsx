import React, { useEffect, useState } from 'react'
import styles from "../styles/containers.module.css"
import ServiceCard from './ServiceCard'
function ServiceCardContainer() {
  const [cardData,setCardData] = useState([])
  const API_ENDPOINT = "http://localhost:3500/srvices"

  useEffect(()=>{
    const fetchCardData = async ()=>{
      try{
        const response = await fetch(API_ENDPOINT);
        const servicesData = await response.json();
  
        setCardData(servicesData);
      }catch(err){  
        console.log(err.stack)
      }
    }

    (async ()=>await fetchCardData())();
  },[])

  return (
    <main className={styles.service_card_container}>
      {cardData.map((item)=>{
        return (
        <ServiceCard
          data={item}
        />
        )
      })}
    </main>
  )
}

export default ServiceCardContainer

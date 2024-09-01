import React, { useEffect,useState } from 'react'
import styles from "../styles/containers.module.css"
import Card from './Card'
import PopUp from './PopUp'
import NoItemsInList from './NoItemsInList'
function CardContainer() {

  const API_URL = "http://localhost:3500/subjects";

  // the state which hold the data
  const [Cards , setCards] = useState([])
  // pop up open method
  const [popupisopen,setpopupisopen] = useState(false);
  const [popUpDataID , setpopUpDataID ] = useState(0)
  // fetching data for the cards
  useEffect(()=>{

    const fetchItems = async()=>{

      try{
        const response = await fetch(API_URL);
        const ListCards = await response.json();

        setCards(ListCards)
      }catch(err){  
        console.log(err.stack)
      }
    }
    (async ()=>await fetchItems())();
  },[])
  
  
  
  // pop up tuggle function
    const tugglePopUp = (id)=>{
      setpopUpDataID(id)
      setpopupisopen(prevstate=>!prevstate)
    }
  const filledCards = Cards.map((item)=>{
     return (
     <Card 
       key={item.id}
       data = {item}
       tugglePopUp = {tugglePopUp}
     />)
  })



  return (
    <div
     className={styles.container}
     >
      {popupisopen && <PopUp
        data = {Cards.find((item)=>item.id === popUpDataID)}
        tugglePopUp = {tugglePopUp}
      />}

      {filledCards.length === 0 ? <NoItemsInList/>:filledCards}

    </div>
  )
}

export default CardContainer

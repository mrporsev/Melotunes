import React from "react"
import "./App.css"


const DetailsView=({ music, musicAdded,isMusicInPlaylist,  addLabel })=>  

<div>
 
 <h1>Music details</h1>
 
   
 {/* musicAdded ska lägga till låten i spellistan */}
  <button onClick= {musicAdded}disabled = {isMusicInPlaylist}> {addLabel}</button>  
 
   {/* tar fram video och låt */}

   <h1> {music.track} </h1> 

  {/* <img src= {dish.image} height="200px" /> */}

   {/* <ul>
   {dish.extendedIngredients.map(ingredient=>
   <li key= {ingredient.id}>
      {ingredient.name} {ingredient.amount * guests} {ingredient.unit} </li>)}  
   </ul> */}
   
  


   {/* <h5>Price: {(dish.pricePerServing).toFixed(2)} kr </h5> */}
  


  
   {/* <h6>More information: {dish.sourceUrl} </h6> */}


</div>

   
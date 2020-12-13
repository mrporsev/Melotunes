import React, { useState } from 'react'
import './App.css';
import song from "./songs/backgroundsong.mp3"
import payNow from "./Images/payNow.png"
import arrowDown from "./Images/arrowDown.png"
import arrowUp from "./Images/arrowUp.png"
import shoppingBag from "./Images/shoppingBag.png"
import addMore from "./Images/addMoreMoney.png"

let songnamn = new Audio(song)

function p1(){
  console.log("HEJ")
}

function p2(){
  console.log("HEJDÅ")
}



function  pausa(){
  songnamn.pause()
  songnamn.currentTime = 0;
  console.log("PAUSAD")
}

function   playSong(){

  console.log("TET")
 songnamn.play()
 
  
}

function  halfVolume(){

  songnamn.volume = 0.2

}

function  fullVolume(){
  songnamn.volume = 1.0
  
}



function millisToMinutesAndSeconds(millis) {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}



function testar() {
  var inputVal = document.getElementById("testar").value;
 
 return inputVal
  
 }
 


















 
function Playlisten ({atunesModel}){

  
  function nyLista(){
    atunesModel.newList()
    updateWebsite()
    
  }



  function updateWebsite(){
   
    updatera1(updatera-1)
    
  }

  function pay(){
    atunesModel.totalcostsPlaylist(testar())
   
    document.getElementById("testar").value = atunesModel.bankAccount

  //  atunesModel.buyPlaylist(atunesModel.playlist)
  atunesModel.disablefnc(sum)
  console.log("VAD ÄR SUMMAN:"  + sum)
 // nyLista()
    updateWebsite()
  }

  function addMoreMoney(){
    
    console.log("PRESSED")
    let val =  prompt("enter värde")
   let vali = parseFloat(val);

  let inputVal = document.getElementById("testar").value;
  let inputVali = parseFloat(inputVal)
  let summan = inputVali + vali
  document.getElementById("testar").value = summan.toFixed(2)

   atunesModel.bankMoney(summan.toFixed(2), sum)


  updateWebsite()
  
  }

  

  const [updatera,updatera1] = useState(4)


  let prisen
  let rest
  
  if(atunesModel.disabled == true){
    rest = <h5 style = {{color : "red"}}>You are missing  {atunesModel.dif} $</h5>
  }
  
 
  
  
  
  else if(atunesModel.skillnad == "+"){
    prisen = <h5 style = {{color : "green"}}>You have {atunesModel.bankAccount} $ left in your bank</h5>
    
    
  }

  let summan = atunesModel.playlist.map(element => element.trackPrice)
  console.log(summan)
  let sum = 0
  console.log(summan)
  for(let i = 0; i < summan.length; i++){
    sum += summan[i]
  }


  let playtime = atunesModel.playlist.map(element => element.trackTimeMillis)
  

  let playMin = 0
  let playSek = 0
  let time = 0

  
  
  for(let i = 0; i < playtime.length; i++){
    playMin += playtime[i]
   
   
  }
  playMin = (playMin/1000)/60
  playSek = playMin
  playMin = Math.floor(playMin)
  playSek= playSek - playMin
  playSek*=60
  playSek = playSek.toFixed(0)
  console.log(playMin)
  console.log(playSek)

  time = <span>{playMin}:{playSek}</span>


 let cirkel = <div className = "water"></div>
 
function taBort(song){
  console.log(song)

  atunesModel.removeSong(song)
  
  updateWebsite()
}

function gåUpp(song) {
  atunesModel.gåUppListan(song)
  updateWebsite()
}

function gåNer(song){

  atunesModel.gåNerListan(song)
  updateWebsite()
  

}

function myPlaylists(){

    
console.log(atunesModel.manyPlaylists)
  console.log(atunesModel.manyPlaylists[0][0].artistName)
  console.log(t445)
  updateWebsite()

}


  
 


let t2

for(let i = 0; i < atunesModel.manyPlaylists.length; i++){
  for(let j = 0; j < atunesModel.manyPlaylists[i].length;j++){
    console.log(atunesModel.manyPlaylists[i][j].artistName)
    t2 =  <td><h6>{atunesModel.manyPlaylists[i][j].artistName}</h6></td>  
  }
}



  let t = atunesModel.playlist.map(element => 

    <tr> 
    <td><h6>{element.artistName}</h6></td>  
    <td><h6>{element.trackName}</h6></td>  
    <td><h6>{element.trackPrice}$</h6> </td>  
    <td><h6>{millisToMinutesAndSeconds(element.trackTimeMillis)}</h6></td>   
    <embed src={element.previewUrl} width = "145" height = "100"></embed>
    <td><img src = {element.artworkUrl100} width="100" height="100" border = "0" /></td>
    <td>    <button className = "myButton2" onClick = {()=>taBort(element.trackName)}>X</button> </td>
    <td>    <button  style = {{fontSize :"10px"}} onClick = {()=>gåUpp(element)}><img src = {arrowUp} img width = "40" img height = "40"></img></button></td>
    <td>    <button  style = {{fontSize :"10px"}} onClick = {()=>gåNer(element)}><img src = {arrowDown} img width = "40" img height = "40"></img></button></td>
    </tr>
    
 )

 

 let t445 = atunesModel.playlist.map(element => 
  <p>{element.artistName}  </p>
   
   )
 
 console.log(t2)
   


 
 
 var d = new Date();

    let tabell 
   
    if(t.length == 0){
      
      cirkel = <div className = "water"></div>
 
      tabell = ""
      
    }
    else{
      {}
      cirkel = <div className = "water" ></div>
      tabell =<div className = "boxsquare"><table class="highlight">
        
      <thead>
        <tr>
            <th>Artist name</th>
            <th>Song</th>
            <th>Price</th>
            <th>Length</th>
            <th>Click to listen!</th>
        </tr>
      </thead>
          {t}
     </table>
     <div className = "boxsquaresmall">  
     <h6 className = "text3d">Total cost of your playlist:     {sum.toFixed(2)} $ </h6> 
     <h6 className = "text3d">Total length of your playlist:    {time} </h6> </div>
     <hr></hr>
      <br></br>
      <span>
      <img src = {shoppingBag} width = "100" height = "100"></img>
        <h6>Enter your balance below </h6>
     <input type="text" id={"testar"} text = {atunesModel.bankAccount}/>
      <button onClick = {() => pay()} disabled = {atunesModel.disabled}><img src = {payNow}></img></button>
      <button onClick = {() => addMoreMoney()} > Press to insert more money <img src = {addMore} height = "183"></img></button>
      
      <span>
      {prisen}
      {rest}
     
      </span>
     </span>
     </div>
 
    }

   return <div className = "backgroundfärg"> 
       <button className = "buttonAdd" onClick = {() => nyLista()}><span>Reset playlist</span></button>
       
       <br></br>
       <br></br>   
     {tabell}
    {cirkel}
   
    <div>
      <br></br>
      <br></br>
    <input type = "button" value = "Play background song" className = "waves-effect waves-light btn-small"onClick = {() => playSong()}/>
       <input type = "button" value = "Mute background song" className = "waves-effect waves-light btn-small"onClick = {() => pausa()}/>
       <input type = "button" value = "lower the volume" className = "waves-effect waves-light btn-small"onClick = {() => halfVolume()}/>
       <input type = "button" value = "Higher the volume"className = "waves-effect waves-light btn-small" onClick = {() => fullVolume()}/>

   
       <br></br>
       <br></br>
       <hr></hr>
    </div>
  

 </div>
}
 
export default Playlisten
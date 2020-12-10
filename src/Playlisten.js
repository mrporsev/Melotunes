import './App.css';
import React from "react"
import Playlist from "./Playlistview"
import song from "./songs/backgroundsong.mp3"
import atunesModel from "./atunesModel"
 class Playlisten extends React.Component {

  state = {
    counters : [
     
    ],
    allSongs : ["hej"],
    songsFromsearch : [],
    songnamn : new Audio(song)}

    btnHandler = () => {
      if(this.state.counters.length>=1){
        this.kanske()
        console.log(this.props.allSongs)
      }
      else{
      let a = this.state.counters
      let längd = this.state.counters.length+1
      a.push({id : this.state.counters[this.state.counters.length-1], text : "Playlist " + längd, idNamn : "testar2"+längd})
      this.setState({counters : a})
      console.log(this.props.allSongs)
      }

    }

    deleteAll = () =>{
      var ms = prompt("Are you sure you want to delete? Please enter ´´yes`` and press ok otherwise press ´´avbryt``")
      if(ms == "yes"){
        let a = this.state.counters.filter(element => element.id <= 0)
        this.setState({counters : a}) 
        console.log("paused")
        this.setState({allSongs : []})
      }
        else{
        
        }
    }

    pausa(){
      this.state.songnamn.pause()
      this.state.songnamn.currentTime = 0;
      console.log("PAUSAD")
    }

   removeBtn = (counterId)  => {
     

     let a = this.state.counters.filter(element => element.id != counterId)
    
     this.setState({counters : a})

     console.log(counterId, "TEST")
     console.log(this.state.counters)
     this.setState({allSongs : []})
   }

   testar = () =>{
    var inputVal = document.getElementById("testar").value;

    let v = this.state.allSongs
    v.push(inputVal)
    this.setState({allSongs :v})
    console.log(inputVal)
    console.log(this.state.allSongs)
   }

  kanske(){


  this.inget()
  let a = this.state.counters
  let längd = this.state.counters.length+1
  a.push({id : this.state.counters[this.state.counters.length-1], text : "Playlist " + längd, idNamn : "testar2"+längd})
  this.setState({counters : a})

  }

  inget(){
    this.setState({allSongs : []})
  }

  playSong(){
    console.log("TET")
    this.state.volume = 1.0
    this.state.songnamn.play()
    
  
  }

  halfVolume(){

    this.state.songnamn.volume = 0.2

  }

  fullVolume(){
    this.state.songnamn.volume = 1.0
    
  }

  render(){

    console.log(this.state.allSongs)

    let tom = ""
    let knapp = ""
    
    if(this.state.counters.length == 0){
      tom = <div className = "water"></div>
      knapp =  <div>  <input type="text" id={"testar"} placeholder="Enter song name"/>
      <input type = "button" value = "Add song to playlist" onClick = {() => this.testar()}/>
    </div>
    }
    else{
      tom = ""
      knapp = <div><button className = "buttonAdd" onClick = {() => this.deleteAll()}><span>Delete all</span></button>
      <br></br>
   </div>
      
    }
    
    let a = this.state.counters.map(element =>(
       <Playlist text = {element.text} 
       idNamn = {element.idNamn}
       id = {element.id}
        onDelete = {this.removeBtn}
        onCopy = {this.copyBtn}
        allSongs = {this.state.allSongs}/>))

    
      if(2 == 1){

      }
    
      console.log(<atunesModel/>)
  return (
   
    <div className = "backgroundfärg">
      
      <button className = "buttonAdd" onClick = {() => this.btnHandler()}><span>Add new playlist</span></button>
      <br></br>
      <br></br>
      <br></br>
         {a}
         <br></br>
         {tom}
         <br></br>
     
        {knapp}
        <br></br>
        <br></br>
       
        <input type = "button" value = "Play background song" onClick = {() => this.playSong()}/>
       <input type = "button" value = "Mute background song" onClick = {() => this.pausa()}/>
       <input type = "button" value = "lower the volume" onClick = {() => this.halfVolume()}/>
       <input type = "button" value = "Higher the volume" onClick = {() => this.fullVolume()}/>
       
    </div>
  )
  }
}

export default Playlisten;

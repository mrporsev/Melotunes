import './App.css';
import React from "react"
import Playlist from "./Playlistview"
 class Playlisten extends React.Component {

  state = {
    counters : [
  
    ]}

    btnHandler = () => {
      let a = this.state.counters
      let längd = this.state.counters.length+1
      a.push({id : this.state.counters[this.state.counters.length-1], text : "Playlist " + längd, idNamn : "testar2"+längd})
      this.setState({counters : a})
      console.log(this.state.counters.id)

    }

    deleteAll = () =>{
        let a = this.state.counters.filter(element => element.id <= 0)
        this.setState({counters : a})
    }

   removeBtn = (counterId)  => {
     

     let a = this.state.counters.filter(element => element.id != counterId)
    
     this.setState({counters : a})

     console.log(counterId, "TEST")
     console.log(this.state.counters)
   }


  render(){

    let tom = ""
    let knapp = ""
    if(this.state.counters.length == 0){
      tom = <div className = "water"></div>
      knapp = ""
    }
    else{
      tom = ""
      knapp = <button className = "buttonAdd" onClick = {() => this.deleteAll()}><span>Delete all</span></button>
    }
 
    let a = this.state.counters.map(element =>(
       <Playlist text = {element.text} 
       idNamn = {element.idNamn}
       id = {element.id}
        onDelete = {this.removeBtn}
        onCopy = {this.copyBtn}/>))
  return (
    <div className = "backgroundfärg">
      <button className = "buttonAdd" onClick = {() => this.btnHandler()}><span>Add new playlist</span></button>
      <br></br>
      <br></br>
         {a}
         <br></br>
         {tom}
         <br></br>
        {knapp}
    </div>
  )
  }
}

export default Playlisten;

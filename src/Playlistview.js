
import React from "react"
import "./App.css"

 class Playlist extends React.Component {

    state = {
        songs : 0,
        idNamn : this.props.idNamn,
        allSongs : [],
     
    }

  btnHandler = () => console.log("CLICKED")

  btnHandlerSong = () => {
  
    this.setState({songs : this.state.songs+1})
    var inputVal = document.getElementById(this.state.idNamn).value;
    console.log(inputVal)
    let t = this.state.allSongs

    if(!t.includes(inputVal)){
    t.push(inputVal)
    }
 
    else{
        alert("Cant add!  " + inputVal + " allready in playlist")
    }
    this.setState({allSongs : t})
  }

  test = (id) => {
        console.log(id)
  }

  render(){
    
    let str = "https://www.youtube.com/results?search_query="
  let v = this.state.allSongs.map((element) => <div className = "boxsquaresmall">
  
  <span className = "spanSize"><small><a href = {str + element} target="_blank">{element}</a> </small>
  </span></div>

  )
  return (
    <div className = "boxsquare">
      <h2>{this.props.text}</h2>
      <input type = "button" className = "myButton"  value = "ADD SONG" onClick = {() => this.btnHandlerSong()} />
      <div className  = "divider"/>

      <input type="text" id={this.state.idNamn} placeholder="Enter song name"/>
            {v}
            <input type = "button" value = "DELETE PLAYLIST" id = {this.state.songs} className = "myButton2" onClick = {() => this.props.onDelete(this.props.id)}/>
            <br></br>
            <h4>total songs: {this.state.allSongs.length}</h4>
            <h4>total playtime: 0</h4>
            <h4>total cost : 0</h4>
    </div>
     )
  }
}

export default Playlist;

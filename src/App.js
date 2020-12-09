import React from 'react'
import './App.css';
import Search from './Components/search'
import Playlisten from "./Playlisten"
import Show from './show'
import atunesModel from './atunesModel'

function App() {
 const searchNav=()=>window.location.hash="search";
 const playlistNav=()=>window.location.hash="playlist";
const model = new atunesModel()

 return (
   <div className="App">
     <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">Atunes</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="#">Homepage</a></li>
        <li><a href="#search">Search</a></li>
        <li><a href="#playlist">Playlist</a></li>
      </ul>
    </div>
  </nav>
      <div>
       <Show hash="#search"><Search atunesModel= {model}/> </Show>
      </div>
       <div>
       <Show hash="#playlist"><Playlisten /> </Show>
       </div>
       
   </div>
 );
}
 
export default App;
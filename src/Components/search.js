import React, { useState } from 'react'
import SongSearcher from '../Views/searchView'
 
function Search ({atunesModel}){
    
    

    const [song, setSong] = useState("drake");
    const [result, setResult] = useState ({resultCount: 1, results: []});
 
   //  const url = 'https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?term=jack+johnson';
 
    const url = 'https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?term=' + song;
 
    React.useEffect(()=>fetch(url).then(response => response.json()).then(setResult),[song]);
    React.useEffect(()=> console.log(atunesModel.playlist),[atunesModel.playlist])

    console.log(result)
   
   return <SongSearcher searchSong={setSong} theSongs={result} addSong={(song)=>atunesModel.addSongToPlaylist(song)} />
}
 
export default Search

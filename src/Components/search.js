import React, { useState } from 'react'
import SongSearcher from '../Views/searchView'
 
function Search (){
 
    const [song, setSong] = useState("ozuna");
    const [result, setResult] = useState ({resultCount: 0, results: []});
 
   //  const url = 'https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?term=jack+johnson';
 
    const url = 'https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?term=' + song;
 
    React.useEffect(()=>fetch(url).then(response => response.json()).then(setResult),[song]);
 
    console.log(result)
   
   return <SongSearcher searchSong={setSong} theSongs={result}/>
}
 
export default Search

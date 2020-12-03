const SongSearcher = ({searchSong, theSongs})=>{
 
    let query = " ";
     
     
    return (<div>
     
      
       <input className = "inputBox" placeholder = "Song or Artist" onChange={event=> query = event.target.value}></input>
     
       <select>  <option>Genre</option> asdasd </select>
     
       <button className = "btn" onClick = {()=> searchSong(query)}> Search</button>
      
       {theSongs.results.map(song =>
      
       <div id = "parent">
     
           <img className = "pics" src = {song.artworkUrl100} height="150px"  />
         
           <div> {song.artistName} </div>
     
           <div> {song.collectionPrice} </div>
     
     
      
       </div>
     
       )
       }  
     
    </div>)}
     
     
    export default SongSearcher
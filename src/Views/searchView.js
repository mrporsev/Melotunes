
const SongSearcher = ({searchSong, theSongs, addSong})=>{
        
    let query = " ";
    let x = ""
    if(theSongs.resultCount === 0) {
        x = alert("Result not found, please try again.") 
        theSongs.resultCount = 1 
    }
    
     
    return (<div>
     
      
       <input className = "input" placeholder = "Song or Artist" onChange={event=> query = event.target.value}></input>
       <button className = "deep-purple lighten-1 waves-effect waves-purple btn-small" onClick = {()=> searchSong(query)}> Search</button>
           
        <br></br>
       
       {theSongs.results.map(song =>
       <div class="pics">
       <div class="card medium">
       <div class="card-image waves-effect waves-block waves-light">
       <img class="activator" src={song.artworkUrl100} /> 
       </div>
       <div class="card-content">
           <span class="card-title activator black-text text-darken-4">{song.trackCensoredName}</span>
           <p>{song.artistName}</p>
       </div>
       <div class="card-reveal black">
           <span class="card-title white-text text-darken-4"><i class="material-icons right">X</i></span>
           <p class="white-text text-darken-4"><b>Price:</b>{song.trackPrice}$</p>
           <p class="white-text text-darken-4"><b>Genre:</b>{song.primaryGenreName}</p>
           <p class="white-text text-darken-4"><b>Country:</b>{song.country}</p>
           <p class="white-text text-darken-4"><b>Released:</b>{song.releaseDate}</p>
           <p class="white-text text-darken-4"><b>Collection:</b>{song.collectionName}</p>
           <p class="white-text text-darken-4"><b>Length:</b> {((song.trackTimeMillis/1000)/60).toFixed(2)} min</p>
       <button class="waves-effect waves-light btn-small" style={{fontSize: "10px"}} onClick={()=>addSong(song)}>Add to playlist</button>
       <iframe src={song.previewUrl} 
width="120px" height="120" border="0" frameborder="0"  scrolling="no"></iframe>
   </div>
 </div>
 
  </div>
       )
       }  
     {x}
    </div>)}
     
     
    export default SongSearcher
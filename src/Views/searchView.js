const SongSearcher = ({searchSong, theSongs})=>{
 
    let query = " ";
     
     
    return (<div>
     
      
       <input className = "input" placeholder = "Song or Artist" onChange={event=> query = event.target.value}></input>
       <button className = "waves-effect waves-light btn-small" onClick = {()=> searchSong(query)}> Search</button>

        <br></br>

       {theSongs.results.map(song =>
       <div class="pics">
       <div class="card medium">
       <div class="card-image waves-effect waves-block waves-light">
       <img class="activator" src={song.artworkUrl60} /> 
       </div>
       <div class="card-content">
           <span class="card-title activator grey-text text-darken-4">{song.trackCensoredName}</span>
           <p>{song.artistName}</p>
       </div>
       <div class="card-reveal">
           <span class="card-title grey-text text-darken-4">Information<i class="material-icons right">close</i></span>
           <p><b>Price:</b>{song.collectionPrice}$</p>
           <p><b>Genre:</b>{song.primaryGenreName}</p>
           <p><b>Country:</b>{song.country}</p>
           <p><b>Release date:</b>{song.releaseDate}</p>
       <p><b>Details: </b> <span>{song.trackCensoredName} is a song by {song.artistName} from the album {song.collectionName}. It was released {song.releaseDate}.</span></p>
           <a class="waves-effect waves-light btn-small">Add to playlist</a>
   </div>
 </div>
  </div>
       )
       }  
     
    </div>)}
     
     
    export default SongSearcher
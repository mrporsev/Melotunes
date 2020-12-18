import React, { useState } from 'react'
import fire from "../services/firebase";


function getUserData() {
  let user = fire.auth().currentUser;
  return fire
    .database()
    .ref("/users/" + user.uid)
    .once("value")
    .then((snapshot) => {
      return (snapshot.val() && snapshot.val().boughtPlaylists) || [];
    });
}

function MyPlaylist ({atunesModel}){

  const [manyPlaylists, setPlaylist] = React.useState([]);
  React.useEffect(async () => {
    async function fetchData() {
      atunesModel.manyPlaylists = await getUserData();
      setPlaylist(atunesModel.manyPlaylists);
    }
    fetchData();
  }, []);

    function updateWebsite(){
   
        updatera2(updateras-1)
      
      }

    function gåNer(element, index, updateras){
      console.log("Sortera")
      console.log(element)
      console.log(index)
      atunesModel.sortPlayLists(element, index, updateras)
        updateWebsite()
    }

 
  
const [updateras,updatera2] = useState(4)



let allNames =  atunesModel.manyPlaylists.map((element, index)  => 
{return <div className = "boxsquare"> <h4>Playlist: {index+1}</h4>{element.map((list, index) => 
<div> <h6>{index+1}</h6>
<div className = "boxsquaresmall"> {list.trackName}

</div>

</div> )}
<br></br>
<hr></hr>
<br></br>

    

<button  style = {{fontSize :"15px"}} className = "myButtonsort" onClick = {()=>gåNer(element, index, updateras)}>Sort playlist by name</button>
<br></br>
</div>})


let items = [ ["Nibbe", "Martin"], ["Testar", "drake", "hej"]  ];





/*
let TEST =  items.map((element, index)  => 
{return <div className = "boxsquare"> <h4>Playlist: {index+1}</h4>{element.map((list, index) => 
<div> <h6>{index+1}</h6>
<div className = "boxsquaresmall">{list}

</div>
</div> )}

</div>})
*/
   return <div className = "backgroundfärg"> 

      {console.log(atunesModel.manyPlaylists)}
       {allNames}
   
      


  

    </div>
}

 
export default MyPlaylist
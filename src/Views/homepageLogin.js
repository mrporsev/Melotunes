import React from "react";

function AboutUs ()
{
return(
    <div>
    
    
       <ul class="collection with-header">
        <li class="collection-header"><h1>About Us</h1></li>
        <li class="collection-item"><b style={{fontSize: "14px" }}>
        MeloTunes is a react based project, created by a group of four students from KTH, 
        that uses the Itunes Search API and Firebase database/authentication to develop the Melotunes site.
     </b></li>
        <li class="collection-item">
            <h5>What is MeloTunes for ?</h5>
            <p style={{fontSize: "15px" }}>
                The purpose of the app is that the user can create and login to an account and use the search function
                 to find songs which they like and store them in a playlist. The playlist can then be bought in the 
                 playlist section of the app. The user can in addition create a new playlist and buy it too!
                The playlist can also be sorted by the user in the way they like. They can also view information about the song such as 
                 the cost, total playtime, release date, genre and the collection before buying it.
            </p></li>
   
        <li class="collection-item"> 
      <h5>How do you buy a playlist?</h5> 
      <p style={{fontSize: "15px" }}> In the playlist section where the checkout is happening the user has a specific amount of money to spend. 
        If there isn't enough money to buy a playlist, the user has the alternative to insert more money (simulation)
       </p></li>
       
      </ul>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      </div>
)
}

export default AboutUs;
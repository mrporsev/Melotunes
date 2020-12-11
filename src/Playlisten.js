import React, { useState } from 'react'
import PlaylistView from './Views/Playlistview';
 
function Playlist ({atunesModel}){

   return <PlaylistView atunesModel = {atunesModel} />
}
 
export default Playlist

/*
<div> <table class="highlight">
   <thead>
     <tr>
         <th>Artist name</th>
         <th>Song</th>
         <th>Price</th>
     </tr>
   </thead>

   <tbody>
     <tr>
       <td>{atunesModel.playlist[0].artistName}</td>
       <td>{atunesModel.playlist[0].songName}</td>
       <td>{atunesModel.playlist[0].trackPrice}7</td>
     </tr>
     <tr>
       <td>Alan</td>
       <td>Jellybean</td>
       <td>$3.76</td>
     </tr>
     <tr>
       <td>Jonathan</td>
       <td>Lollipop</td>
       <td>$7.00</td>
     </tr>
   </tbody>
 </table></div> */
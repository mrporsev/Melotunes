import React, { useContext, useImperativeHandle } from 'react'

const PlaylistView = ({atunesModel})=>{
    
   

  return (<div>
     
        {atunesModel.playlist[0].artistName}
      <br></br>

  </div>)}
   
   
  export default PlaylistView
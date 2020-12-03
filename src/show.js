import React from 'react';
import DefaultRoute from './defaultRoute'
function Show({hash, children}){  
    const [route, setRoute]= React.useState(window.location.hash);
    <DefaultRoute/> 
    React.useEffect(()=>{ 
      window.addEventListener("hashchange", 
                 setRoute) 
             return ()=> window.removeEventListener("hashchange", 
              setRoute);
                },[]);
                             
          
               


   return hash===window.location.hash?children: false;
 }

 export default Show
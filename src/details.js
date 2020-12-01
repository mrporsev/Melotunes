import React from "react"
import "./App.css"

       function Details({model,ok:[addNav, addLabel]}){ 

        const currentMusic= useModelProp(model, "currentMusic");
        const playlist= useModelProp(model, "playlist");
        const [promise, setPromise]=React.useState(null);  

        React.useEffect(() => setPromise( currentMusic && DishSource.getDishDetails(currentMusic)),
             [currentMusic]
        );
        const [data, error]= usePromise(promise);
        //ska vi ha med promisenodata metod?
      
        return promiseNoData(promise, data, error) || 
//hämta data på nåt sätt, ska jag hämta direkt frpån api eller sparar vi datan från apin en gång i en fil?

        h(DetailsView, {
               music: data,
               musicAdded: () => {model.addToPlaylist(data); //skapa i modellen addToPlaylist 
               addNav()}, addLabel , //skapa i app.js, 
               
               isMusicInPlaylist:  playlist.find(music => music.id===data.id), 
           
          });
      
    }
    
  
    
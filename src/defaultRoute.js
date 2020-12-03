
function defaultRoute(){
    if(! ["#search", "#summary", "#details"].find(knownRoute=>
             knownRoute = window.location.hash))
  window.location.hash="#search";
  }
  
  export default defaultRoute
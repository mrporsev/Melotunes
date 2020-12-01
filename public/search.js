let button = document.querySelector("#submit")
let input = document.querySelector('#search')
let output = document.querySelector('#output')

button.addEventListener('click', (e) => {
    getDataFromItunes()
})

function getDataFromItunes() {
    let url = 'https://itunes.apple.com/search?term='+input.value
    
    fetch(url)
    .then( data => data.json() )
    .then( json => {
        console.log(json)
        let finalHTML = ''

        json.results.forEach( song => {
            finalHTML += 
            `
    <div className="col s6 m4 l4">
        <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src="${song.artworkUrl60}">
        </div>
        <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">${song.trackCensoredName}</span>
            <p>${song.artistName}</p>
        </div>
        <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">Information<i className="material-icons right">close</i></span>
            <p><b>Price: </b>${song.collectionPrice}$</p>
            <a className="waves-effect waves-light btn-small">Add to playlist</a>
    </div>
  </div>
  </div>
            `
        })
        output.innerHTML = finalHTML;
    })
    .catch( error => console.log(error))
}
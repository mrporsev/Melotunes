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
    <div class="col s6 m4 l4">
        <div class="card">
        <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" src="${song.artworkUrl60}">
        </div>
        <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">${song.trackCensoredName}</span>
            <p>${song.artistName}</p>
        </div>
        <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">Information<i class="material-icons right">close</i></span>
            <p>${song.collectionPrice}$</p>
            <a class="waves-effect waves-light btn-small">Add to playlist</a>
    </div>
  </div>
  </div>
            `
        })
        output.innerHTML = finalHTML;
    })
    .catch( error => console.log(error))
}
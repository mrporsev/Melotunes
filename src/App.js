
import './App.css';

function App() {
  return (
    <div className="App">
  <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">Atunes</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="home.html">Homepage</a></li>
        <li><a href="index.html">Search</a></li>
        <li><a href="index.html">Playlist</a></li>
      </ul>
    </div>
  </nav>
  <div>
    <p>Enter artist: <input id="search" /></p>
    <button className="btn" id="submit">Search</button>
    <div className="row" id="output"></div> </div>
    </div>
  );
}

export default App;

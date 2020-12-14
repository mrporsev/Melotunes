import React, { useState } from "react";
const SongSearcher = ({
  searchSong,
  theSongs,
  addSong,
  allSongs,
  currentSong,
  getSong,
}) => {
  let query = " ";
  let x = "";
  if (theSongs.resultCount === 0) {
    x = alert("Result not found, please try again.");
    theSongs.resultCount = 1;
  }

  //let previewUrl = getSong();

  let t = allSongs();

  function updateWebsite() {
    updatera1(updatera - 1);
  }

  function addAsong(song) {
    addSong(song);
    updateWebsite();
  }

  const [updatera, updatera1] = useState(4);

  return (
    <div>
      <input
        className="input"
        placeholder="Song or Artist"
        onChange={(event) => (query = event.target.value)}
      ></input>
      <button
        className="deep-purple lighten-1 waves-effect waves-purple btn-small"
        onClick={() => searchSong(query)}
      >
        {" "}
        Search
      </button>

      <br></br>

      <span className="new badge" data-badge-caption="new songs">
        {t}
      </span>

      {theSongs.results.map((song) => ( <span key = {song.trackId}
         className="pics">
          <div className="card medium">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" alt="" src={song.artworkUrl100} />
            </div>
            <div className="card-content">
              <span className="card-title activator black-text text-darken-4">
                {song.trackCensoredName}
              </span>
              <p>{song.artistName}</p>
            </div>
            <div className="card-reveal black">
              <span className="card-title white-text text-darken-4">
                <i className="material-icons right">X</i>
              </span>
              <p className="white-text text-darken-4">
                <b>Price:</b>
                {song.trackPrice}$
              </p>
              <p className="white-text text-darken-4">
                <b>Genre:</b>
                {song.primaryGenreName}
              </p>
              <p className="white-text text-darken-4">
                <b>Country:</b>
                {song.country}
              </p>
              <p className="white-text text-darken-4">
                <b>Released:</b>
                {song.releaseDate}
              </p>
              <p className="white-text text-darken-4">
                <b>Collection:</b>
                {song.collectionName}
              </p>
              <p className="white-text text-darken-4">
                <b>Length:</b> {(song.trackTimeMillis / 1000 / 60).toFixed(2)}{" "}
                min
              </p>
              <button
                className="waves-effect waves-light btn-small"
                style={{ fontSize: "10px" }}
                onClick={() => addAsong(song)}
              >
                Add to playlist
              </button>

              <embed
                src={song.previewUrl}
                align="baseline"
                border="0"
                width="145"
                height="60"
                autostart="false"
                loop={true}
              ></embed>
            </div>
          </div>
        </span>
      ))}
      {x}
    </div>
  );
};

export default SongSearcher;

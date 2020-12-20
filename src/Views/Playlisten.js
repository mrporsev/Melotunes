import React, { useState } from "react";
import "../App.css";
import song from "../songs/backgroundsong.mp3";
import payNow from "../Images/payNow.png";
import arrowDown from "../Images/arrowDown.png";
import arrowUp from "../Images/arrowUp.png";
import addMore from "../Images/addMoreMoney.png";
import fire from "../services/firebase";

let songnamn = new Audio(song);

function pausa() {
  songnamn.pause();
  songnamn.currentTime = 0;
}

function playSong() {
  songnamn.play();
}

function halfVolume() {
  songnamn.volume = 0.2;
}

function fullVolume() {
  songnamn.volume = 1.0;
}

function millisToMinutesAndSeconds(millis) {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}

function getUserData() {
  let user = fire.auth().currentUser;
  return fire
    .database()
    .ref("/users/" + user.uid)
    .once("value")
    .then((snapshot) => {
      return (snapshot.val() && snapshot.val().playlist) || [];
    });
}

function getUserBankAccount() {
  let user = fire.auth().currentUser;
  return fire
    .database()
    .ref("/users/" + user.uid)
    .once("value")
    .then((snapshot) => {
      return (snapshot.val() && snapshot.val().bankAccount) || [];
    });
}

function Playlisten({ atunesModel }) {
  const [playlist, setPlaylist] = React.useState([]);
  const [bankAccount, setBankaccount] = React.useState([]);
  React.useEffect(async () => {
    async function fetchData() {
      atunesModel.playlist = await getUserData();
      atunesModel.bankAccount = await getUserBankAccount();
      setPlaylist(atunesModel.playlist);
      setBankaccount(atunesModel.bankAccount);
    }
    fetchData();
  }, []);

  function nyLista() {
    atunesModel.newList();
    updateWebsite();
  }

  function updateWebsite() {
    updatera1(updatera - 1);
  }

  function pay() {
    
   let finns = true
    for( let i = 0; i < atunesModel.playlist.length-1; i++){    //   6 
      for(let j = i + 1; j < atunesModel.playlist.length; j++)   //
      if(atunesModel.playlist[i].trackId === atunesModel.playlist[j].trackId){
        finns = false
        let namn =atunesModel.playlist[i].trackName
        alert("Remove duplicate of song " + "'" + namn + "'");
        break;
      }
      break;
    } 

    
   if(finns === true){

    atunesModel.totalcostsPlaylist(atunesModel.bankAccount);

    atunesModel.disablefnc(sum);

   atunesModel.buyPlaylist(atunesModel.playlist);
    updateWebsite();
   }
  }

  
  //FIXA (tänk på parse innan du checkar om det är en number då prompt tar in strings)
  function addMoreMoney() {
    let val = prompt("enter värde");
    let vali = parseFloat(val);

    let inputVal = atunesModel.bankAccount;
    let inputVali = parseFloat(inputVal);
    let summan = inputVali + vali;

    atunesModel.bankMoney(summan.toFixed(2), sum);

    updateWebsite();
  }

  const [updatera, updatera1] = useState(4);

  let prisen;
  let rest;

  if (atunesModel.bankAccount === null) {
    console.log("TESTRARR");
    atunesModel.bankAccount = 10;
    updateWebsite();
  }

  if (atunesModel.disabled === true) {
    rest = (
      <h5 style={{ color: "red" }}>You are missing {atunesModel.dif} $</h5>
    );
  } else if (atunesModel.skillnad === "+") {
    prisen = (
      <h5 style={{ color: "green" }}>
        You have {atunesModel.bankAccount} $ left in your bank
      </h5>
    );
  }

  let summan = atunesModel.playlist.map((element) => element.trackPrice);
  let sum = 0;
  for (let i = 0; i < summan.length; i++) {
    sum += summan[i];
  }

  let playtime = atunesModel.playlist.map((element) => element.trackTimeMillis);

  let playMin = 0;
  let playSek = 0;
  let time = 0;

  for (let i = 0; i < playtime.length; i++) {
    playMin += playtime[i];
  }
  playMin = playMin / 1000 / 60;
  playSek = playMin;
  playMin = Math.floor(playMin);
  playSek = playSek - playMin;
  playSek *= 60;
  playSek = playSek.toFixed(0);

  time = (
    <span>
      {playMin}:{playSek}
    </span>
  );

  let cirkel = <div className="water"></div>;

  function taBort(song) {
    atunesModel.removeSong(song);

    updateWebsite();
  }

  function gåUpp(song) {
    atunesModel.gåUppListan(song);
    updateWebsite();
  }

  function gåNer(song) {
    atunesModel.gåNerListan(song);
    updateWebsite();
  }

  /*
function myPlaylists(){

  updateWebsite()

} */

  let t = atunesModel.playlist.map((element) => (
    <tbody className="highlight black">
      <tr>
        <td>
          <h6 className="fontColorPlaylist">{element.artistName}</h6>
        </td>
        <td>
          <h6 className="fontColorPlaylist">{element.trackName}</h6>
        </td>
        <td>
          <h6 className="fontColorPlaylist">{element.trackPrice}$</h6>{" "}
        </td>
        <td>
          <h6 className="fontColorPlaylist">
            {millisToMinutesAndSeconds(element.trackTimeMillis)}
          </h6>
        </td>
        <td>
          <embed
            src={element.previewUrl}
            width="145"
            height="100"
            autoplay="false"
            autostart="false"
          ></embed>
        </td>
        <td>
          <img
            src={element.artworkUrl100}
            width="100"
            alt=""
            height="100"
            border="0"
          />
        </td>
        <td>
          {" "}
          <button
            className="myButton2"
            onClick={() => taBort(element.trackName)}
          >
            X
          </button>{" "}
        </td>
        <td>
          {" "}
          <button style={{ fontSize: "10px" }} onClick={() => gåUpp(element)}>
            <img src={arrowUp} width="40" alt="" height="40"></img>
          </button>
        </td>
        <td>
          {" "}
          <button style={{ fontSize: "10px" }} onClick={() => gåNer(element)}>
            <img src={arrowDown} width="40" alt="" height="40"></img>
          </button>
        </td>
      </tr>
    </tbody>
  ));

  let tabell;

  if (t.length === 0) {
    cirkel = <div className="water"></div>;

    tabell = "";
  } else {
    cirkel = "";
    {
    }
    // cirkel = <div className="water"></div>;
    tabell = (
      <div className="card-panel black">
        <table className="highlight">
          <thead>
            <tr>
              <th className="fontColorPlaylist">Artist name</th>
              <th className="fontColorPlaylist">Song</th>
              <th className="fontColorPlaylist">Price</th>
              <th className="fontColorPlaylist">Length</th>
              <th className="fontColorPlaylist">Click to listen!</th>
            </tr>
          </thead>
          {t}
        </table>
        <div className="card-panel black">
          <h6 className="fontColorPlaylist">
            Total cost of your playlist: {sum.toFixed(2)} ${" "}
          </h6>
          <h6 className="fontColorPlaylist">
            Total length of your playlist: {time}{" "}
          </h6>{" "}
        </div>
        <hr></hr>
        <br></br>

        <i className="large material-icons" style={{ color: "white" }}>
          add_shopping_cart
        </i>
        <h6 className="fontColorPlaylist">Current balance: </h6>
        <h6 className="fontColorPlaylist"> {atunesModel.bankAccount}</h6>
        <button onClick={() => pay()} disabled={atunesModel.disabled}>
          <img src={payNow} alt=""></img>
        </button>
        <button onClick={() => addMoreMoney()}>
          {" "}
          Press to insert more money{" "}
          <img src={addMore} alt="" height="183"></img>
        </button>

        {prisen}
        {rest}
      </div>
    );
  }
  return (
<div className="black">
      {console.log(atunesModel.playlist)}
      <hr className="hrBlack"></hr>
      <button className="btn-large red darken-2 waves-effect waves-red" onClick={() => nyLista()}>
        <span>Delete basket</span> <i class="material-icons right">remove_circle_outline</i>
      </button>
      <hr className="hrBlack"></hr>
      <hr className="hrGrey"></hr>
      {tabell}
      <br></br>
      {cirkel}

      <div>
        <br></br>
        <br></br>
        <input
          type="button"
          value="Play background song"
          className="waves-effect waves-light btn-small"
          onClick={() => playSong()}
        />
        <input
          type="button"
          value="Mute background song"
          className="waves-effect waves-light btn-small"
          onClick={() => pausa()}
        />
        <input
          type="button"
          value="lower the volume"
          className="waves-effect waves-light btn-small"
          onClick={() => halfVolume()}
        />
        <input
          type="button"
          value="Higher the volume"
          className="waves-effect waves-light btn-small"
          onClick={() => fullVolume()}
        />

        <br></br>
        <br></br>
        <hr></hr>
      </div>
    </div>
  );
}

export default Playlisten;

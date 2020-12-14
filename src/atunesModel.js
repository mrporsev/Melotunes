import React, { Component } from "react";
import fire from "./services/firebase";

class atunesModel {
  constructor(
    manyPlaylists = [],
    playlist = [],
    songs = [],
    convertedTime = 0,
    totalPlaytime = 0,
    totalOfSongs = 0,
    currentSongUrl = null,
    bankAccount = null,
    skillnad = null,
    dif = null,
    disabled = null
  ) {
    this.songs = songs;
    this.totalPlaytime = totalPlaytime;
    this.convertedTime = convertedTime;
    this.totalOfSongs = totalOfSongs;
    this.currentSongUrl = currentSongUrl;
    this.bankAccount = bankAccount;
    this.skillnad = skillnad;
    this.dif = dif;
    this.manyPlaylists = manyPlaylists;
    this.disabled = disabled;
    this.playlist = playlist;
  }

  /*
     setUser(user) {
         console.log("setuserid")
         console.log(user)
         this.userID = user
         console.log(this.userID)
         //this.writeUserData(user.uid, user.email)
     }
      */

  writeUserData(user) {
    console.log(user);
    fire
      .database()
      .ref("users/" + user)
      .set({
        playlist: this.playlist,
        manyPlaylists: this.manyPlaylists,
        bankAccount: this.bankAccount,
      });
  }

  disablefnc(sum) {
    if (sum > this.bankAccount) {
      this.dif = sum - this.bankAccount;
      this.dif = this.dif.toFixed(2);
      this.disabled = true;
    } else {
      this.disabled = false;
    }
  }

  buyPlaylist(playlist) {
    let user = fire.auth().currentUser;
    this.manyPlaylists.push(playlist);
    this.playlist = [];
    this.writeUserData(user.uid);
    prompt("You bought a playlist!");
  }

  removeSong(song) {
    let user = fire.auth().currentUser;
    this.playlist = this.playlist.filter(
      (element) => element.trackName != song
    );
    this.writeUserData(user.uid);
    //console.log(this.playlist)
    //console.log(song)
  }

  setCurrentSongUrl(songUrl) {
    //console.log("SET LÅT UNDER")
    this.currentSongUrl = songUrl;
    //console.log(this.currentSongUrl)
  }

  getCurrentSongUrl() {
    // console.log("GET LÅT UNDER")
    //console.log(this.currentSongUrl)
    return this.currentSongUrl;
  }

  bankMoney(money, sum) {
    let user = fire.auth().currentUser;

    this.bankAccount = money;
    this.writeUserData(user.uid);
    // console.log(this.bankAccount)

    if (money > sum) {
      this.disabled = false;
    }
    this.dif = sum - money;
    this.dif = this.dif.toFixed(2);
  }

  totalcostsPlaylist(money) {
    let user = fire.auth().currentUser;

    if (money == "") {
      alert("Please enter your current balance");
      money = 0;
      this.bankAccount = money;
    } else {
      this.bankAccount = money;

      let summan = this.playlist.map((element) => element.trackPrice);
      //console.log(summan)
      let sum = 0;
      //console.log(summan)
      for (let i = 0; i < summan.length; i++) {
        sum += summan[i];
      }

      //console.log(sum)

      if (this.bankAccount < sum) {
        this.bankAccount = this.bankAccount - sum;

        this.skillnad = "-";
      } else {
        this.bankAccount = this.bankAccount - sum;
        this.bankAccount = this.bankAccount.toFixed(2);
        this.skillnad = "+";
      }
    }
    this.writeUserData(user.uid);
  }

  getMoney() {
    return this.bankAccount;
  }

  gåNerListan(song) {
    let user = fire.auth().currentUser;
    let temp;

    for (let i = 0; i < this.playlist.length; i++) {
      if (this.playlist[i] == song) {
        temp = i;
      }
    }

    if (temp == this.playlist.length - 1) {
      alert("CANT GO DOWN");
    } else {
      let tempVärde = this.playlist[temp];
      this.playlist[temp] = this.playlist[temp + 1];
      this.playlist[temp + 1] = tempVärde;
    }

    this.writeUserData(user.uid);
  }

  gåUppListan(song) {
    let user = fire.auth().currentUser;

    let temp;
    for (let i = 0; i < this.playlist.length; i++) {
      if (this.playlist[i] === song) {
        temp = i;
      }
    }

    if (temp === 0) {
      alert("CANT GO UP");
    } else {
      let tempVärde = this.playlist[temp];
      this.playlist[temp] = this.playlist[temp - 1];
      this.playlist[temp - 1] = tempVärde;
    }
    this.writeUserData(user.uid);
  }

  addSongToPlaylist(song) {
    let user = fire.auth().currentUser;

    if (!this.playlist.includes(song)) {
      this.playlist.push(song);
      console.log("den här");
      console.log(user.uid);
      this.writeUserData(user.uid);
      this.calculateTotalPlaytime(song);
    } else {
      alert("Cant add!  " + song.trackName + " already in playlist");
    }

    //console.log(this.song)
    //console.log(this.playlist)
    //console.log(this.totalPlaytime)
  }

  newList() {
    let user = fire.auth().currentUser;
    let value = prompt(
      "Are you sure you want to reset current playlist and make a new one Press yes, else no"
    );
    if (value === "yes") {
      this.playlist = [];
      this.writeUserData(user.uid);
    }
  }

  totalSongs() {
    this.totalOfSongs = this.playlist.length;
    return this.totalOfSongs;
  }

  calculateTotalPlaytime(song) {
    this.totalPlaytime += song.trackTimeMillis;

    this.convertedTime = this.timeConverter(this.totalPlaytime);

    //console.log(this.convertedTime)
  }

  timeConverter(time) {
    return (time / 1000 / 60).toFixed(2);
  }
  render() {
    return <div>HEJSAN</div>;
  }
}

export default atunesModel;

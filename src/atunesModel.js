import React from 'react'

class atunesModel {

    constructor (playlist = [], songs = []){
        
        this.playlist = playlist;
        this.songs = songs;
    }

    addSongToPlaylist (song){
        console.log(atunesModel.song)
        this.playlist=[...this.playlist, song]
        console.log(atunesModel.addSongToPlaylist)
        
    }

    // removeFromPlaylist (song){

    //     [...this.playlist].fil
    // }sdfsdfsf




}

export default atunesModel
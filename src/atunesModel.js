
class atunesModel {

    constructor (playlist = [], songs = [], convertedTime = 0, totalPlaytime = 0){
        
        this.playlist = playlist;
        this.songs = songs;
        this.totalPlaytime = totalPlaytime;
        this.convertedTime=convertedTime;
    }

    addSongToPlaylist (song){
        console.log(this.song)
        this.playlist=[...this.playlist, song]
        console.log(this.playlist)
        this.calculateTotalPlaytime(song)
        console.log(this.totalPlaytime)
        
    }

    calculateTotalPlaytime (song){

        this.totalPlaytime += song.trackTimeMillis;

        this.convertedTime = this.timeConverter(this.totalPlaytime)

        console.log(this.convertedTime)

     }

     timeConverter(time){

      return ((time/1000)/60).toFixed(2)

     }




}

export default atunesModel
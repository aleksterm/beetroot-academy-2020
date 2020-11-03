// function PlayList() {
//   this.songs = [];
//   this.currentIndex = 0;
// }

// PlayList.prototype.add = function (song) {
//   this.songs.push(song);
// }

// PlayList.prototype.play = function () {
//   this.songs[this.currentIndex].play();
// }

// PlayList.prototype.stop = function () {
//   this.songs[this.currentIndex].stop();
// }

// PlayList.prototype.next = function () {
//   this.stop();
//   this.currentIndex++;

//   if (this.currentIndex === this.songs.length) {
//     this.currentIndex = 0;
//   }

//   this.songs[this.currentIndex].play();
// }

// PlayList.prototype.render = function () {
//   const list = document.getElementById('list');
//   list.innerHTML = '';

//   this.songs.forEach(song => {
//     list.innerHTML += song.toHtml();
//   });
// }

class PlayList {
  constructor(songs) {
    this.songs = songs && songs.length ? songs : [];
    this.currentIndex = 0;
  }

  add(song) {
    this.songs.push(song);
  }

  play() {
    this.songs[this.currentIndex].play();
  }
  
  stop() {
    this.songs[this.currentIndex].stop();
  }
  
  next() {
    this.stop();
    this.currentIndex++;
  
    if (this.currentIndex === this.songs.length) {
      this.currentIndex = 0;
    }
  
    this.songs[this.currentIndex].play();
  }
  
  render() {
    const list = document.getElementById('list');
    list.innerHTML = '';
  
    this.songs.forEach(song => {
      list.innerHTML += song.toHtml();
    });
  }
}

export default PlayList;

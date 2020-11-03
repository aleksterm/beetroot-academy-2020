// function Media(title, duration) {
//   this.title = title;
//   this.duration = duration;
//   this.isPlaying = false;
// }

// Media.prototype.play = function () {
//   this.isPlaying = true;
// }

// Media.prototype.stop = function () {
//   this.isPlaying = false;
// }

class Media {
  constructor(title, duration) {
    this.title = title;
    this.duration = duration;
    this.isPlaying = false;
  }

  play() {
    this.isPlaying = true;
  }

  stop() {
    this.isPlaying = false;
  }
}

export default Media;

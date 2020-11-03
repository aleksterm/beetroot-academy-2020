import Media from './media';

// function Song(title, duration, artist) {
//   this.artist = artist;
//   Media.call(this, title, duration);
// }

// Song.prototype = Object.create(Media.prototype);
// Song.prototype.constructor = Song;

// Song.prototype.toHtml = function(){
//   return `<div class="row py-3 ${this.isPlaying ? 'current': ''}">
//   <div class="col-sm-9">${this.title} - ${this.artist}</div>
//   <div class="col-sm-3">${this.duration}</div></div>`;
// }

class Song extends Media {
  constructor(title, duration, artist) {
    super(title, duration);
    this.artist = artist;
  }

  toHtml() {
    return `<div class="row py-3 ${this.isPlaying ? 'current': ''}">
    <div class="col-sm-9">${this.title} - ${this.artist}</div>
    <div class="col-sm-3">${this.duration}</div>
    </div>`;
  }
}

export default Song;

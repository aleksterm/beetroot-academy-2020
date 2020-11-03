import Media from './media';

// function Movie (title, duration, year) {
//   this.year = year;
//   Media.call(this, title, duration);
// }

// Movie.prototype = Object.create(Media.prototype);
// Movie.prototype.constructor = Movie;

// Movie.prototype.toHtml = function(){
//   return `<div class="row py-3 ${this.isPlaying ? 'current': ''}">
//   <div class="col-sm-9">${this.title} - ${this.year}</div>
//   <div class="col-sm-3">${this.duration}</div></div>`;
// }

class Movie extends Media {
  constructor(title, duration, year) {
    super(title, duration);
    this.year = year;
  }

  toHtml() {
    return `<div class="row py-3 ${this.isPlaying ? 'current': ''}">
    <div class="col-sm-9">${this.title} - ${this.year}</div>
    <div class="col-sm-3">${this.duration}</div>
    </div>`;
  }
}

export default Movie;

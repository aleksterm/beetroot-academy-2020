import Song from './components/song';
import Movie from './components/movie';
import PlayList from './components/playlist';

const playList = new PlayList();
const s1 = new Song('TEST', 'Tom', '03:12');
const s2 = new Song('TEST 1', 'Bill', '05:22');
const m1 = new Movie('Man of steel', 2012, '02:33:15');

playList.add(s1);
playList.add(s2);
playList.add(m1);
playList.render();

const play = document.getElementById('btn-play');
const stop = document.getElementById('btn-stop');
const next = document.getElementById('btn-next');

play.onclick = function() {
  playList.play();  
  playList.render();
}

stop.onclick = function() {
  playList.stop();
  playList.render();
}

next.onclick = function() {
  playList.next();
  playList.render();
}

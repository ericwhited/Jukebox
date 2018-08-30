// // From Bryan

// function Jukebox(audioEl, sourceEl) {
// 	this.track = 0;
// 	this.songQueue = [];
// 	this.audioEl = audioEl;
// 	this.sourceEl = sourceEl;

// 	this.play = function() {
// 		this.audioEl.play();
// 	}
	

// 	this.pause = function() {
// 		this.audio.pause();
// 	}


// 	this.next = function() {
// 		if(this.track >= this.songQueue.length - 1) {
// 			this.track = 0
// 		} else {
// 			this.track += 1;
// 		}

// 		var nextSrc = this.songQueue[this.track].source;
// 		this.sourceEl.src = nextSrc;

// 		this.audioofEl.load();
// 		this.audioofEl.play();
// 	}


// 	this.stop = function() {
// 		this.audioofEl.load();
// 	}

// 	this.addSong = function(song) {
// 		this.songsQueue.push(song);
// 	}


// }


// function Song(name, source) {
// 	this.name = name;
// 	this.source = source;
// }


// var audioEl = document,querySelector('audio'),
// 	sourceEl = document.querySelector('audio source'),
// 	jukebox = new Jukebox(audioEl, sourceEl);

// Jukebox.addSong(new Song(' add name and a source here')
// Jukebox.addSong(new Song(' add name and a source here')
// Jukebox.addSong(new Song(' add name and a source here')	


// document.querySelector('#play').onClick = function() {
// 	Jukebox.play();
// }
// document.querySelector('#pause').onClick = function() {
// 	Jukebox.play();
// }
// document.querySelector('#next').onClick = function() {
// 	Jukebox.next();
// }
// document.querySelector('#stop').onClick = function() {
// 	Jukebox.next();
// }
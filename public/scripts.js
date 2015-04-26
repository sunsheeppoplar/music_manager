// set up li for song
var createLiForSong = function(li, song) {
	li.innerHTML = "";
	var songText = song.title + " is by " + song.artist + ", which can be found on the album, " + song.album;
	var songTextNode = document.createTextNode(songText
		);
	li.appendChild(songTextNode);
}

// show one song
var showSong = function(song) {
	var li = document.createElement("li");
	createLiForSong(li, song);
	var ul = document.getElementById("playlist");
	ul.appendChild(li);
}

// show all songs
var showAllSongs = function () {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "http://localhost:3000/songs");
	xhr.addEventListener("load", function() {
		var songs = JSON.parse(xhr.response);
		songs.forEach(function(song) {
			showSong(song);
		})
	})
	xhr.send();
}


// create playlist route
var createPlaylistButton = document.getElementById("submit");
createPlaylistButton.addEventListener("click", function() {
	var newTitle = document.getElementById("newTitleName");
	var newArtist = document.getElementById("newArtistName");
	var newAlbum = document.getElementById("newAlbumName");

	var xhr = new XMLHttpRequest();
	xhr.open("POST", "http://localhost:3000/songs");
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.addEventListener("load", function() {
		var returnedSong = JSON.parse(xhr.response);
		showSong(returnedSong)
		newTitle.value = "";
		newArtist.value = "";
		newAlbum.value = "";
	});

	var newSong = {
		title: newTitle.value,
		artist: newArtist.value, 	
		album: newTitle.value
	};
	xhr.send(JSON.stringify(newSong));
});
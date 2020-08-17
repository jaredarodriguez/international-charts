const cardContainer = document.getElementById("card-container");

import config from "./env.js";
// Get lyric from API
async function displayPopularMusic() {
  const proxyURL = "https://cors-anywhere.herokuapp.com/";
  const apiURL = `https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=5&country=it&f_has_lyrics=1&apikey=${config.apiKey}`;

  try {
    const response = await fetch(proxyURL + apiURL);
    const data = await response.json();
    const trackList = data.message.body.track_list;

    trackList.forEach(function (track) {
    // Create wrapper for track data
      const wrapperDiv = document.createElement("div");
      wrapperDiv.id = 'wrapper-div'
    // Create Artist, track and album and add ID p
      var artistDiv = document.createElement("h1")
      var trackDiv = document.createElement("div");
      var albumDiv = document.createElement("div");
      artistDiv.append(document.createTextNode(track.track.artist_name));
      trackDiv.append(document.createTextNode(track.track.track_name));
      albumDiv.append(document.createTextNode(track.track.album_name));
    // Append Artist, track and album data to wrapper
      wrapperDiv.append(artistDiv);
      wrapperDiv.append(trackDiv);
      wrapperDiv.append(albumDiv);
    // Style wrapper 
    // Append wrapper to container div
      cardContainer.appendChild(wrapperDiv);
    });
  } catch (error) {
    console.log(error);
  }
}



//on load
displayPopularMusic();

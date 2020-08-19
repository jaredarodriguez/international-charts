import config from "./env.js";

// DOM elements
const countryContainer = document.getElementById("country-container");
const openSlide = document.getElementById('open-slide');
const closeSlide = document.getElementById('close-slide');

// Get top hits from API
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
    // Create Artist, track and album and add ID 
      var artistDiv = document.createElement("h1")
      var trackDiv = document.createElement("div");
      var albumDiv = document.createElement("div");
    // Reduce font size depending on artist_name length
    track.track.artist_name.length > 20 ? artistDiv.classList.add('long-title') : artistDiv.classList.remove('long-title')
      artistDiv.append(document.createTextNode(`Artist: ${track.track.artist_name}`));
      trackDiv.append(document.createTextNode(`Track: ${track.track.track_name}`));
      albumDiv.append(document.createTextNode(`Album: ${track.track.album_name}`));
    // Append Artist, track and album data to wrapper
      wrapperDiv.append(artistDiv);
      wrapperDiv.append(trackDiv);
      wrapperDiv.append(albumDiv);
    // Style wrapper 
    // Append wrapper to container div
      countryContainer.appendChild(wrapperDiv);
    });
  } catch (error) {
    console.log(error);
  }
}
displayPopularMusic();


// Events 
function openSlideMenu() {
  console.log('hit')
  document.getElementById('side-menu').style.width = '250px';
  document.getElementById('main').style.marginLeft = '250px';
}

function closeSlideMenu() {
  sideMenu.style.width = '0'
}
 
// Event Listeners
openSlide.addEventListener('click', openSlideMenu);
closeSlide.addEventListener('click', closeSlideMenu);

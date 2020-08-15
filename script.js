const artist_name = document.getElementById('artist_name');
const track_name = document.getElementById('track_name');
const album_name = document.getElementById('album_name')



import config from './env.js'
// Get lyric from API
    async function getPopularMusic() {
        const proxyURL = 'https://cors-anywhere.herokuapp.com/';
        const apiURL = `https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=5&country=it&f_has_lyrics=1&apikey=${config.apiKey}`
        try {
            const response = await fetch(proxyURL + apiURL);
            const data = await response.json();
            const trackList = data.message.body.track_list;
            
            trackList.map((e) => {
                // Render Artist Name
                artist_name.innerText = e.track.artist_name;
                // Render Track Name
                track_name.innerText = e.track.track_name;
                // Render Album Name 
                album_name.innerText = e.track.album_name;
            })
        } catch (error) {
            console.log(error);
        }
    }

    //on load 
    getPopularMusic(); 


    


import config from './env.js'
// Get lyric from API
    async function getPopularMusic() {
        const proxyURL = 'https://cors-anywhere.herokuapp.com/';
        const apiURL = `https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=5&country=it&f_has_lyrics=1&apikey=${config.apiKey}`
        try {
            const response = await fetch(proxyURL + apiURL);
            const data = await response.json();
            if (data) {
                console.log(data.message.body.track_list);
            }
        } catch (error) {
            console.log(error);
        }
    }

    //on Load 
    getPopularMusic(); 


    


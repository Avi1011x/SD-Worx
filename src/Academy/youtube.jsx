import axios from "axios";

class Youtube {
  constructor() {
    this.headers = {
      'X-RapidAPI-Key': 'ebdec5e4c0mshbd5e41dc95fbc23p1009b6jsn394ab1f40d38',
    'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
    };
  }

  async searchPlayList(query) {
    try {
      const options = {
        method: "GET",
        url: "https://yt-api.p.rapidapi.com/search",
        params: {
          query,
          type: 'playlist',
        },
        headers: this.headers,
      };

      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getVideosFromPlaylist(query) {
    try {
      const options = {
        method: "GET",
        url: 'https://yt-api.p.rapidapi.com/playlist',
        params: {
          id:query,
        },
        headers: this.headers,
      };

      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default Youtube;

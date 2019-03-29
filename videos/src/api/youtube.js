import axios from 'axios';

const KEY = 'AIzaSyCJVYqD8lJWGs_OQ2y1q1N7BTKhuQii-F4';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
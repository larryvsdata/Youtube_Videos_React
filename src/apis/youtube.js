import axios from "axios";

const KEY = "AIzaSyBCMkTWyKhEmhSYY_r4J27QtJs2K_vPMAM"


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
import axios from "axios";

// const BASE_URL = 'https://youtube-v31.p.rapidapi.com/search';
const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    url: BASE_URL,
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': 'f9ef4be11bmsh51a55942b29f2b9p1adb34jsn17419f9674e9',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromAPI = async(url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options)
    // const {data} = await axios.get(`${BASE_URL}`, options)
    return data;
  }
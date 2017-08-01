import axios from 'axios';

const API_KEY ='7169c3bbe130e018e21feb811884c22a';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  // &q and
  const url = `${ROOT_URL}&q=${city},pl`;
  const request = axios.get(url);


  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
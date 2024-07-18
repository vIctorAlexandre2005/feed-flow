// services/newsService.js
import axios from 'axios';

export const API_KEY = 'pub_48787ceb09c0c05e62f6efc09517e0bdcc29d';


export const fetchNews = async () => {
    const randomQuery = () => {
        const queries = [
            "business",
            "crime",
            "education",
            "food",
            "technology"
        ];
        return queries[Math.floor(Math.random() * queries.length)];
    };
    const BASE_URL = `https://newsdata.io/api/1/news?apikey=pub_48787ceb09c0c05e62f6efc09517e0bdcc29d&category=crime`;
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        apikey: API_KEY,
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};

import axios from "axios";

export async function getNewsUs() {
    const response = await axios.get("https://newsdata.io/api/1/news?apikey=pub_48787ceb09c0c05e62f6efc09517e0bdcc29d&country=us");
    const data = response.data;

    return data.results
};
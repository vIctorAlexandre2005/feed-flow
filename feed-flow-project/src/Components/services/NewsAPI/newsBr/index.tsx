import axios from "axios";

export async function getNewsBr() {
    const response = await axios.get("https://newsdata.io/api/1/news?apikey=pub_48787ceb09c0c05e62f6efc09517e0bdcc29d&country=br");
    const data = response.data;

    return data.results
};
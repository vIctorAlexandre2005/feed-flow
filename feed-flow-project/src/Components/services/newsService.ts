import axios from "axios";
import { Noticies } from "../../../utils/interface/InterfaceContext";

export const getNoticiesData = async (): Promise<Array<Noticies>> => {
    const usersResponse = await axios.get("https://randomuser.me/api/?results=100");
    const usersResponse200 = await axios.get("https://randomuser.me/api/?results=200");
    const newsResponseUs = await axios.get(`https://newsdata.io/api/1/latest?apikey=pub_49881c9e8d8fd418cdfdcfc0f85d3364881a6&q=all&country=br`);
    const newsDataApiUS = await axios.get(`https://newsdata.io/api/1/latest?apikey=pub_48787ceb09c0c05e62f6efc09517e0bdcc29d&q=apple&country=br`);
    const newsDataApiCrime = await axios.get(`https://newsdata.io/api/1/latest?apikey=pub_49881c9e8d8fd418cdfdcfc0f85d3364881a6&q=crime&country=br`);

    const combinedData = usersResponse.data.results.map((user: any, index: number) => ({
        user,
        user200: usersResponse200.data.results[index % usersResponse200.data.results.length],
        newsUs: newsResponseUs.data.results[index % newsResponseUs.data.results.length],
        newsDataUsApi: newsDataApiUS.data.results[index % newsDataApiUS.data.results.length],
        newsDataApiCrime: newsDataApiCrime.data.results[index % newsDataApiCrime.data.results.length],
    }));

    return combinedData;
};
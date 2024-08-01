import axios from "axios"

export async function getNewsBitcoin() {
    try {
        const response = await axios.get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=343a4fdb5cf14397a3f251cba8370a51");
        const data = response.data;

        return data?.articles;
    } catch (error) {
        console.error("Erro ao pegar dados do getNewsBitc:", error)
    }
};

export async function getNewsApple() {
    try {
        const response = await axios.get("https://newsapi.org/v2/everything?q=apple&from=2024-07-23&to=2024-07-23&sortBy=popularity&apiKey=343a4fdb5cf14397a3f251cba8370a51");
        const data = response.data;

        return data?.articles;
    } catch (error) {
        console.error("Erro ao pegar dados do getNewsApple:", error)
    }
};

export async function getNewsBusiness() {
    try {
        const response = await axios.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=343a4fdb5cf14397a3f251cba8370a51");
        const data = response.data;

        return data?.articles;
    } catch (error) {
        console.error("Erro ao pegar dados do getNewsApple:", error)
    }
};
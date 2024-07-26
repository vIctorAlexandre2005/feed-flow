import axios from "axios"

export async function getUsersOne() {
    try {
        const response = await axios.get("https://randomuser.me/api/?results=100");
        const data = response.data;

        return data?.results;
    } catch (error) {
        console.error("Erro ao pegar dados do getNewsBitc:", error)
    }
};

export async function getUsersTwo() {
    try {
        const response = await  axios.get("https://randomuser.me/api/?results=200");
        const data = response.data;

        return data?.results;
    } catch (error) {
        console.error("Erro ao pegar dados do getNewsApple:", error)
    }
};

export async function getUsersThree() {
    try {
        const response = await axios.get("https://randomuser.me/api/?results=300");
        const data = response.data;

        return data?.results;
    } catch (error) {
        console.error("Erro ao pegar dados do getNewsApple:", error)
    }
};
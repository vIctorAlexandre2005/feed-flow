import { Box, Flex } from "@chakra-ui/react";
import axios from "axios";
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from "react";
import { ClipLoader, PulseLoader } from "react-spinners";
import { auth, provider } from "../services/firebase";
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRouter } from "next/router";
import { User } from "firebase/auth";

export interface Noticies {

}


export interface VariablesContextType {
    combinedData: Array<Noticies>;
    setCombinedData: Dispatch<SetStateAction<Array<Noticies>>>;
    user: User | null | undefined;
    handleSignIn: () => void;
}

const defaultValue: VariablesContextType = {
    combinedData: [],
    setCombinedData: () => { },
    user: null,
    handleSignIn: () => {},
};

const ParamsProvider = createContext<VariablesContextType>(defaultValue);

const NewsContext = ({ children }: { children: ReactNode }) => {
    const [combinedData, setCombinedData] = useState<Array<Noticies>>([]);
    const [user] = useAuthState(auth as any);

    function handleSignIn() {
        auth.signInWithPopup(provider).catch(alert);
    };
    
    async function noticiesData() {
        try {
            const [
                usersResponse, 
                usersResponse200, 
                usersResponse300,
                newsResponseBr, 
                newsResponseApple, 
                newsResponseUs
            ] = await Promise.all([
                axios.get("https://randomuser.me/api/?results=100"),
                axios.get("https://randomuser.me/api/?results=200"),
                axios.get("https://randomuser.me/api/?results=300"),
                axios.get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=343a4fdb5cf14397a3f251cba8370a51"),
                axios.get("https://newsapi.org/v2/everything?q=apple&from=2024-07-23&to=2024-07-23&sortBy=popularity&apiKey=343a4fdb5cf14397a3f251cba8370a51"),
                axios.get("https://newsapi.org/v2/everything?q=tesla&from=2024-06-25&sortBy=publishedAt&apiKey=343a4fdb5cf14397a3f251cba8370a51"),
            ]);

            const usersData = usersResponse.data?.results;
            const userData200 = usersResponse200.data?.results;
            const userData300 = usersResponse300.data?.results;
            const newsDataBr = newsResponseBr.data?.articles;
            const newsApple = newsResponseApple.data.articles;
            const newsDataUs = newsResponseUs.data?.articles;

            // Combine the data as needed
            const combined = usersData.map((user: any, index: number) => ({
                user,
                user200: userData200[index % userData200?.length], 
                user300: userData300[index % userData300?.length],
                newsBr: newsDataBr[index % newsDataBr?.length], // Just an example of combininga
                newsAp: newsApple[index % newsApple?.length],
                newsUs: newsDataUs[index % newsDataUs?.length]
            }));

            setCombinedData(combined);
        } catch (error) {
            console.log("Erro ao pegar combinação de dados:", error);
        }
    }

    useEffect(() => {
        noticiesData();
    }, []);

    return (
        <ParamsProvider.Provider
            value={{
                combinedData,
                setCombinedData,
                user,
                handleSignIn
            }}
        >
            {children}
        </ParamsProvider.Provider>
    );
};

export const useContextFeedContext = () => useContext(ParamsProvider);
export default NewsContext;

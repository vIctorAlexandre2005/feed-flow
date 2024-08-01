import { Box, Flex } from "@chakra-ui/react";
import axios from "axios";
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from "react";
import { ClipLoader, PulseLoader } from "react-spinners";
import { auth, provider } from "../services/firebase";
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRouter } from "next/router";
import { User } from "firebase/auth";
import { NotFound404 } from "../404";
import { Loader } from "../Loader";
import { Noticies, VariablesContextType, defaultValue } from "../../../utils/interface/InterfaceContext";

export interface InstallPromptEvent extends Event {
    prompt: () => void;
    userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

const ParamsProvider = createContext<VariablesContextType>(defaultValue);

const NewsContext = ({ children }: { children: ReactNode }) => {
    const [combinedData, setCombinedData] = useState<Array<Noticies>>([]);
    const [installPrompt, setInstallPrompt] = useState<InstallPromptEvent | null>(null);
    const [user] = useAuthState(auth as any);
    const router = useRouter();

    useEffect(() => {
        if ('serviceWorker' in navigator) {
            const beforeInstallPromptHandler = (event: Event) => {
                event.preventDefault();
                setInstallPrompt(event as InstallPromptEvent);
            };

            window.addEventListener('beforeinstallprompt', beforeInstallPromptHandler);

            window.addEventListener('appinstalled', () => {
                console.log('');
            });

            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js').then((registration) => {
                    console.log('ServiceWorker registration successful with scope: ', registration.scope);
                }, (err) => {
                    console.log('ServiceWorker registration failed: ', err);
                });
            });

            return () => {
                window.removeEventListener('beforeinstallprompt', beforeInstallPromptHandler);
            };
        }
    }, []);

    console.log(user?.metadata.lastSignInTime)

    const [error, setError] = useState<null | string>(null);

    const randomQueryOne = () => {
        const queries = [
            "Funny",
            "Art",
            "Animals",
            "Coding",
        ];
        return queries[Math.floor(Math.random() * queries.length)];
    };

    const randomQueryTwo = () => {
        const queries = [
            "Space",
            "Nature",
            "Night",
            "Underwater",
        ];
        return queries[Math.floor(Math.random() * queries.length)];
    };

    const randomQueryThree = () => {
        const queries = [
            "Adult",
            "Tesla",
            "Apple",
            "Love",
        ];
        return queries[Math.floor(Math.random() * queries.length)];
    };

    const queryOne = randomQueryOne();
    const queryTwo = randomQueryTwo();
    const queryThree = randomQueryThree();
    
    async function noticiesData() {
        try {
            const [
                usersResponse, 
                usersResponse200, 
                usersResponse300,
                newsResponseBr, 
                newsResponseApple, 
                newsResponseUs,
                newsDataApiUS,
            ] = await Promise.all([
                axios.get("https://randomuser.me/api/?results=100"),
                axios.get("https://randomuser.me/api/?results=200"),
                axios.get("https://randomuser.me/api/?results=300"),
                axios.get(`https://newsapi.org/v2/everything?q=${queryOne}&apiKey=343a4fdb5cf14397a3f251cba8370a51`),
                axios.get(`https://newsapi.org/v2/everything?q=${queryTwo}&from=2024-07-23&to=2024-07-23&sortBy=popularity&apiKey=343a4fdb5cf14397a3f251cba8370a51`),
                axios.get(`https://newsapi.org/v2/everything?q=${queryThree}&from=2024-07-24&sortBy=publishedAt&apiKey=343a4fdb5cf14397a3f251cba8370a51`),
                axios.get("https://newsdata.io/api/1/news?apikey=pub_48787ceb09c0c05e62f6efc09517e0bdcc29d&country=br"),
            ]);

            const usersData = usersResponse.data?.results;
            const userData200 = usersResponse200.data?.results;
            const userData300 = usersResponse300.data?.results;
            const newsDataBr = newsResponseBr.data?.articles;
            const newsApple = newsResponseApple.data.articles;
            const newsDataUs = newsResponseUs.data?.articles;
            const newsData = newsDataApiUS.data?.results;


            // Combine the data as needed
            const combined = usersData.map((user: any, index: number) => ({
                user,
                user200: userData200[index % userData200?.length], 
                user300: userData300[index % userData300?.length],
                newsBr: newsDataBr[index % newsDataBr?.length], // Just an example of combininga
                newsAp: newsApple[index % newsApple?.length],
                newsUs: newsDataUs[index % newsDataUs?.length],
                newsDataUsApi: newsData[index % newsData?.length]
            }));
            console.log(combined)
            setCombinedData(combined);
            setError(null);
        } catch (error) {
            console.log("Erro ao pegar combinação de dados:", error);
            setError("Ocorreu um erro ao carregar os dados. Tente novamente mais tarde.");
        }
    };

    useEffect(() => {
        noticiesData();
    }, []);

    function handleInstall() {
        if (installPrompt) {
            installPrompt.prompt();
            installPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the A2HS prompt');
                } else {
                    console.log('User dismissed the A2HS prompt');
                }
                setInstallPrompt(null);
            });
        }
    };

    return (
        <ParamsProvider.Provider
            value={{
                combinedData,
                setCombinedData,
                installPrompt,
                handleInstall,
                user,
                error,
                setError
            }}
        >
            {children}
        </ParamsProvider.Provider>
    );
};

export const useContextFeedContext = () => useContext(ParamsProvider);
export default NewsContext;

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
import { InstallPromptEvent } from "../../../utils/interface/PromptEvent";
import { useQuery } from "react-query";
import { getNoticiesData } from "../services/newsService";
import { usePWA } from "../services/pwa";

const ParamsProvider = createContext<VariablesContextType>(defaultValue);

const NewsContext = ({ children }: { children: ReactNode }) => {
    const [error, setError] = useState<null | string>(null);
    const [user] = useAuthState(auth as any);
    const router = useRouter();
    const { data: combinedData } = useQuery<Noticies[]>('noticiesData', getNoticiesData);
    const installPrompt = usePWA();
    // função para combinar os dados de API's diferentes

    useEffect(() => {
        getNoticiesData();
    }, []);

    const handleInstall = () => {
        if (installPrompt) {
            installPrompt.prompt();
            installPrompt.userChoice.then((choiceResult) => {
                console.log(choiceResult.outcome === 'accepted' ? 'User accepted' : 'User dismissed');
            });
        }
    };

    return (
        <ParamsProvider.Provider
            value={{
                combinedData,
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

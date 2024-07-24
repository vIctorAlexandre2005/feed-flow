import axios from "axios";
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from "react";
import { getNewsBr } from "../services/NewsAPI/newsBr";

interface NoticiesBR {

}

export interface VariablesContextType {
    newsDataBr: Array<NoticiesBR>;
    setNewsDataBr: Dispatch<SetStateAction<Array<NoticiesBR>>>;
}

const defaultValue: VariablesContextType = {
    newsDataBr: [],
    setNewsDataBr: () => { },
};

const ParamsProvider = createContext<VariablesContextType>(defaultValue);

const NewsContext = ({ children }: { children: ReactNode }) => {
    const [newsDataBr, setNewsDataBr] = useState<Array<NoticiesBR>>([]);

    async function getDataNewsBr() {
        try {
            const newsBrResponse = await getNewsBr();
            setNewsDataBr(newsBrResponse);
        } catch (error) {
            console.error("Erro ao pegar API de notícias BR:", error);
        }
    }

    useEffect(() => {
        getDataNewsBr();
    }, [])

    return (
        <ParamsProvider.Provider
            value={{
                newsDataBr,
                setNewsDataBr
            }}
        >
            {children}
        </ParamsProvider.Provider>
    );
};

export const useContextFeedContext = () => useContext(ParamsProvider);
export default NewsContext;

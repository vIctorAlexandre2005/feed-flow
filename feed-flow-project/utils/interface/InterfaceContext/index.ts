import { User } from "firebase/auth";
import { Dispatch, SetStateAction } from "react";
import { Url } from "url";

export interface Noticies {
    newsDataUsApi?: {
        link: string; // ou (url: string) => string, dependendo do caso
        title: string;
    };
}

export interface VariablesContextType {
    combinedData: Array<Noticies>;
    setCombinedData: Dispatch<SetStateAction<Array<Noticies>>>;
    user: User | null | undefined;
    error: null | string;
    setError: Dispatch<SetStateAction<null | string>>;
}

export const defaultValue: VariablesContextType = {
    combinedData: [],
    setCombinedData: () => { },
    user: null,
    error: null,
    setError: () => { },
};
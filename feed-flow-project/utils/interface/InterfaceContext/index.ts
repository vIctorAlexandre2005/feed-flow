import { User } from "firebase/auth";
import { Dispatch, SetStateAction } from "react";
import { Url } from "url";
import { InstallPromptEvent } from "../PromptEvent";

export interface Noticies {
    newsDataUsApi?: {
        link: string; // ou (url: string) => string, dependendo do caso
        title: string;
    };
    newsDataApiCrime?: {
        link: string;
        title: string;
    };
}

export interface VariablesContextType {
    combinedData: Array<Noticies> | undefined;
    user: User | null | undefined;
    error: null | string;
    setError: Dispatch<SetStateAction<null | string>>;
    handleInstall: () => void;
    installPrompt: InstallPromptEvent | null;

}

export const defaultValue: VariablesContextType = {
    combinedData: [],
    user: null,
    error: null,
    setError: () => { },
    handleInstall: () => { },
    installPrompt: null,
};
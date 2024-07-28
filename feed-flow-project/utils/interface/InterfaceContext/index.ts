import { User } from "firebase/auth";
import { Dispatch, SetStateAction } from "react";

export interface Noticies {

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
    setError: () => {},
};